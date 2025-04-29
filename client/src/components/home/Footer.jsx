import { Link } from 'react-router-dom';
import { Typography } from "@material-tailwind/react";

const SITEMAP = [
  {
    links: [
      { text: "Home", href: "/" },
      { text: "About Us", href: "/about" }
    ],
  },
  {
    links: [
      { text: "Contact Us", href: "/contact" },
      { text: "Teachers", href: "/teachers" }
    ],
  },
  {
    links: [
      { text: "Admission", href: "/admission" },
      { text: "Result", href: "/result" }
    ],
  },
  {
    links: [
      { text: "Login", href: "/login" }
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full bg-yellow-100">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {SITEMAP.map(({ links }, key) => (
            <div key={key}>
              <ul className="space-y-1">
                {links.map((link, i) => (
                  <Typography key={i} as="li" color="blue-gray" className="font-normal">
                    <Link
                      to={link.href}
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link.text}
                    </Link>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center border-t border-blue-gray-50 py-4 sm:flex-row sm:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 sm:mb-0"
          >
            &copy; {currentYear} <Link to="/">Thakarpara High School</Link>. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900">
            <Typography as="a" href="https://www.facebook.com/Thekorparahighschool" target="_blank" rel="noopener noreferrer" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="https://twitter.com/school" target="_blank" rel="noopener noreferrer" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.64 8.64 0 01-2.73 1.04 4.28 4.28 0 00-7.29 3.9 12.13 12.13 0 01-8.8-4.46 4.27 4.27 0 001.32 5.71A4.27 4.27 0 012 9.72v.05a4.28 4.28 0 003.43 4.2 4.28 4.28 0 01-1.93.07 4.28 4.28 0 003.99 2.97 8.6 8.6 0 01-5.32 1.83c-.34 0-.67-.02-1-.06a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.71 8.71 0 0024 4.56a8.45 8.45 0 01-2.54.7z" />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
