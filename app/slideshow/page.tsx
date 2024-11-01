// app/slideshow/page.tsx
"use client"

import React, { useState } from 'react';
import { testSlideShow } from '@/constants';

const SlideshowPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const slides = testSlideShow.slides;

  const handleNext = () => {
    if (currentTab < slides.length - 1) {
      setCurrentTab(currentTab + 1);
    }
  };

  const handlePrevious = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1);
    }
  };

  // Dynamically import and render the correct slide layout
  const renderSlide = (slide: SlideProps) => {
    const LayoutComponent = require(`./(slides)/slide-layout-${slide.layout}`).default;
    return <LayoutComponent slide={slide} />;
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="bg-white shadow-lg flex w-full h-full md:w-4/5 md:h-5/6 overflow-hidden">
        <nav className="hidden md:flex w-1/4 bg-gray-200 p-6">
          <ul className="space-y-4">
            {slides.map((slide, index) => (
              <li
                key={index}
                className={`font-medium text-gray-700 cursor-pointer ${currentTab === index ? 'text-blue-600' : 'hover:text-blue-600'}`}
                onClick={() => setCurrentTab(index)}
              >
                {slide.title}
              </li>
            ))}
          </ul>
        </nav>

        <main className="w-full h-full md:w-3/4 flex items-center justify-center relative">
          {renderSlide(slides[currentTab])}

          <div className="absolute bottom-4 left-4">
            <button
              className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
              onClick={handlePrevious}
              disabled={currentTab === 0}
            >
              &lt;
            </button>
          </div>
          <div className="absolute bottom-4 right-4">
            <button
              className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
              onClick={handleNext}
              disabled={currentTab === slides.length - 1}
            >
              &gt;
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SlideshowPage;
