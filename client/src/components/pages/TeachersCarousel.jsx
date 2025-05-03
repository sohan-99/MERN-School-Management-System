import { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Typography,
  Card,
  CardBody
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
      name: 'Akram Ali',
      position: 'Principal',
      imgSrc: 'https://i.imghippo.com/files/Jon9705GU.jpg',
      contactNumber: '+8801715614615',
      address: 'Jalashi, Panchagarh Sadar Panchagarh',
    },
    {
      name: 'Md. Sohidul Islam',
      position: 'Asst. Teacher : Science',
      imgSrc: 'https://i.imghippo.com/files/AXIBZ1723629715.jpg',
      contactNumber: '+8801735016350',
      address: 'Jalashi, Panchagarh Sadar Panchagarh',
    },
    {
      name: 'Abu Sayeed',
      position: 'Asst. Teacher : Mathematics',
      imgSrc: 'https://i.imghippo.com/files/RCY9490hRY.png',
      contactNumber: '+8801710189659',
      address: 'Jalashi, Panchagarh Sadar Panchagarh',
    },
    {
      name: 'Md. Zhangir Alam',
      position: 'Asst. Teacher : Science',
      imgSrc: 'https://i.imghippo.com/files/x92IE1723629147.jpg',
      contactNumber: '+8801724523949',
      address: 'Marupara, Thekarpara, Panchagarh Sadar Panchagarh',
    },
    {
      name: 'Md. Nobibar Rahman',
      position: 'Asst. Teacher : English',
      imgSrc: 'https://i.imghippo.com/files/zm24T1724265602.jpg',
      contactNumber: '+8801706870752',
      address: 'Jalashi, Panchagarh Sadar Panchagarh',
    },
    {
      name: 'Sarah Khan',
      position: 'Asst. Teacher : ICT',
      imgSrc: 'https://randomuser.me/api/portraits/women/65.jpg',
      contactNumber: '+8801912345678',
      address: 'Dhaka, Bangladesh',
    },
    {
      name: 'John Smith',
      position: 'Asst. Teacher : History',
      imgSrc: 'https://randomuser.me/api/portraits/men/75.jpg',
      contactNumber: '+8801612345678',
      address: 'Rangpur, Bangladesh',
    },
    {
      name: 'Emily Watson',
      position: 'Asst. Teacher : Biology',
      imgSrc: 'https://randomuser.me/api/portraits/women/72.jpg',
      contactNumber: '+8801555555555',
      address: 'Sylhet, Bangladesh',
    },
    {
      name: 'Robert Paul',
      position: 'Asst. Teacher : Chemistry',
      imgSrc: 'https://randomuser.me/api/portraits/men/78.jpg',
      contactNumber: '+8801444444444',
      address: 'Chattogram, Bangladesh',
    },
    {
      name: 'Nadia Hasan',
      position: 'Asst. Teacher : Bangla',
      imgSrc: 'https://randomuser.me/api/portraits/women/68.jpg',
      contactNumber: '+8801322222222',
      address: 'Barisal, Bangladesh',
    }
  ];

  const principal = cardData[0];
  const restTeachers = cardData.slice(1);

  const rows = [];
  for (let i = 0; i < restTeachers.length; i += 3) {
    rows.push(restTeachers.slice(i, i + 3));
  }

  return (
    <div className="p-6">
      {/* Principal on top center */}
      <div className="flex justify-center mb-8">
        <Card
          className="w-72 text-center bg-white shadow-xl border border-gray-300 rounded-lg hover:shadow-2xl transition-shadow duration-300"
          onClick={() => openModal(principal)}
        >
          <div className="flex justify-center mt-4">
            <img
              src={principal.imgSrc}
              alt={principal.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-700 shadow-md"
            />
          </div>
          <CardBody>
            <Typography variant="h6" className="uppercase font-bold text-gray-800">
              {principal.name}
            </Typography>
            <Typography className="text-sm text-blue-900 font-semibold">
              {principal.position}
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* Render teacher rows with centered grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-24 lg:gap-24 gap-6 justify-center">
          {restTeachers.map((teacher, index) => (
            <Card
              key={index}
              className="w-72 text-center bg-white shadow-xl border border-gray-300 rounded-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(teacher)}
            >
              <div className="flex justify-center mt-4">
                <img
                  src={teacher.imgSrc}
                  alt={teacher.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-700 shadow-md"
                />
              </div>
              <CardBody>
                <Typography variant="h6" className="uppercase font-bold text-gray-800">
                  {teacher.name}
                </Typography>
                <Typography className="text-sm text-blue-900 font-semibold">
                  {teacher.position}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={modalOpen} handler={closeModal}>
        <DialogHeader>{selectedTeacher?.name}</DialogHeader>
        <DialogBody>
          <Typography>
            <strong>Contact:</strong> {selectedTeacher?.contactNumber}
          </Typography>
          <Typography>
            <strong>Address:</strong> {selectedTeacher?.address}
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button color="blue" onClick={closeModal}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default TeachersCarousel;
