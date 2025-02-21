import express, { Request, Response } from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = 'your-secret-key';

// Database setup
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to SQLite database');
    
    // Create tables
    db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE,
        password TEXT,
        full_name TEXT,
        user_type TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS business_profiles (
        id TEXT PRIMARY KEY,
        user_id TEXT UNIQUE,
        company_name TEXT,
        industry TEXT,
        website_url TEXT,
        interests TEXT,
        collab_types TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );

      CREATE TABLE IF NOT EXISTS influencer_profiles (
        id TEXT PRIMARY KEY,
        user_id TEXT UNIQUE,
        social_platforms TEXT,
        follower_count INTEGER,
        content_niche TEXT,
        content_types TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `);
  }
});

// Hash password using crypto (built-in Node.js module)
const hashPassword = (password: string): string => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
};

const verifyPassword = (password: string, hashedPassword: string): boolean => {
  const [salt, hash] = hashedPassword.split(':');
  const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash === verifyHash;
};

interface RegisterRequest {
  email: string;
  password: string;
  full_name: string;
  user_type: 'business' | 'influencer';
  profile_data: any;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  password: string;
  full_name: string;
  user_type: string;
}

// Registration endpoint
app.post('/api/auth/register', (req: Request<{}, {}, RegisterRequest>, res: Response) => {
  console.log('Registration request:', JSON.stringify(req.body, null, 2));
  const { email, password, full_name, user_type, profile_data } = req.body;

  // Add detailed validation
  if (!email) console.log('Missing email');
  if (!password) console.log('Missing password');
  if (!full_name) console.log('Missing full_name');
  if (!user_type) console.log('Missing user_type');
  if (!profile_data) console.log('Missing profile_data');
  
  // Validate required fields
  if (!email || !password || !full_name || !user_type || !profile_data) {
    const missingFields = {
      email: !email,
      password: !password,
      full_name: !full_name,
      user_type: !user_type,
      profile_data: !profile_data
    };
    console.error('Missing fields:', missingFields);
    return res.status(400).json({ error: 'Missing required fields', details: missingFields });
  }

  const id = crypto.randomUUID();
  const hashedPassword = hashPassword(password);

  db.run(
    'INSERT INTO users (id, email, password, full_name, user_type) VALUES (?, ?, ?, ?, ?)',
    [id, email, hashedPassword, full_name, user_type],
    (err) => {
      if (err) {
        console.error('User registration error:', err);
        return res.status(400).json({ error: err.message });
      }

      if (user_type === 'business') {
        db.run(
          'INSERT INTO business_profiles (id, user_id, company_name, industry, website_url, interests, collab_types) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [
            crypto.randomUUID(),
            id,
            profile_data.company_name,
            profile_data.industry,
            profile_data.website_url,
            JSON.stringify(profile_data.interests),
            JSON.stringify(profile_data.collab_types)
          ],
          (err) => {
            if (err) {
              console.error('Business profile creation error:', err);
              return res.status(400).json({ error: 'Registration failed' });
            }
            const token = jwt.sign({ userId: id }, JWT_SECRET);
            res.json({ token });
          }
        );
      } else {
        db.run(
          'INSERT INTO influencer_profiles (id, user_id, social_platforms, follower_count, content_niche, content_types) VALUES (?, ?, ?, ?, ?, ?)',
          [
            crypto.randomUUID(),
            id,
            JSON.stringify(profile_data.social_platforms),
            profile_data.follower_count,
            JSON.stringify(profile_data.content_niche),
            JSON.stringify(profile_data.content_types)
          ],
          (err) => {
            if (err) {
              console.error('Influencer profile creation error:', err);
              return res.status(400).json({ error: 'Registration failed' });
            }
            const token = jwt.sign({ userId: id }, JWT_SECRET);
            res.json({ token });
          }
        );
      }
    }
  );
});

// Login endpoint
app.post('/api/auth/login', (req: Request<{}, {}, LoginRequest>, res: Response) => {
  const { email, password } = req.body;
  
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user: User) => {
    if (err) {
      return res.status(400).json({ error: 'Login failed' });
    }
    if (!user || !verifyPassword(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    res.json({ token });
  });
});

const MAX_RETRIES = 5;

const runWithRetry = (query: string, params: any[], callback: (err: Error | null, row: any) => void) => {
  let attempts = 0;

  const executeQuery = () => {
    db.get(query, params, (err, row) => {
      if (err) {
        if (err.message.includes('database is locked') && attempts < MAX_RETRIES) {
          attempts++;
          console.log(`Retrying query... Attempt ${attempts}`);
          setTimeout(executeQuery, 100); // Wait 100ms before retrying
        } else {
          callback(err, null);
        }
      } else {
        callback(null, row);
      }
    });
  };

  executeQuery();
};

// Add this endpoint to fetch counts of brands and influencers
app.get('/api/stats', (req: Request, res: Response) => {
  const statsQuery = `
    SELECT 
      (SELECT COUNT(*) FROM business_profiles) AS brands,
      (SELECT COUNT(*) FROM influencer_profiles) AS influencers
  `;

  runWithRetry(statsQuery, [], (err, row) => {
    if (err) {
      console.error('Error fetching stats:', err);
      return res.status(500).json({ error: 'Failed to fetch stats' });
    }
    console.log('Fetched Stats:', row);
    res.json({
      brands: row.brands || 0,
      influencers: row.influencers || 0,
      campaigns: 0 // Placeholder for campaigns count
    });
  });
});

app.get('/api/users', (req: Request, res: Response) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ error: 'Failed to fetch users' });
    }
    res.json(rows);
  });
});

// Check for missing business profile values
app.get('/api/business-profiles/missing', (req: Request, res: Response) => {
  db.all('SELECT * FROM business_profiles WHERE company_name IS NULL OR website_url IS NULL OR collab_types IS NULL', [], (err, rows) => {
    if (err) {
      console.error('Error fetching missing business profiles:', err);
      return res.status(500).json({ error: 'Failed to fetch missing business profiles' });
    }
    res.json(rows);
  });
});

// Check for missing influencer profile values
app.get('/api/influencer-profiles/missing', (req: Request, res: Response) => {
  db.all('SELECT * FROM influencer_profiles WHERE content_niche IS NULL OR content_types IS NULL', [], (err, rows) => {
    if (err) {
      console.error('Error fetching missing influencer profiles:', err);
      return res.status(500).json({ error: 'Failed to fetch missing influencer profiles' });
    }
    res.json(rows);
  });
});

// Update user profile endpoint
app.put('/api/users/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, full_name, user_type, profile_data } = req.body;

  // Validate required fields
  if (!email || !full_name || !user_type || !profile_data) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Update user information
  db.run(
    'UPDATE users SET email = ?, full_name = ?, user_type = ? WHERE id = ?',
    [email, full_name, user_type, id],
    function (err) {
      if (err) {
        console.error('Error updating user:', err);
        return res.status(500).json({ error: 'Failed to update user' });
      }

      // Update profile data based on user type
      if (user_type === 'business') {
        db.run(
          'UPDATE business_profiles SET company_name = ?, industry = ?, website_url = ?, interests = ?, collab_types = ? WHERE user_id = ?',
          [
            profile_data.company_name,
            profile_data.industry,
            profile_data.website_url,
            JSON.stringify(profile_data.interests),
            JSON.stringify(profile_data.collab_types),
            id
          ],
          function (err) {
            if (err) {
              console.error('Error updating business profile:', err);
              return res.status(500).json({ error: 'Failed to update business profile' });
            }
            res.json({ message: 'Profile updated successfully' });
          }
        );
      } else {
        db.run(
          'UPDATE influencer_profiles SET social_platforms = ?, follower_count = ?, content_niche = ?, content_types = ? WHERE user_id = ?',
          [
            JSON.stringify(profile_data.social_platforms),
            profile_data.follower_count,
            JSON.stringify(profile_data.content_niche),
            JSON.stringify(profile_data.content_types),
            id
          ],
          function (err) {
            if (err) {
              console.error('Error updating influencer profile:', err);
              return res.status(500).json({ error: 'Failed to update influencer profile' });
            }
            res.json({ message: 'Profile updated successfully' });
          }
        );
      }
    }
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 