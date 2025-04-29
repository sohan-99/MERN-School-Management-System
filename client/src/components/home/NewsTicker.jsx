import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewsTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => date.toLocaleDateString("en-CA");
  const formatTime = (date) => date.toLocaleTimeString("en-GB");

  return (
    <div className="bg-white border border-gray-200 shadow-sm w-full px-4 py-3">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* News Section */}
        <div className="flex items-center w-full md:flex-1">
          <span className="bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-md shrink-0">
            News
          </span>
          <marquee className="ml-4 text-gray-700 text-sm md:text-base font-medium">
          Thakarpara High School is located in Thakarpara, Panchagarh, in the Rangpur division of Bangladesh. The school operates in a plain land region and offers education up to the Secondary level. With an EIIN (Educational Institute Identification Number) of 126088, it serves as an important educational center in the local community.                                                  Thakarpara High School is dedicated to providing quality education and fostering a supportive learning environment for students. The school is well-regarded in the area for its commitment to academic excellence and extracurricular activities that promote the overall development of students.
          </marquee>
        </div>

        {/* Date & Time Section */}
        <div className="flex items-center gap-2 text-sm font-medium">
          <Link to="/celender">
            <span className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition">
              Calendar
            </span>
          </Link>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md">
            {formatDate(currentTime)}
          </span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md">
            {formatTime(currentTime)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
