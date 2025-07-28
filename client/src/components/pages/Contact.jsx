import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaGraduationCap, FaUsers, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const mapSrc = import.meta.env.VITE_GOOGLE_MAP_SRC;
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        subject: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're here to help you with any questions about admissions, academics, or school life.
            Connect with us through any of the channels below.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Phone */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/20">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl w-fit mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
              <FaPhoneAlt className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Phone</h4>
            <div className="space-y-2">
              <a href="tel:+8801715614615" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                +88 01715614615
              </a>
              <a href="tel:+8801735016350" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                +88 01735016350
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/20">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl w-fit mb-4 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
              <FaEnvelope className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Email</h4>
            <div className="space-y-2">
              <a href="mailto:info@thakarparahighschool.ac.bd" className="block text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">
                info@thakarparahighschool.ac.bd
              </a>
              <a href="mailto:admission@thakarparahighschool.ac.bd" className="block text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">
                admission@thakarparahighschool.ac.bd
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/20">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl w-fit mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
              <FaMapMarkerAlt className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Address</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Thakarpara Bazar Road, Hafijabad,<br />
              Panchagarh Sadar, Panchagarh,<br />
              Bangladesh
            </p>
          </div>

          {/* Office Hours */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/20">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl w-fit mb-4 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
              <FaClock className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Office Hours</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Monday - Friday</p>
              <p className="text-white font-medium">8:00 AM - 4:00 PM</p>
              <p className="text-gray-300">Saturday</p>
              <p className="text-white font-medium">9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-full w-fit mx-auto mb-4">
              <FaGraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">1500+</h3>
            <p className="text-gray-300">Students Enrolled</p>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="bg-gradient-to-br from-green-500 to-blue-600 p-4 rounded-full w-fit mx-auto mb-4">
              <FaUsers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
            <p className="text-gray-300">Dedicated Teachers</p>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-full w-fit mx-auto mb-4">
              <FaCheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">25+</h3>
            <p className="text-gray-300">Years of Excellence</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Send Us a Message</h3>
              <p className="text-gray-300">
                Have a question or want to learn more about our school? We'd love to hear from you!
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <FaCheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+88 01XXXXXXXXX"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl 
                    hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 
                    transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                    ${isSubmitting ? 'opacity-75 cursor-not-allowed transform-none' : ''}
                    flex items-center justify-center space-x-2
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information & FAQ */}
          <div className="space-y-8">
            {/* Why Contact Us */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-2xl font-bold text-white mb-6">Why Contact Us?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold">Admission Inquiries</h5>
                    <p className="text-gray-300 text-sm">Get information about our admission process, requirements, and deadlines.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold">Academic Programs</h5>
                    <p className="text-gray-300 text-sm">Learn about our curriculum, extracurricular activities, and academic excellence.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-500 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold">School Tours</h5>
                    <p className="text-gray-300 text-sm">Schedule a visit to explore our campus and facilities.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold">General Support</h5>
                    <p className="text-gray-300 text-sm">Any other questions or concerns about our school community.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">Response Time</h4>
              <p className="text-gray-300 mb-4">
                We typically respond to inquiries within <span className="text-blue-400 font-semibold">24 hours</span> during business days.
              </p>
              <p className="text-sm text-gray-400">
                For urgent matters, please call us directly during office hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Visit Our Campus</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Located in the heart of Panchagarh, our campus provides a conducive learning environment
            with modern facilities and easy accessibility.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-2 border border-white/20 shadow-2xl">
          <div className="overflow-hidden rounded-2xl">
            <iframe
              src={mapSrc}
              width="100%"
              height="500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px] border-none"
              title="Thakarpara High School Location on Google Map"
            ></iframe>
          </div>
        </div>

        {/* Directions */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 mb-4">Need directions to our school?</p>
          <a
            href={`https://www.google.com/maps/search/Thakarpara+Bazar+Road+Hafijabad+Panchagarh+Sadar+Panchagarh+Bangladesh`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <FaMapMarkerAlt className="w-4 h-4" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards an excellent education. Contact us today to learn more about
            our admission process and schedule a campus tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admission"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Apply for Admission
            </a>
            <a
              href="tel:+8801715614615"
              className="bg-white/10 border border-white/20 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
