import React from 'react';

interface AboutProps {
  bio: string;
}

const About: React.FC<AboutProps> = ({ bio }) => {
  return (
    <section id="about">
      <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-500 pl-4">About Me</h2>
      <p className="text-slate-400 leading-relaxed text-lg">
        {bio}
      </p>
    </section>
  );
};

export default About;
