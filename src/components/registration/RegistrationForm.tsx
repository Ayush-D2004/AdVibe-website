import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Building2, Globe, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { authService } from '../../services/auth';
import { cn } from '../../lib/utils';

interface RegistrationFormProps {
  type: 'business' | 'influencer';
}

interface BaseFormData {
  name: string;
  email: string;
  password: string;
}

interface BusinessFormData extends BaseFormData {
  companyName: string;
  industry: string;
  websiteUrl: string;
  interests: string[];
  collaborationTypes: string[];
}

interface InfluencerFormData extends BaseFormData {
  socialPlatforms: string[];
  followerCount: string;
  niche: string[];
  contentTypes: string[];
}

const businessInterests = [
  'Fashion & Beauty', 'Food & Beverage', 'Technology', 'Health & Wellness',
  'Travel & Hospitality', 'Entertainment', 'Sports', 'Education', 'Lifestyle',
  'Gaming', 'Business & Finance', 'Art & Design'
];

const collaborationTypes = [
  'Sponsored Posts', 'Product Reviews', 'Brand Ambassadorship', 
  'Content Creation', 'Event Coverage', 'Affiliate Marketing'
];

const influencerNiches = [
  'Lifestyle', 'Fashion', 'Beauty', 'Travel', 'Food', 'Fitness',
  'Technology', 'Gaming', 'Education', 'Business', 'Art', 'Music'
];

const socialPlatforms = [
  'Instagram', 'TikTok', 'YouTube', 'Twitter', 'LinkedIn', 'Facebook'
];

const contentTypes = [
  'Photos', 'Videos', 'Stories', 'Live Streams', 'Blogs', 'Podcasts'
];

