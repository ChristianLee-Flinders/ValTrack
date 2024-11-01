// app/slideshow/(slides)/slide-layout-3.tsx

import React from 'react';


interface SlideLayout3Props {
  slide: SlideProps;
}

const SlideLayout3: React.FC<SlideLayout3Props> = ({ slide }) => {
  return (
    <div
      className="w-full h-full flex flex-col md:flex-row items-center justify-center text-center md:text-left"
      style={{
        backgroundColor: slide.backgroundColor || '#ffffff',
        color: slide.textColor || '#333333',
      }}
    >
      {/* Text Section with Title and Bullet Points (Left Half on Desktop) */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col items-center md:items-start justify-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h1> {/* Smaller title */}
        <ul className="list-disc list-inside text-lg md:text-xl">
          {slide.bulletPoints && slide.bulletPoints.length > 0 ? (
            slide.bulletPoints.map((point, index) => {
              const icon = slide.bulletPointIcons && slide.bulletPointIcons[index];
              const accentColor = slide.accentColor || '#007BFF'; // Default accent color
              
              return (
                <li key={index} className="flex items-center mb-4">
                  {icon && (
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md mr-2" // Circle is white
                    >
                      <span style={{ color: accentColor }}> {/* Icon color is the accent color */}
                        {React.createElement(icon, { size: '1.2rem' })}
                      </span>
                    </span>
                  )}
                  <div>
                    <span className="font-medium">{point[0]}</span> {/* Main title with medium weight */}
                    <div className="text-gray-600 text-sm">{point[1]}</div> {/* Subtext */}
                  </div>
                </li>
              );
            })
          ) : (
            <li>No bullet points available.</li>
          )}
        </ul>
      </div>

      {/* Image Section (Right Half on Desktop) */}
      {slide.images && slide.images.length > 0 && (
        <div className="w-full md:w-1/2 flex items-center justify-center h-auto md:h-full overflow-hidden">
          <img
            src={slide.images[0]}
            alt="Slide image"
            className="object-cover max-h-[140vh] w-auto md:translate-x-10"
          />
        </div>
      )}
    </div>
  );
};

export default SlideLayout3;
