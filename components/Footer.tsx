import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-center py-8 mt-12 md:mt-20 border-t border-slate-800">
      <p className="text-slate-500">
        &copy; {currentYear} {name}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
