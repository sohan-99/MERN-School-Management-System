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
            className="group relative flex h-12 w-[300px] items-center justify-between border-2 dark:border-[#656fe2] border-[#394481] rounded-full bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f7f8ff] to-[#ffffff] font-medium dark:text-neutral-200 text-black disabled:opacity-70"
          >
            <span className="pl-4">
              {loading ? "Submitting..." : "Submit Application"}
            </span>
            <div className="relative h-9 w-9 overflow-hidden dark:bg-white bg-black rounded-full mr-1">
              <div className="absolute top-[0.7em] left-[-0.1em] grid place-content-center transition-all w-full h-full duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 dark:fill-black fill-white"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mb-1 -translate-x-4 dark:fill-black fill-white"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admission;
