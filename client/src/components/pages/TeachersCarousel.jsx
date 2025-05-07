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
    },
    {
      name: "Md. Sohidul Islam",
      position: "Asst. Teacher : Science",
      imgSrc: "https://i.imghippo.com/files/AXIBZ1723629715.jpg",
      contactNumber: "+8801735016350",
      address: "Jalashi, Panchagarh Sadar Panchagarh",
    },
    {
      name: "Abu Sayeed",
      position: "Asst. Teacher : Mathematics",
      imgSrc: "https://i.imghippo.com/files/RCY9490hRY.png",
      contactNumber: "+8801710189659",
      address: "Jalashi, Panchagarh Sadar Panchagarh",
    },
    {
      name: "Md. Zhangir Alam",
      position: "Asst. Teacher : Science",
      imgSrc: "https://i.imghippo.com/files/x92IE1723629147.jpg",
      contactNumber: "+8801724523949",
      address: "Marupara, Thekarpara, Panchagarh Sadar Panchagarh",
    },
    {
      name: "Md. Nobibar Rahman",
      position: "Asst. Teacher : English",
      imgSrc: "https://i.imghippo.com/files/zm24T1724265602.jpg",
      contactNumber: "+8801706870752",
      address: "Jalashi, Panchagarh Sadar Panchagarh",
    },
    {
      name: "Sarah Khan",
      position: "Asst. Teacher : ICT",
      imgSrc: "https://randomuser.me/api/portraits/women/65.jpg",
      contactNumber: "+8801912345678",
      address: "Dhaka, Bangladesh",
    },
    {
      name: "John Smith",
      position: "Asst. Teacher : History",
      imgSrc: "https://randomuser.me/api/portraits/men/75.jpg",
      contactNumber: "+8801612345678",
      address: "Rangpur, Bangladesh",
    },
    {
      name: "Emily Watson",
      position: "Asst. Teacher : Biology",
      imgSrc: "https://randomuser.me/api/portraits/women/72.jpg",
      contactNumber: "+8801555555555",
      address: "Sylhet, Bangladesh",
    },
    {
      name: "Robert Paul",
      position: "Asst. Teacher : Chemistry",
      imgSrc: "https://randomuser.me/api/portraits/men/78.jpg",
      contactNumber: "+8801444444444",
      address: "Chattogram, Bangladesh",
    },
    {
      name: "Nadia Hasan",
      position: "Asst. Teacher : Bangla",
      imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
      contactNumber: "+8801322222222",
      address: "Barisal, Bangladesh",
    },
  ];

  const principal = cardData[0];
  const restTeachers = cardData.slice(1);

  return (
    <div className="px-4 py-10 bg-gray-50">
      {/* Principal */}
      <div className="flex justify-center mb-10">
        <Card
          className="w-72 text-center bg-blue-50 hover:bg-blue-100 border border-blue-300 shadow-lg hover:shadow-xl transition duration-300"
          onClick={() => openModal(principal)}
        >
          <div className="flex justify-center mt-4">
            <img
              src={principal.imgSrc}
              alt={principal.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 shadow-md"
            />
          </div>
          <CardBody>
            <Typography variant="h6" className="uppercase font-bold text-blue-900">
              {principal.name}
            </Typography>
            <Typography className="text-sm text-blue-700 font-semibold">
              {principal.position}
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* Teacher Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {restTeachers.map((teacher, index) => (
          <Card
            key={index}
            className="w-72 text-center bg-white hover:bg-blue-50 border border-blue-200 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => openModal(teacher)}
          >
            <div className="flex justify-center mt-4">
              <img
                src={teacher.imgSrc}
                alt={teacher.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
              />
            </div>
            <CardBody>
              <Typography variant="h6" className="uppercase font-bold text-blue-900">
                {teacher.name}
              </Typography>
              <Typography className="text-sm text-blue-700 font-semibold">
                {teacher.position}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Modal Dialog */}
      <Dialog open={modalOpen} handler={closeModal} size="md" className="rounded-xl p-4">
  <div className="flex flex-col items-center text-center px-4 py-6">
    <img
      src={selectedTeacher?.imgSrc}
      alt={selectedTeacher?.name}
      className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 shadow-md mb-4"
    />
    <Typography variant="h5" className="text-blue-900 font-bold">
      {selectedTeacher?.name}
    </Typography>
    <Typography className="text-sm text-blue-700 font-semibold mb-4">
      {selectedTeacher?.position}
    </Typography>

    <div className="w-full border-t border-blue-100 my-4"></div>

    <div className="text-left w-full space-y-2">
      <p className="text-gray-800">
        <span className="font-semibold text-blue-700">Contact:</span> {selectedTeacher?.contactNumber}
      </p>
      <p className="text-gray-800">
        <span className="font-semibold text-blue-700">Address:</span> {selectedTeacher?.address}
      </p>
    </div>

    <Button color="blue" className="mt-6" onClick={closeModal}>
      Close
    </Button>
  </div>
</Dialog>

    </div>
  );
};

export default TeachersCarousel;
