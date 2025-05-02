import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
          About Our School
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <img
              src="https://i.imghippo.com/files/kMV6002Nw.jpg"
              alt="School Campus"
              className="rounded-2xl shadow-lg w-full object-cover h-72"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Welcome to Our School</h3>
            <p className="mb-4">
              Our School Management System is dedicated to providing a modern and efficient
              educational environment where students thrive academically and personally. We aim to
              nurture future leaders through an innovative curriculum, skilled faculty, and a
              supportive infrastructure.
            </p>
            <p>
              Established with a vision to empower young minds, our school believes in holistic
              development and ensures that every student receives personal attention and access to
              the best learning tools.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-blue-50 rounded-xl shadow-md">
            <h4 className="text-xl font-bold text-blue-700 mb-2">Our Mission</h4>
            <p>
              To provide quality education that empowers students to achieve excellence in all
              aspects of life, both academic and personal.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow-md">
            <h4 className="text-xl font-bold text-blue-700 mb-2">Our Vision</h4>
            <p>
              To be a leading institution that fosters innovation, creativity, and integrity among
              students, shaping responsible global citizens.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow-md">
            <h4 className="text-xl font-bold text-blue-700 mb-2">Our Values</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Discipline & Respect</li>
              <li>Inclusiveness & Equality</li>
              <li>Academic Excellence</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-8 rounded-2xl shadow-md text-center">
          <h4 className="text-2xl font-semibold text-blue-800 mb-4">
            Why Choose Our School?
          </h4>
          <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <li>✅ Qualified & Passionate Teachers</li>
            <li>✅ Smart Classrooms & Labs</li>
            <li>✅ Sports, Art & Cultural Activities</li>
            <li>✅ Safe & Secure Environment</li>
          </ul>
          <Link
  to="/admission"
  className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
>
  Contact for Admission
</Link>

        </div>
      </div>
    </div>
  );
};

export default About;
