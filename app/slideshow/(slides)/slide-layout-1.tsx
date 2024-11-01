// app/slideshow/(slides)/slide-layout-1.tsx

import React from 'react';

interface SlideLayout1Props {
  slide: SlideProps; // Define the type for the slide prop
}

const SlideLayout1: React.FC<SlideLayout1Props> = ({ slide }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full p-4"
      style={{ backgroundColor: slide.backgroundColor, color: slide.textColor }}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">{slide.title}</h1>
      <p className="text-base md:text-lg mb-4 text-center">{slide.content}</p>

      {/* Render Images */}
      {slide.images.length > 0 && (
        <div className="flex flex-wrap justify-center mb-4">
          {slide.images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Slide Image ${index + 1}`} 
              className="w-full md:w-1/2 lg:w-1/3 p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105" 
            />
          ))}
        </div>
      )}

      {/* Render Bullet Points */}
      {slide.bulletPoints.length > 0 && (
        <ul className="list-disc mb-4 text-center">
          {slide.bulletPoints.map((point, index) => (
            <li key={index} className="ml-4">{point}</li>
          ))}
        </ul>
      )}

      {/* Render Footer */}
      <footer className="mt-6 text-sm italic">{slide.footer}</footer>
    </div>
  );
};

export default SlideLayout1;
