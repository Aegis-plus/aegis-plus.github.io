import React, { useState, useEffect, useRef } from 'react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const duration = 700; // ms, a longer duration feels smoother
    const start = window.scrollY;
    const startTime = performance.now();

    // A cubic easing function for a more pronounced acceleration/deceleration
    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, start - (start * easedProgress));

      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);

    // Blur the button after the click to remove the persistent focus ring
    if (buttonRef.current) {
        buttonRef.current.blur();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 rounded-full bg-primary p-3 text-on-primary shadow-glow transition-all duration-300 ease-out hover:bg-accent focus-visible:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-base ${
        isVisible ? 'scale-100 opacity-100' : 'pointer-events-none scale-0 opacity-0'
      }`}
      aria-label="Go to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTopButton;
