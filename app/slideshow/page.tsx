// app/slideshow/page.tsx

"use client";

import React, { useState } from 'react';

const SlideshowPage = () => {
  // State to manage the current tab index
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = ['Slide 1', 'Slide 2', 'Slide 3']; // Example tab names

  const handleNext = () => {
    if (currentTab < tabs.length - 1) {
      setCurrentTab(currentTab + 1);
    }
  };

  const handlePrevious = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100 relative">
      <div className="bg-white rounded-lg shadow-lg flex overflow-hidden w-4/5 h-5/6">
        {/* Sidebar Navigation acting as Tabs */}
        <nav className="hidden md:block w-1/4 bg-gray-200 p-6">
          <ul className="space-y-4">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`font-medium text-gray-700 cursor-pointer ${currentTab === index ? 'text-blue-600' : 'hover:text-blue-600'}`}
                onClick={() => setCurrentTab(index)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content without Tabs */}
        <main className="w-full md:w-3/4 p-6 flex flex-col justify-center items-center relative">
          <h1 className="text-2xl font-bold">{tabs[currentTab]}</h1>
          <p>This is the content for {tabs[currentTab]}.</p>

          {/* Navigation Arrows */}
          <div className="absolute bottom-4 left-4 flex flex-col">
            <button
              className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
              onClick={handlePrevious}
              disabled={currentTab === 0}
            >
              <span>&lt;</span> {/* Left arrow */}
            </button>
          </div>
          <div className="absolute bottom-4 right-4 flex flex-col">
            <button
              className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
              onClick={handleNext}
              disabled={currentTab === tabs.length - 1}
            >
              <span>&gt;</span> {/* Right arrow */}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SlideshowPage;
