import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  const handleGmailClick = () => {
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=thakarparahighschool.ac.bd@gmail.com',
      'gmailPopup',
      'width=700,height=600'
    );
  };

  return (
    <footer className="bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] text-gray-300 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-base md:text-lg font-medium">
            <a href="about#" className="hover:text-white hover:underline transition">About Us</a>
            <a href="contact#" className="hover:text-white hover:underline transition">Contact</a>
            <a href="result#" className="hover:text-white hover:underline transition">Result</a>
            <a href="teachers#" className="hover:text-white hover:underline transition">Teachers</a>
          </div>

          {/* Social icons */}
          <div className="flex space-x-6 text-2xl md:text-3xl">
            <a
              href="https://www.facebook.com/Thekorparahighschool/"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@thakarparahighschool"
              className="hover:text-white transition"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <button
              onClick={handleGmailClick}
              className="hover:text-white transition"
              aria-label="Email"
            >
              <MdEmail />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm md:text-base text-white font-light">
          © 2025 Thakarpara High School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
