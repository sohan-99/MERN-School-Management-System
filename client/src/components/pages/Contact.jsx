const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-teal-800 via-teal-900 to-black text-white px-6 py-12 shadow-2xl rounded-lg">
      <h2 className="text-4xl font-extrabold mb-10 border-b-4 pb-4 border-green-500 text-center uppercase tracking-widest">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {/* Phone Section */}
        <div className="flex items-start space-x-6">
          <div className="bg-green-600 p-4 rounded-full shadow-lg">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 5h2l3.6 7.59L5.25 16H18v-2H7.42l1.16-2h7.45a1 1 0 00.95-.68l3-8A1 1 0 0019 2H6a1 1 0 00-1 1v1z" />
            </svg>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Phone</h4>
            <p className="text-lg font-medium">+88 01715614615</p>
            <p className="text-lg font-medium">+88 01735016350</p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-start space-x-6">
          <div className="bg-green-600 p-4 rounded-full shadow-lg">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M16 12H8m8 0l-4-4m0 8l4-4M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9z" />
            </svg>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Email</h4>
            <p className="text-lg font-medium">thakarparahighschool.ac.bd@gmail.com</p>
            <p className="text-lg font-medium">info@thakarparahighschool.ac.bd</p>
            <p className="text-lg font-medium">admission@thakarparahighschool.ac.bd</p>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="flex items-center space-x-6 text-center md:text-left mb-10">
        <div className="bg-green-600 p-4 rounded-full shadow-lg">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a1 1 0 001.414 0l4.243-4.243a1 1 0 000-1.414z" />
          </svg>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">Address</h4>
          <p className="text-lg font-medium">
            Thakarpara Bazar Road, Hafijabad, Panchagarh Sadar,<br />Panchagarh, Bangladesh
          </p>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps?q=26.386585,88.614521&hl=es;z=14&output=embed"
          width="100%"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full border-none"
          title="School Location on Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
