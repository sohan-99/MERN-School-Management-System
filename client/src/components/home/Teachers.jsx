import TeachersCarousel from "../pages/TeachersCarousel";


const Teachers = () => {
  return (
    <div>
      <div >
        <h2 className="bg-blue-900 text-white text-center py-5 text-2xl md:text-3xl font-extrabold rounded-md shadow-md">
          Teachers List
        </h2>
      </div>
      <TeachersCarousel />
    </div>
  );
};

export default Teachers;