import { useState } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

const Admission = () => {
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [religion, setReligion] = useState("");
  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    guardianFirstName: "",
    guardianLastName: "",
    classToApply: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    address1: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
    emergencyContact: "",
    previousSchool: "",
    academicYear: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.studentFirstName.trim()) newErrors.studentFirstName = "First name is required";
    if (!formData.studentLastName.trim()) newErrors.studentLastName = "Last name is required";
    if (!formData.guardianFirstName.trim()) newErrors.guardianFirstName = "Guardian first name is required";
    if (!formData.guardianLastName.trim()) newErrors.guardianLastName = "Guardian last name is required";
    if (!formData.classToApply) newErrors.classToApply = "Please select a class";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Please select gender";
    if (!religion) newErrors.religion = "Please select religion";
    if (!formData.address1.trim()) newErrors.address1 = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zip.trim()) newErrors.zip = "Postal code is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = "Emergency contact is required";
    if (!formData.academicYear) newErrors.academicYear = "Please select academic year";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        title: "Validation Error",
        text: "Please fill in all required fields correctly.",
        icon: "error",
        confirmButtonColor: "#3B82F6"
      });
      return;
    }

    if (!agreed) {
      Swal.fire({
        title: "Terms Required",
        text: "You must agree to the terms and conditions.",
        icon: "warning",
        confirmButtonColor: "#3B82F6"
      });
      return;
    }

    if (!captchaVerified) {
      Swal.fire({
        title: "Verification Required",
        text: "Please complete the reCAPTCHA verification.",
        icon: "warning",
        confirmButtonColor: "#3B82F6"
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        title: "Application Submitted!",
        text: "Your admission application has been submitted successfully. We will contact you soon.",
        icon: "success",
        confirmButtonColor: "#10B981"
      });

      // Reset form
      setFormData({
        studentFirstName: "",
        studentLastName: "",
        guardianFirstName: "",
        guardianLastName: "",
        classToApply: "",
        dob: "",
        gender: "",
        bloodGroup: "",
        address1: "",
        city: "",
        zip: "",
        phone: "",
        email: "",
        emergencyContact: "",
        previousSchool: "",
        academicYear: ""
      });
      setAgreed(false);
      setCaptchaVerified(false);
      setReligion("");
      setErrors({});
    }, 2000);
  };

  const handleCaptchaChange = (value) => {
    if (value) setCaptchaVerified(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            School Admission Form
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to our admission process. Please fill out all required information accurately to ensure smooth processing of your application.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Form Container */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h2 className="text-2xl font-semibold text-center">
              Student Admission Application
            </h2>
            <p className="text-center text-blue-100 mt-2">
              Academic Year 2025-2026
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Student Information Section */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  1
                </div>
                Student Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student's First Name *
                  </label>
                  <input
                    type="text"
                    name="studentFirstName"
                    value={formData.studentFirstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.studentFirstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.studentFirstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.studentFirstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student's Last Name *
                  </label>
                  <input
                    type="text"
                    name="studentLastName"
                    value={formData.studentLastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.studentLastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.studentLastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.studentLastName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    min="2005-01-01"
                    max="2020-12-31"
                    className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.dob ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.dob && (
                    <p className="text-red-500 text-sm mt-1">{errors.dob}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.gender ? 'border-red-500' : 'border-gray-300'
                      }`}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Religion *
                  </label>
                  <select
                    name="religion"
                    value={religion}
                    onChange={(e) => setReligion(e.target.value)}
                    className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.religion ? 'border-red-500' : 'border-gray-300'
                      }`}
                  >
                    <option value="">Select Religion</option>
                    <option value="Islam">Islam</option>
                    <option value="Hinduism">Hinduism</option>
                    <option value="Christianity">Christianity</option>
                    <option value="Buddhism">Buddhism</option>
                    <option value="Judaism">Judaism</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.religion && (
                    <p className="text-red-500 text-sm mt-1">{errors.religion}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Group
                  </label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Academic Information Section */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  2
                </div>
                Academic Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class to Apply For *
                  </label>
                  <select
                    name="classToApply"
                    value={formData.classToApply}
                    onChange={handleInputChange}
                    className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.classToApply ? 'border-red-500' : 'border-gray-300'
                      }`}
                  >
                    <option value="">Select Class</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                  </select>
                  {errors.classToApply && (
                    <p className="text-red-500 text-sm mt-1">{errors.classToApply}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Academic Year *
                  </label>
                  <select
                    name="academicYear"
                    value={formData.academicYear}
                    onChange={handleInputChange}
                    className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.academicYear ? 'border-red-500' : 'border-gray-300'
                      }`}
                  >
                    <option value="">Select Academic Year</option>
                    <option value="2025-2026">2025-2026</option>
                    <option value="2026-2027">2026-2027</option>
                  </select>
                  {errors.academicYear && (
                    <p className="text-red-500 text-sm mt-1">{errors.academicYear}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous School (if any)
                  </label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleInputChange}
                    placeholder="Enter previous school name"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Parent/Guardian Information Section */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  3
                </div>
                Parent/Guardian Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guardian's First Name *
                  </label>
                  <input
                    type="text"
                    name="guardianFirstName"
                    value={formData.guardianFirstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.guardianFirstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.guardianFirstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.guardianFirstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guardian's Last Name *
                  </label>
                  <input
                    type="text"
                    name="guardianLastName"
                    value={formData.guardianLastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.guardianLastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.guardianLastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.guardianLastName}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  4
                </div>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address1"
                    value={formData.address1}
                    onChange={handleInputChange}
                    placeholder="Enter complete street address"
                    className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.address1 ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.address1 && (
                    <p className="text-red-500 text-sm mt-1">{errors.address1}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter city"
                      className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.city ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="Enter postal code"
                      className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.zip ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.zip && (
                      <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+88 017000-00000"
                      className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact *
                    </label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      placeholder="+88 018000-00000"
                      className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.emergencyContact ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.emergencyContact && (
                      <p className="text-red-500 text-sm mt-1">{errors.emergencyContact}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Terms and Verification Section */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  5
                </div>
                Terms & Verification
              </h3>

              <div className="space-y-6">
                {/* Terms and Conditions */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreed}
                      onChange={() => setAgreed(!agreed)}
                      className="mt-1 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                      I hereby certify that all information provided in this application is true and complete to the best of my knowledge.
                      I understand that any false information may result in the cancellation of this admission application.
                      I agree to abide by the school's rules, regulations, and policies.
                      <span className="text-blue-600 font-medium"> This agreement is mandatory for processing your application.</span>
                    </label>
                  </div>
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey="6LdaBCsrAAAAAE3Raq9SABZoBoYdg8V1rk4KD84V"
                    onChange={handleCaptchaChange}
                    theme="light"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className={`
                  relative inline-flex items-center justify-center px-12 py-4 text-lg font-semibold text-white 
                  bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl 
                  transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 
                  focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                  ${loading ? 'cursor-wait' : 'cursor-pointer'}
                `}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 mt-4">
                By submitting this form, you acknowledge that you have read and agree to our privacy policy.
              </p>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">
            Need help? Contact our admissions office at{" "}
            <a href="mailto:admissions@school.edu" className="text-blue-600 hover:underline">
              admissions@school.edu
            </a>{" "}
            or call{" "}
            <a href="tel:+880123456789" className="text-blue-600 hover:underline">
              +880 123-456-789
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admission;