export function RegistrationForm({ type }: RegistrationFormProps) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [missingFields, setMissingFields] = useState<string[]>([]);

  const [formData, setFormData] = useState<BusinessFormData | InfluencerFormData>(
    type === 'business' 
      ? {
          name: '', email: '', password: '',
          companyName: '', industry: '', websiteUrl: '',
          interests: [],
          collaborationTypes: []
        }
      : {
          name: '', email: '', password: '',
          socialPlatforms: [],
          followerCount: '',
          niche: [],
          contentTypes: []
        }
  );

  useEffect(() => {
    if (error) {
      console.log('Error:', error);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    // Reset missing fields
    setMissingFields([]);

    // Validate required fields
    const currentMissingFields = [];
    if (!formData.name) currentMissingFields.push('Full Name');
    if (!formData.email) currentMissingFields.push('Email');
    if (!formData.password) currentMissingFields.push('Password');
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      currentMissingFields.push('Invalid Email Format');
    }

    // Password validation
    if (formData.password && formData.password.length < 8) {
      currentMissingFields.push('Password must be at least 8 characters long');
    }

    if (type === 'business') {
      if (!(formData as BusinessFormData).companyName) currentMissingFields.push('Company Name');
      if (!(formData as BusinessFormData).industry) currentMissingFields.push('Industry');
    } else {
      if (!(formData as InfluencerFormData).socialPlatforms.length) currentMissingFields.push('Social Platforms');
      if (!(formData as InfluencerFormData).followerCount) currentMissingFields.push('Follower Count');
    }

    if (currentMissingFields.length > 0) {
      setMissingFields(currentMissingFields);
      setError('Please fill in the required fields.');
      setIsSubmitting(false);
      return;
    }

    console.log('Submitting form data:', {
      email: formData.email,
      password: formData.password,
      full_name: formData.name,
      user_type: type,
      profile_data: formData
    });
    
    try {
      await authService.signUp(formData.email, formData.password, {
        full_name: formData.name,
        user_type: type,
        profile_data: formData
      });
      navigate('/registration-success');
    } catch (error) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleSelection = (array: string[], item: string) => {
    return array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];
  };

  const renderProgressBar = () => (
    <div className="w-full mb-8">
      <div className="relative">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-100">
          <div 
            style={{ width: `${(step / totalSteps) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600 transition-all duration-500"
          />
        </div>
        <div className="flex justify-between">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div 
              key={index}
              className={cn(
                "w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300",
                index + 1 <= step
                  ? "bg-purple-600 text-white"
                  : "bg-purple-100 text-purple-600"
              )}
            >
              {index + 1 <= step ? <CheckCircle className="w-5 h-5" /> : index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBasicInfo = () => (
    <div className="space-y-6 transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's Get Started!</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Full Name
          </span>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email
          </span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Password
          </span>
        </label>
        <div className="relative mt-1">
          <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
          </button>
        </div>
      </div>
    </div>
  );

  const renderBusinessDetails = () => (
    <div className="space-y-6 transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Your Business</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">
          <span className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Company Name
          </span>
        </label>
        <input
          type="text"
          value={(formData as BusinessFormData).companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Industry
          </span>
        </label>
        <select
          value={(formData as BusinessFormData).industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        >
          <option value="">Select Industry</option>
          <option value="technology">Technology</option>
          <option value="fashion">Fashion & Apparel</option>
          <option value="beauty">Beauty & Cosmetics</option>
          <option value="food">Food & Beverage</option>
          <option value="health">Health & Wellness</option>
          <option value="travel">Travel & Hospitality</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Website URL
          </span>
        </label>
        <input
          type="url"
          value={(formData as BusinessFormData).websiteUrl}
          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          placeholder="https://example.com"
          required
        />
      </div>
    </div>
  );

  const renderInfluencerDetails = () => (
    <div className="space-y-6 transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Your Content</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Social Platforms
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {socialPlatforms.map(platform => (
            <button
              key={platform}
              type="button"
              onClick={() => setFormData({
                ...formData,
                socialPlatforms: toggleSelection((formData as InfluencerFormData).socialPlatforms, platform)
              })}
              className={cn(
                "p-3 rounded-lg border-2 transition-all duration-200",
                (formData as InfluencerFormData).socialPlatforms.includes(platform)
                  ? "border-purple-600 bg-purple-50 text-purple-600"
                  : "border-gray-200 hover:border-purple-200"
              )}
            >
              {platform}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Follower Count Range
        </label>
        <select
          value={(formData as InfluencerFormData).followerCount}
          onChange={(e) => setFormData({ ...formData, followerCount: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        >
          <option value="">Select Range</option>
          <option value="1k-10k">1K - 10K</option>
          <option value="10k-50k">10K - 50K</option>
          <option value="50k-100k">50K - 100K</option>
          <option value="100k-500k">100K - 500K</option>
          <option value="500k+">500K+</option>
        </select>
      </div>
    </div>
  );

  const renderInterests = () => (
    <div className="space-y-6 transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {type === 'business' ? 'Select Your Target Markets' : 'Choose Your Content Niches'}
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          {type === 'business' ? 'Industry Interests' : 'Content Niches'}
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {(type === 'business' ? businessInterests : influencerNiches).map(item => (
            <button
              key={item}
              type="button"
              onClick={() => {
                if (type === 'business') {
                  setFormData({
                    ...formData,
                    interests: toggleSelection((formData as BusinessFormData).interests, item)
                  });
                } else {
                  setFormData({
                    ...formData,
                    niche: toggleSelection((formData as InfluencerFormData).niche, item)
                  });
                }
              }}
              className={cn(
                "p-3 rounded-lg border-2 transition-all duration-200",
                (type === 'business' 
                  ? (formData as BusinessFormData).interests.includes(item)
                  : (formData as InfluencerFormData).niche.includes(item))
                  ? "border-purple-600 bg-purple-50 text-purple-600"
                  : "border-gray-200 hover:border-purple-200"
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {type === 'business' ? (
        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Preferred Collaboration Types
          </label>
          <div className="grid grid-cols-2 gap-3">
            {collaborationTypes.map(type => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({
                  ...formData,
                  collaborationTypes: toggleSelection((formData as BusinessFormData).collaborationTypes, type)
                })}
                className={cn(
                  "p-3 rounded-lg border-2 transition-all duration-200",
                  (formData as BusinessFormData).collaborationTypes.includes(type)
                    ? "border-purple-600 bg-purple-50 text-purple-600"
                    : "border-gray-200 hover:border-purple-200"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Content Types
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {contentTypes.map(type => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({
                  ...formData,
                  contentTypes: toggleSelection((formData as InfluencerFormData).contentTypes, type)
                })}
                className={cn(
                  "p-3 rounded-lg border-2 transition-all duration-200",
                  (formData as InfluencerFormData).contentTypes.includes(type)
                    ? "border-purple-600 bg-purple-50 text-purple-600"
                    : "border-gray-200 hover:border-purple-200"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderReview = () => (
    <div className="space-y-6 transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Information</h2>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Basic Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-gray-900">{formData.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-900">{formData.email}</p>
            </div>
          </div>
        </div>

        {type === 'business' ? (
          <>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Business Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Company Name</p>
                  <p className="text-gray-900">{(formData as BusinessFormData).companyName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Industry</p>
                  <p className="text-gray-900">{(formData as BusinessFormData).industry}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Interests & Collaboration</h3>
              <div>
                <p className="text-sm text-gray-500 mb-2">Target Markets</p>
                <div className="flex flex-wrap gap-2">
                  {(formData as BusinessFormData).interests.map(interest => (
                    <span key={interest} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Platform & Reach</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Social Platforms</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {(formData as InfluencerFormData).socialPlatforms.map(platform => (
                      <span key={platform} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Follower Range</p>
                  <p className="text-gray-900">{(formData as InfluencerFormData).followerCount}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Content Focus</h3>
              <div>
                <p className="text-sm text-gray-500 mb-2">Niches</p>
                <div className="flex flex-wrap gap-2">
                  {(formData as InfluencerFormData).niche.map(n => (
                    <span key={n} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto">
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      {missingFields.length > 0 && (
        <div className="mb-4 p-3 bg-yellow-100 text-yellow-700 rounded-md">
          <p>Please fill in the following required fields:</p>
          <ul>
            {missingFields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {renderProgressBar()}

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          {step === 1 && renderBasicInfo()}
          {step === 2 && (type === 'business' ? renderBusinessDetails() : renderInfluencerDetails())}
          {step === 3 && renderInterests()}
          {step === 4 && renderReview()}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
            )}
            
            {step < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Creating Account...' : 'Complete Registration'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}