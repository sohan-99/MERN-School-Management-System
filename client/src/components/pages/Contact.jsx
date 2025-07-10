import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#000814] text-white px-6 py-14 shadow-2xl max-w mx-auto">
      <h2 className="text-4xl font-extrabold mb-12 text-center uppercase tracking-wider border-b-4 border-green-300 pb-4 w-fit mx-auto">
        Contact Us
      </h2>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white mb-12">
        {/* Phone */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-200 p-4 rounded-full shadow-md mb-4">
            <FaPhoneAlt className="w-7 h-7 text-green-900" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Phone</h4>
          <p className="text-base font-medium">+88 01715614615</p>
          <p className="text-base font-medium">+88 01735016350</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-200 p-4 rounded-full shadow-md mb-4">
            <FaEnvelope className="w-7 h-7 text-green-900" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Email</h4>
          <p className="text-base font-medium">thakarparahighschool.ac.bd@gmail.com</p>
          <p className="text-base font-medium">info@thakarparahighschool.ac.bd</p>
          <p className="text-base font-medium">admission@thakarparahighschool.ac.bd</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-200 p-4 rounded-full shadow-md mb-4">
            <FaMapMarkerAlt className="w-7 h-7 text-green-900" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Address</h4>
          <p className="text-base font-medium">
            Thakarpara Bazar Road, Hafijabad,<br />
            Panchagarh Sadar, Panchagarh,<br />
            Bangladesh
          </p>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-12 text-black">
        <h3 className="text-2xl font-bold mb-6 text-center">Your Feedback Is Important</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="e-Mail Subject"
            required
            className="border px-4 py-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Your Name"
            required
            className="border px-4 py-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="border px-4 py-2 rounded-md"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            required
            className="border px-4 py-2 rounded-md"
          />
          <textarea
            placeholder="What you Want to Know !"
            required
            className="md:col-span-2 border px-4 py-2 rounded-md h-32 resize-none"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-[#0d1b2a] text-white px-6 py-3 rounded-md hover:bg-[#1b263b] transition duration-300 w-fit mx-auto"
          >
            SEND NOW
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="overflow-hidden rounded-xl shadow-lg border border-green-300">
        <iframe
          src="https://www.google.com/maps?q=26.386585,88.614521&t=k&z=16&output=embed"
          width="100%"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[500px] border-none"
          title="School Location on Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
