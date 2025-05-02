import signinImage from '../../assets/gotopage.svg'; 

import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 min-h-screen">
      {/* Left side: Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src={signinImage} alt="Welcome" className="w-full h-auto" />
      </div>

      {/* Right side: Text and Buttons */}
      <div className="text-center md:w-1/2 mt-0 md:mt-[-40px] mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to<br />School Management System
        </h1>
        <p className="text-gray-600 mb-6">
        Thakarpara high school management, class organization, and add students and faculty.
          Seamlessly track attendance, assess performance, and provide feedback.
          Access records, view marks, and communicate effortlessly.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="bg-purple-600 text-white px-6 py-2 rounded shadow-md"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/guest')}
            className="border border-purple-600 text-purple-600 px-6 py-2 rounded"
          >
            Login as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

