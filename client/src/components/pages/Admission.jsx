const Admission = () => {
  return (
    <div className="my-4 max-w-2xl mx-auto p-6 sm:p-8 bg-blue-100 shadow-lg rounded-md">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
        School Admission Form
      </h2>
      <form className="space-y-4 sm:space-y-6">
        {/* Student's Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Student's Name<span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <input
              type="text"
              name="studentFirstName"
              placeholder="First"
              required
              autoComplete="given-name"
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 mb-2 sm:mb-0"
            />
            <input
              type="text"
              name="studentLastName"
              placeholder="Last"
              required
              autoComplete="family-name"
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Class to Apply For */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Class you want to apply for<span className="text-red-500">*</span>
          </label>
          <select
            name="classToApply"
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Select Class</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
          </select>
        </div>

        {/* Student's Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Student's DoB<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="dob"
            required
            min="2000-01-01"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 bg-gray-50"
          />
        </div>

        {/* Parent/Guardian Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Parent/Guardian Name<span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <input
              type="text"
              name="guardianFirstName"
              required
              placeholder="First"
              autoComplete="given-name"
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 mb-2 sm:mb-0"
            />
            <input
              type="text"
              name="guardianLastName"
              required
              placeholder="Last"
              autoComplete="family-name"
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Current Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Current Address</label>
          <input
            type="text"
            name="address1"
            required
            placeholder="Street Address"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          />
          <input
            type="text"
            name="address2"
            placeholder="Street Address Line 2"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          />
          <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
            <input
              type="text"
              name="city"
              required
              placeholder="City"
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 mb-2 sm:mb-0"
            />
            <input
              type="text"
              name="region"
              required
              placeholder="Region"
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
            <input
              type="text"
              name="zip"
              required
              placeholder="Postal / Zip Code"
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 mb-2 sm:mb-0"
            />
            <input
              type="text"
              name="country"
              required
              placeholder="Country"
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+88 017000-00000"
            autoComplete="tel"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your admission confirmation will be sent via email."
            autoComplete="email"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition duration-300"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admission;
