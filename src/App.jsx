import React, { useState, useEffect } from "react";
import numberLists from "./constant/numbers";
import { ArrowLeft, ArrowRight } from "lucide-react";

const App = () => {
  const [index, setIndex] = useState(() => {
    const saved = localStorage.getItem("current-number-index");
    return saved ? JSON.parse(saved) : 0;
  });

  const updateIndex = (newIndex) => {
    setIndex(newIndex);
    localStorage.setItem("current-number-index", JSON.stringify(newIndex));
  };

  const handleNext = () => {
    if (index < numberLists.length - 1) {
      updateIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      updateIndex(index - 1);
    }
  };

  // keyboard support
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index]);

  const current = numberLists[index];

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      
      <div className="w-full max-w-lg flex flex-col items-center text-center space-y-8">
        
        {/* Card */}
        <div className="w-full bg-white border border-red-100 rounded-3xl shadow-lg p-8 sm:p-10">
          
          {/* Nepali Number */}
          <h1 className="text-7xl sm:text-8xl font-bold text-red-500 leading-none">
            {current.nepali}
          </h1>

          {/* Word */}
          <p className="mt-6 text-2xl sm:text-3xl font-medium text-gray-800">
            {current.word}
          </p>

          {/* Roman */}
          <p className="mt-2 text-lg text-gray-500">
            {current.roman}
          </p>

          {/* English number */}
          <p className="mt-3 text-sm text-gray-400">
            ({current.num})
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between w-full gap-4">
          
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500 text-white font-medium disabled:opacity-40"
          >
            <ArrowLeft size={18} />
            Prev
          </button>

          <button
            onClick={handleNext}
            disabled={index === numberLists.length - 1}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500 text-white font-medium disabled:opacity-40"
          >
            Next
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Progress */}
        <p className="text-sm text-gray-400">
          {index + 1} / {numberLists.length}
        </p>

      </div>
    </main>
  );
};

export default App;