// Footer.jsx
import { FaFacebookF } from 'react-icons/fa';
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
    <footer className=" bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] text-gray-300 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-sm">
            <a href="about#" className="hover:text-white transition">About Us</a>
            <a href="contact#" className="hover:text-white transition">Contact</a>
            <a href="result#" className="hover:text-white transition">Result</a>
            <a href="teachers#" className="hover:text-white transition">Teachers</a>
          </div>

          {/* Social icons */}
          <div className="flex space-x-5 text-xl">
            <button onClick={handleGmailClick} className="hover:text-white transition">
              <MdEmail />
            </button>
            <a
              href="https://www.facebook.com/Thekorparahighschool/"
              className="hover:text-white transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-white">
          © 2025 Thakarpara High School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
