// import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to workspace after a short delay
    const timer = setTimeout(() => {
      navigate('/workspace');
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Registration Successful!
          </h1>
          
          <p className="text-xl text-gray-500 mb-8">
            Thank you for joining AdVibe. You will be redirected to your workspace shortly.
          </p>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h2>
            <ul className="text-left space-y-4">
              <li className="flex items-start">
                <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                <span className="text-gray-600">Our team will review your application within 24-48 hours</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                <span className="text-gray-600">You'll receive an email confirmation with your account details</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                <span className="text-gray-600">Once approved, you can start using the platform immediately</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center space-x-4">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              Return to Home
            </Link>
            <a
              href="mailto:support@advibe.com"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RegistrationSuccess;