const WisdomWords = () => {
  const wisdomWords = [
    "Never judge someone based on the opinion of others.",
    "Dreams don't work unless you do.",
    "A teacher is one who helps others and influences lives forever.",
    "All teachers teach history to those who will make history.",
    "A good teacher is a good student first. By repeating his lessons, he acquires excellence.",
    "The amount of good values that students learn in school depends on how good of a role model their teachers are.",
    "God designed the family as the place where children learn and grow. That means that imperfect parents are the teachers."
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-8 font-sans">
      <h2 className="bg-blue-900 text-white text-center py-5 text-2xl md:text-3xl font-extrabold rounded-md shadow-md">
        Today's Wisdom Words
      </h2>
      <ol className="list-decimal pl-6 md:pl-10 mt-6 space-y-4 text-lg md:text-xl text-gray-800 leading-relaxed">
        {wisdomWords.map((word, index) => (
          <li key={index} className="hover:text-blue-700 transition-colors duration-200">
            {word}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WisdomWords;
