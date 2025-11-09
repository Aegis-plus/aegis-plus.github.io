import React, { useState, useEffect, useCallback } from 'react';
import type { ArtPiece } from '../types';

interface GalleryProps {
  artPieces: ArtPiece[];
}

const GalleryImage: React.FC<{ piece: ArtPiece; onImageClick: () => void }> = ({ piece, onImageClick }) => (
  <div 
    className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
    onClick={onImageClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onImageClick() }}
  >
    <img src={piece.src} alt={piece.title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
      <h3 className="text-white text-center font-semibold text-lg">{piece.title}</h3>
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
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    } else if (event.key === 'ArrowRight' && hasNext) {
      onNext();
    } else if (event.key === 'ArrowLeft' && hasPrevious) {
      onPrev();
    }
  }, [onClose, onNext, onPrev, hasNext, hasPrevious]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="art-title"
    >
      <div 
        className="relative bg-slate-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-2/3 h-64 md:h-auto flex-shrink-0 flex items-center justify-center bg-black/50">
          <img src={piece.src} alt={piece.title} className="max-w-full max-h-full object-contain" />
        </div>

        <div className="p-6 flex flex-col flex-grow overflow-y-auto">
          <h2 id="art-title" className="text-2xl font-bold text-white mb-2">{piece.title}</h2>
          <p className="text-slate-400 leading-relaxed flex-grow">{piece.description}</p>
          <button 
            onClick={onClose}
            className="mt-4 self-start bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:shadow-[0_0_15px_theme(colors.red.500)]"
            aria-label="Close image viewer"
          >
            Close
          </button>
        </div>

        {hasPrevious && (
          <button 
              onClick={onPrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              aria-label="Previous image"
          >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
        )}

        {hasNext && (
            <button 
                onClick={onNext}
                className="absolute right-2 md:right-[35%] lg:right-[34%] top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                aria-label="Next image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        )}
      </div>
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white text-3xl hover:text-lime-400 transition-colors z-20"
        aria-label="Close"
      >
        &times;
      </button>
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
    <section id="gallery" className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-500 pl-4">My Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
