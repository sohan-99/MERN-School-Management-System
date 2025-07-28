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

  const getCurrentDate = () => {
    const today = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return today.toLocaleDateString('en-US', options);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-white/10 rounded-full animate-bounce delay-700"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-16">
          {/* Date badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-white/90 font-medium text-sm">{getCurrentDate()}</span>
          </div>

          {/* Main title with gradient effect */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Today's
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Wisdom Words
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Daily inspiration and wisdom to guide your journey of learning and growth
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/50"></div>
            <div className="mx-4">
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/50"></div>
          </div>
        </div>

        {/* Wisdom words grid */}
        <div className="grid gap-6 md:gap-8">
          {wisdomWords.map((word, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                {/* Quote number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Quote icon */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-8 h-8 text-yellow-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <p className="text-lg md:text-xl text-white leading-relaxed font-medium group-hover:text-yellow-100 transition-colors duration-300">
                      {word}
                    </p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-2 left-2 w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Footer inspiration section */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Carry These Words With You</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Let these wisdom words guide your thoughts and actions throughout the day. Share them with others and spread the inspiration.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share Wisdom
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WisdomWords;
