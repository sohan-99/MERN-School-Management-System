const Result = () => {
  const openPopup = (url) => {
    window.open(url, 'popupWindow', 'width=1000,height=700,scrollbars=yes');
  };

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Result Links */}
      <div className="flex flex-col md:flex-row gap-4 p-6">
        <div
          onClick={() => openPopup('http://www.educationboardresults.gov.bd/')}
          className="flex-1 cursor-pointer"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-6 text-lg font-semibold rounded-md text-center hover:from-green-700 hover:to-green-600 transition shadow-md">
            Board Result
          </div>
        </div>

        <div
          onClick={() => openPopup('https://eboardresults.com/en/ebr.app/home/')}
          className="flex-1 cursor-pointer"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-6 text-lg font-semibold rounded-md text-center hover:from-green-700 hover:to-green-600 transition shadow-md">
            Institution Result
          </div>
        </div>
      </div>

      <div className="px-6">
        <a href="/class-result">
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-5 text-lg font-semibold rounded-md text-center hover:from-green-700 hover:to-green-600 transition shadow-md">
            Class Result
          </div>
        </a>
      </div>

      {/* Advice Section */}
      <div className="mt-10 mx-6 bg-gray-100 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-[#090979] mb-3">Principles for a Purposeful Student Journey</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Work hard, but also take time to enjoy your school journey.</li>
          <li>Stay curious — learning never ends after exams.</li>
          <li>Respect teachers and classmates, they shape your future.</li>
          <li>Stay healthy, eat well, and sleep enough — a sharp mind needs a strong body.</li>
        </ul>
      </div>

      {/* Memory Section */}
      <div className="mt-6 mx-6 bg-gray-100 rounded-lg shadow p-6 mb-10">
        <h2 className="text-xl font-bold text-[#090979] mb-3">School Memories</h2>
        <p className="text-gray-700">
          From the sound of the morning bell to the laughter shared during tiffin breaks — every moment in school is a treasure. Cherish these memories, they will stay with you for life.
        </p>
      </div>
    </div>
  );
};

export default Result;
