import React from 'react';

const ChallengesSection: React.FC = () => {
  return (
    <section id="challenges" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Ready to level up your eco-game?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Join our challenges and make a real difference! Compete with others, learn new sustainable habits, and earn rewards.
        </p>
        <div className="mt-10">
          {/* You can add cards or interactive elements here to showcase specific challenges */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Example Challenge Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Recycle Hero Challenge</h3>
                <p className="mt-3 text-base text-gray-500">
                  Track your recycling efforts for a week and see how much you can divert from the landfill!
                </p>
                <div className="mt-4">
                  <a href="/challenges" className="text-indigo-600 hover:text-indigo-900 font-medium">
                    Learn More & Join &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Add more challenge cards as needed */}

          </div>
        </div>
        <div className="mt-12">
          <p className="text-lg text-gray-600">
            Think you've got what it takes? Head over to the challenges page to see all active challenges!
          </p>
          <div className="mt-6">
            <a
              href="/challenges"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Explore Challenges
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;