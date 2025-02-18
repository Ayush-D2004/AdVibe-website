import sqlite3 from 'sqlite3';
import crypto from 'crypto';

const db = new sqlite3.Database('./database.sqlite');

const verifyPassword = (inputPassword: string, hashedPassword: string): boolean => {
  const [salt, hash] = hashedPassword.split(':');
  const verifyHash = crypto.pbkdf2Sync(inputPassword, salt, 1000, 64, 'sha512').toString('hex');
  return hash === verifyHash;
};

const checkUserPassword = (email: string, inputPassword: string) => {
  db.get('SELECT password FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      console.error('Error fetching user:', err);
      return;
    }
    if (row) {
      const isValid = verifyPassword(inputPassword, row.password);
      console.log(`Password for ${email} is ${isValid ? 'valid' : 'invalid'}`);
    } else {
      console.log('User not found');
    }
  });
};

// Replace with the email and password you want to check
checkUserPassword('ayush.dhoble@gmail.com', 'your_input_password_here'); 