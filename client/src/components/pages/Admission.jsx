import { useState } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

const Admission = () => {
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [religion, setReligion] = useState(""); // <-- new state for religion

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreed) {
      Swal.fire("Error", "You must agree to the terms and conditions.", "error");
      return;
    }

    if (!captchaVerified) {
      Swal.fire("Error", "Please complete the reCAPTCHA.", "error");
      return;
    }

    if (!religion) {
      Swal.fire("Error", "Please select a religion.", "error");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Swal.fire("Success!", "Application submitted successfully!", "success");
      e.target.reset();
      setAgreed(false);
      setCaptchaVerified(false);
      setReligion(""); // reset religion
    }, 1000);
  };

  const handleCaptchaChange = (value) => {
    if (value) setCaptchaVerified(true);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-md p-6 sm:p-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
          School Admission Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student Name */}
          <div>
            <label className="block mb-1">Student's Name *</label>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input type="text" name="studentFirstName" placeholder="First Name" required className="w-full sm:w-1/2 p-2 border rounded-md" />
              <input type="text" name="studentLastName" placeholder="Last Name" required className="w-full sm:w-1/2 p-2 border rounded-md mt-2 sm:mt-0" />
            </div>
          </div>

          {/* Guardian Name */}
          <div>
            <label className="block mb-1">Parent/Guardian Name *</label>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input type="text" name="guardianFirstName" required placeholder="First Name" className="w-full sm:w-1/2 p-2 border rounded-md" />
              <input type="text" name="guardianLastName" required placeholder="Last Name" className="w-full sm:w-1/2 p-2 border rounded-md mt-2 sm:mt-0" />
            </div>
          </div>

       

          {/* Class */}
          <div>
            <label className="block mb-1">Class to Apply *</label>
            <select name="classToApply" required className="w-full p-2 border rounded-md">
              <option value="">Select Class</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
            </select>
          </div>

          {/* DOB */}
          <div>
            <label className="block mb-1">Student's Date of Birth *</label>
            <input type="date" name="dob" required min="2000-01-01" className="w-full p-2 border rounded-md" />
          </div>
   {/* Religion */}
   <div>
            <label className="block mb-1">Religion *</label>
            <select
              name="religion"
              required
              className="w-full p-2 border rounded-md"
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
            >
              <option value="">Select Religion</option>
              <option value="Islam">Islam</option>
              <option value="Hinduism">Hinduism</option>
              <option value="Christianity">Christianity</option>
              <option value="Buddhism">Buddhism</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Address */}
          <div>
            <label className="block mb-1">Current Address</label>
            <input type="text" name="address1" required placeholder="Street Address" className="w-full p-2 border rounded-md mb-2" />
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input type="text" name="city" required placeholder="City" className="w-full sm:w-1/2 p-2 border rounded-md mb-2 sm:mb-0" />
              <input type="text" name="zip" required placeholder="Postal Code" className="w-full sm:w-1/2 p-2 border rounded-md mb-2 sm:mb-0" />
            </div>
           
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1">Phone *</label>
            <input type="tel" name="phone" required placeholder="+88 017000-00000" className="w-full p-2 border rounded-md" />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">Email *</label>
            <input type="email" name="email" required placeholder="example@email.com" className="w-full p-2 border rounded-md" />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree that if the information provided by me is to be false, <span className="text-blue-600 ">The admission application will be canceled.</span> 
            </label>
          </div>

          {/* reCAPTCHA */}
          <ReCAPTCHA sitekey="6LdaBCsrAAAAAE3Raq9SABZoBoYdg8V1rk4KD84V" onChange={handleCaptchaChange} />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admission;
