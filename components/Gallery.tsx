import React, { useState, useEffect, useCallback } from 'react';
import type { ArtPiece } from '../types';

interface GalleryProps {
  artPieces: ArtPiece[];
}

const GalleryImage: React.FC<{ piece: ArtPiece; onImageClick: () => void }> = ({ piece, onImageClick }) => (
  <div
    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-base bg-surface-2 shadow-card transition duration-300 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-base"
    onClick={onImageClick}
    role="button"
    tabIndex={0}
    aria-label={`Open ${piece.title}`}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onImageClick();
      }
    }}
  >
    <img
      src={piece.src}
      alt={piece.title}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-overlay opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
      <h3 className="px-4 text-center text-lg font-semibold text-fg drop-shadow-md">
        {piece.title}
      </h3>
    </div>
  </div>
);

interface GalleryModalProps {
  piece: ArtPiece;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ piece, onClose, onNext, onPrev, hasNext, hasPrevious }) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight' && hasNext) {
        onNext();
      } else if (event.key === 'ArrowLeft' && hasPrevious) {
        onPrev();
      }
    },
    [onClose, onNext, onPrev, hasNext, hasPrevious]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-overlay-strong backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="art-title"
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-base bg-surface shadow-card transition-colors duration-300 md:flex-row"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full text-muted transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-base"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-64 w-full items-center justify-center bg-surface-2 md:h-auto md:w-2/3">
          <img src={piece.src} alt={piece.title} className="max-h-full max-w-full object-contain" />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <h2 id="art-title" className="text-2xl font-semibold text-fg">
            {piece.title}
          </h2>
          <p className="flex-grow text-muted leading-relaxed">
            {piece.description}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="mt-auto inline-flex w-max items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-on-primary transition-colors duration-200 hover:bg-accent focus-visible:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-base"
            aria-label="Close image viewer"
          >
            Close
          </button>
        </div>

        {hasPrevious && (
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-overlay p-2 text-on-primary transition-colors duration-200 hover:bg-primary focus-visible:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-base"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {hasNext && (
          <button
            type="button"
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-overlay p-2 text-on-primary transition-colors duration-200 hover:bg-primary focus-visible:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-base"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

const Gallery: React.FC<GalleryProps> = ({ artPieces }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < artPieces.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const selectedPiece = selectedIndex !== null ? artPieces[selectedIndex] : null;

  return (
    <section
      id="gallery"
      className="rounded-3xl border border-base bg-surface-2 p-6 shadow-card transition-colors duration-300 md:p-8"
    >
      <h2 className="mb-6 border-l-4 border-accent pl-4 text-2xl font-semibold text-fg">
        My Gallery
      </h2>
      <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artPieces.map((piece, index) => (
          <GalleryImage key={piece.id} piece={piece} onImageClick={() => openModal(index)} />
        ))}
      </div>
      {selectedPiece && selectedIndex !== null && (
        <GalleryModal
          piece={selectedPiece}
          onClose={closeModal}
          onNext={goToNext}
          onPrev={goToPrevious}
          hasNext={selectedIndex < artPieces.length - 1}
          hasPrevious={selectedIndex > 0}
        />
      )}
    </section>
  );
};

export default Gallery;
