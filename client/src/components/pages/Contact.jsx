const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 text-white p-8 shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 border-b-2 border-green-500 text-center">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
        {/* Phone Section */}
        <div className="flex items-center space-x-5 md:w-1/2">
          <div className="bg-green-600 p-4 rounded-full shadow-lg">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 5h2l3.6 7.59L5.25 16H18v-2H7.42l1.16-2h7.45a1 1 0 00.95-.68l3-8A1 1 0 0019 2H6a1 1 0 00-1 1v1z" />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-lg font-semibold">+88 01715614615</p>
            <p className="text-lg font-semibold">+88 01735016350</p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-center space-x-5 md:w-1/2 md:justify-end">
          <div className="bg-green-600 p-4 rounded-full shadow-lg">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M16 12H8m8 0l-4-4m0 8l4-4M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9z" />
            </svg>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-lg font-semibold">thakarparahighschool.ac.bd@gmail.com</p>
            <p className="text-lg font-semibold">info@thakarparahighschool.ac.bd</p>
            <p className="text-lg font-semibold">admission@thakarparahighschool.ac.bd</p>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-5 mt-6 text-center">
        <div className="bg-green-600 p-4 rounded-full shadow-lg">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a1 1 0 001.414 0l4.243-4.243a1 1 0 000-1.414z" />
          </svg>
        </div>
        <p className="text-lg font-semibold">
          Thakarpara Bazar Road, Hafijabad, Panchagarh Sadar, Panchagarh, Bangladesh
        </p>
      </div>

      {/* Google Map Section */}
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps?q=26.386585,88.614521&hl=es;z=14&output=embed"
          width="100%"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md border-0 shadow-lg"
          title="School Location on Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
