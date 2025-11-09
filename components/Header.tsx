import React from 'react';
import type { ProfileData, SocialLink } from '../types';

interface HeaderProps {
  profile: ProfileData;
}

const SocialLinkItem: React.FC<{ link: SocialLink }> = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={link.name}
    className="text-slate-400 hover:text-red-400 transition-colors duration-300"
  >
    {link.icon}
  </a>
);

const Header: React.FC<HeaderProps> = ({ profile }) => {
  return (
    <header className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      <img
        src={profile.avatarUrl}
        alt={profile.name}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-red-500/30 object-cover shadow-lg"
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg md:text-xl text-red-400 font-medium">
          {profile.title}
        </p>
        <div className="mt-4 flex justify-center md:justify-start items-center space-x-5">
          {profile.socials.map((social) => (
            <SocialLinkItem key={social.name} link={social} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
