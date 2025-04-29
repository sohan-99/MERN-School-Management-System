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
    <div className="m-5 font-sans">
      <h2 className="bg-blue-900 text-white text-center p-4 text-xl font-bold">
        Today's Wisdom Words
      </h2>
      <ol className="list-decimal pl-8 mt-4 space-y-3 text-lg" role="list">
        {wisdomWords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ol>
    </div>
  );
};

export default WisdomWords;
