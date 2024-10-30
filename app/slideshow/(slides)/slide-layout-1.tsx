// @/components/slides/SlideLayout1.tsx

import React from 'react';

interface SlideContent {
  title: string;
  content: string;
  images: string[];
  bulletPoints: string[];
  videoUrl?: string | null;
  footer?: string;
  backgroundColor?: string;
  textColor?: string;
}

interface SlideProps {
  slide: SlideContent; // Accepts a single slide content
}

const SlideLayout1: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div 
      className={`flex flex-col justify-between w-full h-full p-6 rounded-lg shadow-md`}
      style={{ backgroundColor: slide.backgroundColor || '#ffffff' }} // Default background color
    >
      <h2 
        className="text-3xl font-bold" 
        style={{ color: slide.textColor || '#000000' }} // Default text color
      >
        {slide.title}
      </h2>
      <p className="mt-2 text-lg" style={{ color: slide.textColor || '#000000' }}>
        {slide.content}
      </p>

      {/* Render Images */}
      <div className="flex flex-col items-center mt-4">
        {slide.images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Slide image ${index + 1}`} 
            className="w-full h-auto max-h-60 object-cover rounded-md" 
          />
        ))}
      </div>

      {/* Render Bullet Points */}
      {slide.bulletPoints.length > 0 && (
        <ul className="list-disc list-inside mt-4">
          {slide.bulletPoints.map((point, index) => (
            <li key={index} className="text-lg" style={{ color: slide.textColor || '#000000' }}>
              {point}
            </li>
          ))}
        </ul>
      )}

      {/* Render Video if available */}
      {slide.videoUrl && (
        <div className="mt-4">
          <iframe 
            width="100%" 
            height="315" 
            src={slide.videoUrl} 
            title="Video slide"
            className="rounded-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Render Footer if available */}
      {slide.footer && (
        <p className="mt-4 text-gray-500 text-sm" style={{ color: slide.textColor || '#000000' }}>
          {slide.footer}
        </p>
      )}
    </div>
  );
};

export default SlideLayout1;
