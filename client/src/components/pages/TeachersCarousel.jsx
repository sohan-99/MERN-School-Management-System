import { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

const TeachersCarousel = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const openModal = (teacher) => {
    setSelectedTeacher(teacher);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTeacher(null);
  };

  const cardData = [
    {
      name: "Akram Ali",
      position: "Principal",
      imgSrc: "https://i.imghippo.com/files/Jon9705GU.jpg",
      contactNumber: "+8801715614615",
      address: "Jalashi, Panchagarh Sadar Panchagarh",
      department: "Administration",
      experience: "15+ Years",
      education: "M.A in Education"
    },
    {
      name: "Md. Sohidul Islam",
      position: "Asst. Teacher : Science",
      imgSrc: "https://i.imghippo.com/files/AXIBZ1723629715.jpg",
      contactNumber: "+8801735016350",
      address: "Jalashi, Panchagarh Sadar Panchagarh",
      department: "Science",
      experience: "8+ Years",
      education: "M.Sc in Physics"
    },
    {
      name: "Abu Sayeed",
      position: "Asst. Teacher : Mathematics",
      imgSrc: "https://i.imghippo.com/files/RCY9490hRY.png",
      contactNumber: "+8801710189659",
      address: "Jalashi, Panchagarh Sadar Panchagarh",
      department: "Mathematics",
      experience: "10+ Years",
      education: "M.Sc in Mathematics"
    },
    {
      name: "Md. Zhangir Alam",
      position: "Asst. Teacher : Science",
      imgSrc: "https://i.imghippo.com/files/x92IE1723629147.jpg",
      contactNumber: "+8801724523949",
      address: "Marupara, Thekarpara, Panchagarh Sadar Panchagarh",
      department: "Science",
      experience: "26+ Years",
      education: "B.Sc in Biology"
    },
    {
      name: "Md. Nobibar Rahman",
      position: "Asst. Teacher : English",
      imgSrc: "https://i.imghippo.com/files/zm24T1724265602.jpg",
      contactNumber: "+8801706870752",
      address: "Jalashi, Panchagarh Sadar Panchagarh",
      department: "English",
      experience: "12+ Years",
      education: "M.A in English Literature"
    },
    {
      name: "Sarah Khan",
      position: "Asst. Teacher : ICT",
      imgSrc: "https://randomuser.me/api/portraits/women/65.jpg",
      contactNumber: "+8801912345678",
      address: "Dhaka, Bangladesh",
      department: "ICT",
      experience: "5+ Years",
      education: "B.Sc in Computer Science"
    },
    {
      name: "John Smith",
      position: "Asst. Teacher : History",
      imgSrc: "https://randomuser.me/api/portraits/men/75.jpg",
      contactNumber: "+8801612345678",
      address: "Rangpur, Bangladesh",
      department: "History",
      experience: "7+ Years",
      education: "M.A in History"
    },
    {
      name: "Emily Watson",
      position: "Asst. Teacher : Biology",
      imgSrc: "https://randomuser.me/api/portraits/women/72.jpg",
      contactNumber: "+8801555555555",
      address: "Sylhet, Bangladesh",
      department: "Biology",
      experience: "9+ Years",
      education: "M.Sc in Biology"
    },
    {
      name: "Robert Paul",
      position: "Asst. Teacher : Chemistry",
      imgSrc: "https://randomuser.me/api/portraits/men/78.jpg",
      contactNumber: "+8801444444444",
      address: "Chattogram, Bangladesh",
      department: "Chemistry",
      experience: "11+ Years",
      education: "M.Sc in Chemistry"
    },
    {
      name: "Nadia Hasan",
      position: "Asst. Teacher : Bangla",
      imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
      contactNumber: "+8801322222222",
      address: "Barisal, Bangladesh",
      department: "Bangla",
      experience: "6+ Years",
      education: "M.A in Bangla Literature"
    },
    {
      name: "Dr. Fatima Rahman",
      position: "Asst. Teacher : Geography",
      imgSrc: "https://randomuser.me/api/portraits/women/45.jpg",
      contactNumber: "+8801777888999",
      address: "Thakarpara, Panchagarh Sadar Panchagarh",
      department: "Geography",
      experience: "14+ Years",
      education: "Ph.D in Geography"
    },
    {
      name: "Md. Kamal Hossain",
      position: "Asst. Teacher : Economics",
      imgSrc: "https://randomuser.me/api/portraits/men/82.jpg",
      contactNumber: "+8801666555444",
      address: "Jalashi, Panchagarh Sadar Panchagarh",
      department: "Economics",
      experience: "18+ Years",
      education: "M.A in Economics"
    },
    {
      name: "Rashida Begum",
      position: "Asst. Teacher : Home Economics",
      imgSrc: "https://randomuser.me/api/portraits/women/58.jpg",
      contactNumber: "+8801888777666",
      address: "Marupara, Thekarpara, Panchagarh Sadar Panchagarh",
      department: "Home Economics",
      experience: "22+ Years",
      education: "M.Sc in Home Economics"
    },
  ];

  const principal = cardData[0];
  const restTeachers = cardData.slice(1);

  const getDepartmentColor = (department) => {
    const colors = {
      Administration: "from-purple-500 to-pink-500",
      Science: "from-blue-500 to-cyan-500",
      Mathematics: "from-green-500 to-teal-500",
      English: "from-orange-500 to-red-500",
      ICT: "from-indigo-500 to-purple-500",
      History: "from-yellow-500 to-orange-500",
      Biology: "from-emerald-500 to-green-500",
      Chemistry: "from-cyan-500 to-blue-500",
      Bangla: "from-rose-500 to-pink-500",
      Geography: "from-lime-500 to-green-600",
      Economics: "from-amber-500 to-yellow-600",
      "Home Economics": "from-fuchsia-500 to-purple-600"
    };
    return colors[department] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="relative px-2 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16">
      {/* Principal Section */}
      <div className="flex justify-center mb-12 sm:mb-16 lg:mb-20">
        <div className="relative group">
          {/* Glowing background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

          <div
            className="relative w-72 sm:w-80 lg:w-96 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-8 cursor-pointer transform transition-all duration-500 hover:scale-105"
            onClick={() => openModal(principal)}
          >
            {/* Crown Icon for Principal */}
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="text-center">
              <div className="relative mb-4 sm:mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${getDepartmentColor(principal.department)} rounded-full blur-md opacity-75`}></div>
                <img
                  src={principal.imgSrc}
                  alt={principal.name}
                  className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full object-cover border-4 border-white/30 shadow-2xl mx-auto"
                />
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">{principal.name}</h3>
              <p className="text-purple-300 font-semibold mb-2 text-sm sm:text-base">{principal.position}</p>
              <div className="flex items-center justify-center space-x-2 mb-2 sm:mb-4">
                <span className={`px-2 sm:px-3 py-1 text-xs font-semibold bg-gradient-to-r ${getDepartmentColor(principal.department)} text-white rounded-full`}>
                  {principal.experience}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 justify-items-center max-w-7xl mx-auto">
        {restTeachers.map((teacher, index) => (
          <div key={index} className="relative group w-full max-w-xs">
            {/* Glowing background */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${getDepartmentColor(teacher.department)} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-1000`}></div>

            <div
              className="relative w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              onClick={() => openModal(teacher)}
            >
              <div className="text-center">
                <div className="relative mb-3 sm:mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-r ${getDepartmentColor(teacher.department)} rounded-full blur-sm opacity-75`}></div>
                  <img
                    src={teacher.imgSrc}
                    alt={teacher.name}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-3 border-white/30 shadow-xl mx-auto"
                  />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1 leading-tight">{teacher.name}</h3>
                <p className="text-gray-300 text-xs sm:text-sm font-medium mb-2 sm:mb-3 leading-tight">{teacher.position}</p>
                <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                  <span className={`px-2 sm:px-3 py-1 text-xs font-semibold bg-gradient-to-r ${getDepartmentColor(teacher.department)} text-white rounded-full`}>
                    {teacher.department}
                  </span>
                  <span className="text-xs text-gray-400">{teacher.experience}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Modal Dialog */}
      <Dialog open={modalOpen} handler={closeModal} size="xl" className="bg-transparent">
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl border border-white/20 backdrop-blur-lg overflow-hidden mx-2 sm:mx-4">
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-10 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            </div>
          </div>

          <div className="relative z-10 p-4 sm:p-6 lg:p-8">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group z-20"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 pt-8 sm:pt-4">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className={`absolute -inset-2 bg-gradient-to-r ${getDepartmentColor(selectedTeacher?.department)} rounded-full blur opacity-75`}></div>
                <img
                  src={selectedTeacher?.imgSrc}
                  alt={selectedTeacher?.name}
                  className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white/30 shadow-2xl"
                />
                {/* Department Badge */}
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r ${getDepartmentColor(selectedTeacher?.department)} text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg`}>
                  {selectedTeacher?.department}
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex-1 text-center lg:text-left w-full">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedTeacher?.name}</h2>
                <p className="text-lg sm:text-xl text-purple-300 font-semibold mb-4">{selectedTeacher?.position}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300">Experience</span>
                    </div>
                    <p className="text-white font-semibold text-sm sm:text-base">{selectedTeacher?.experience}</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300">Education</span>
                    </div>
                    <p className="text-white font-semibold text-sm sm:text-base">{selectedTeacher?.education}</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300">Contact</span>
                    </div>
                    <p className="text-white font-semibold text-sm sm:text-base break-all">{selectedTeacher?.contactNumber}</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300">Address</span>
                    </div>
                    <p className="text-white font-semibold text-sm sm:text-base">{selectedTeacher?.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TeachersCarousel;
