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
    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-base"
  >
    {link.icon}
  </a>
);

const Header: React.FC<HeaderProps> = ({ profile }) => {
  return (
    <header className="flex flex-col items-center gap-6 rounded-3xl border border-base bg-surface p-6 shadow-card backdrop-blur-sm transition-colors duration-300 md:flex-row md:gap-10 md:p-8">
      <img
        src={profile.avatarUrl}
        alt={profile.name}
        className="h-32 w-32 rounded-full border-4 border-accent object-cover shadow-glow md:h-40 md:w-40"
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-fg md:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg font-medium text-muted md:text-xl">
          {profile.title}
        </p>
        <div className="mt-4 flex items-center justify-center space-x-5 md:justify-start">
          {profile.socials.map((social) => (
            <SocialLinkItem key={social.name} link={social} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
