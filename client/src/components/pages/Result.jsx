const ResultButton = ({ label, url, isLink }) => {
  const openPopup = () => {
    window.open(url, 'popupWindow', 'width=1000,height=700,scrollbars=yes');
  };

  return (
    <button
      onClick={!isLink ? openPopup : undefined}
      className="group text-center relative flex h-12 w-full max-w-[520px] items-center justify-around border-2 dark:border-[#656fe2] border-[#394481] rounded-md bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f7f8ff] to-[#ffffff] font-medium dark:text-neutral-200 text-black hover:from-[#1d34e6] hover:to-[#7f89d6] transition shadow-md"
    >
      <span className="pl-4">{label}</span>
      <div className="relative h-9 w-9 overflow-hidden dark:bg-white bg-black rounded-full mr-1">
        <div className="absolute top-[0.7em] left-[-0.1em] grid place-content-center transition-all w-full h-full duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
          {[...Array(2)].map((_, idx) => (
            <svg
              key={idx}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 dark:fill-black fill-white ${idx === 1 ? 'mb-1 -translate-x-4' : ''}`}
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
      </div>
    </button>
  );
};

const Result = () => {
  return (
    <div
      className="font-sans min-h-screen bg-white p-6"
      style={{
        backgroundImage: "url('/background-pattern.svg')", // Use a subtle SVG or PNG
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <ResultButton label="Board Result" url="http://www.educationboardresults.gov.bd/" />
        <ResultButton label="Institution Result" url="https://eboardresults.com/en/ebr.app/home/" />
      </div>

      {/* Class Result Button */}
      <div className="mt-6 flex justify-center">
        <a href="/class-result" className="w-full max-w-[520px]">
          <ResultButton label="Class Result" isLink />
        </a>
      </div>

      {/* Advice + Memory Section */}
      <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-stretch gap-6">
  {/* Advice */}
  <div className="flex-1 bg-white bg-opacity-90 rounded-lg shadow p-6">
    <h2 className="text-xl font-bold text-[#090979] mb-3">Principles for a Purposeful Student Journey</h2>
    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      <li>Work hard, but also take time to enjoy your school journey.</li>
      <li>Stay curious — learning never ends after exams.</li>
      <li>Respect teachers and classmates, they shape your future.</li>
      <li>Stay healthy, eat well, and sleep enough — a sharp mind needs a strong body.</li>
    </ul>
  </div>

  {/* Vertical Divider */}
  <div className="hidden md:block w-px bg-gray-300"></div>

  {/* Memory */}
  <div className="flex-1 bg-white bg-opacity-90 rounded-lg shadow p-6">
    <h2 className="text-xl font-bold text-[#090979] mb-3">School Memories</h2>
    <p className="text-gray-700 leading-relaxed">
      From the morning assembly under the open sky to the sound of footsteps rushing to class, school life is a beautiful chapter of youth.
      The joy of a shared umbrella on rainy days, the tension before exam results, the silent support of a friend, and the inspiring guidance of a teacher — all these become lifelong treasures.
      Every memory, whether small or grand, shapes who we become. Always hold these days close to your heart — they are irreplaceable.
    </p>
  </div>
</div>

    </div>
  );
};




export default Result;
