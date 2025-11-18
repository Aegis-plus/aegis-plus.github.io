import React from 'react';

interface AboutProps {
  bio: string;
}

const About: React.FC<AboutProps> = ({ bio }) => {
  return (
    <section
      id="about"
      className="rounded-3xl border border-base bg-surface p-6 shadow-card transition-colors duration-300 md:p-8"
    >
      <h2 className="text-2xl font-semibold text-fg mb-4 border-l-4 border-accent pl-4">
        About Me
      </h2>
      <p className="text-lg leading-relaxed text-muted">
        {bio}
      </p>
    </section>
  );
};

export default About;
