import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-12 rounded-3xl border border-base bg-surface p-6 text-center shadow-card transition-colors duration-300 md:mt-20">
      <p className="text-muted">
        &copy; {currentYear} {name}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
