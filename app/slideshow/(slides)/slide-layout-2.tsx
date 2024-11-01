// app/slideshow/(slides)/slide-layout-2.tsx

import React from 'react';

interface SlideLayout2Props {
  slide: SlideProps;
}

const SlideLayout2: React.FC<SlideLayout2Props> = ({ slide }) => {
  return (
    <div
      className="w-full h-full flex flex-col md:flex-row items-center justify-center text-center md:text-left"
      style={{
        backgroundColor: slide.backgroundColor || '#ffffff',
        color: slide.textColor || '#333333',
      }}
    >
      {/* Text Section (Left Half on Desktop) */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col items-center md:items-start justify-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {slide.title}
        </h1>
        <p className="text-lg md:text-xl">
          {slide.content}
        </p>
      </div>

      {/* Image Section (Right Half on Desktop) */}
      {slide.images && slide.images.length > 0 && (
        <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
          <img
            src={slide.images[0]}
            alt="Slide image"
            className="object-left w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'right' }}
          />
        </div>
      )}
    </div>
  );
};

export default SlideLayout2;
