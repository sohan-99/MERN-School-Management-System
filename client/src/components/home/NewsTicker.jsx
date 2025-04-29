import { Button } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

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
    <div className="bg-[#ffffe8] w-full py-3 px-4 shadow-sm border border-red-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* News Section */}
        <div className="flex items-center w-full md:flex-1">
          <span className="bg-red-500 text-white px-3 py-1 rounded font-medium text-sm shrink-0">
            News
          </span>
          <marquee className="ml-3 text-red-600 text-sm md:text-base font-medium">
            Thakarpara High School - It is a NON-GOVERNMENT School. This institute's EIIN number is 126088. This institute is located in THAKARPARA, PANCHAGARH, RANGPUR division. It's geographical area is PLAIN LAND. It offers classes up to Secondary level.
          </marquee>
        </div>

        {/* Date & Time Section */}
        <div className="flex items-center gap-2 text-white text-sm shrink-0">
         <Link to="/celender">
          <span className="bg-red-500 px-3 py-1 rounded">Calendar</span>
         </Link>
          <span className="bg-red-500 px-3 py-1 rounded">{formatDate(currentTime)}</span>
          <span className="bg-red-500 px-3 py-1 rounded">{formatTime(currentTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
