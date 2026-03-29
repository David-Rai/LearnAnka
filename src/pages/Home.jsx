import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Hash, Volume2 } from "lucide-react";
import numberLists from "../constant/numbers";

const Home = () => {
  // Initialize state from localStorage or default to 0
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = localStorage.getItem("nepaliNumberIndex");
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  // Persist state whenever currentIndex changes
  useEffect(() => {
    localStorage.setItem("nepaliNumberIndex", currentIndex);
  }, [currentIndex]);

  //Getting currentNumber Data
  const currentData = numberLists[currentIndex];

  //Next number
  const handleNext = () => {
    if (currentIndex < numberLists.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  //Previous number
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const speak = (text) => {
    speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 1; //0-1
    utterance.lang = "en-US"; // English
    utterance.rate = 0.9; //0.1-10
    utterance.pitch = 2;
    speechSynthesis.speak(utterance);
  };

  // Rendering JSX
  return (
    <main className="flex-1 bg-white flex flex-col items-center justify-center p-6 text-slate-800">
      <div className="max-w-md w-full border-none md:border-2 md:border-red-100 rounded-3xl p-3 md:shadow-sm">
        {/* Header / Progress */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2 text-red-600">
            <Hash size={20} />
            <span className="font-bold">Number {currentData.num}</span>
          </div>
          <span className="text-xs font-medium text-red-400 uppercase tracking-widest">
            {currentIndex + 1} / {numberLists.length}
          </span>
        </div>

        {/* Display Card */}
        <div className="text-center space-y-4 py-10">
          <h1 className="text-9xl font-bold text-red-600">
            {currentData.nepali}
          </h1>
          <div className="space-y-1">
            <p className="text-4xl font-semibold text-slate-900">
              {currentData.word}
            </p>
            <p className="text-lg text-red-500 italic">"{currentData.roman}"</p>
          </div>
        </div>

        {/* Pronunciation button */}
        <div className="w-full flex items-center justify-center">
          <button onClick={() => speak(currentData.roman)}>
            <Volume2 size={30} className="text-slate-500"/>
          </button>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mt-12">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-red-600 text-red-600 font-bold hover:bg-red-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          >
            <ChevronLeft size={24} />
            Prev
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === numberLists.length - 1}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-red-600 text-white font-bold hover:bg-red-700 disabled:opacity-30 transition-all shadow-lg shadow-red-200"
          >
            Next
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Reset Option */}
        {currentIndex === numberLists.length - 1 && (
          <button
            onClick={() => setCurrentIndex(0)}
            className="w-full mt-6 text-sm text-red-400 hover:text-red-600 underline underline-offset-4"
          >
            Start over?
          </button>
        )}
      </div>
    </main>
  );
};

export default Home;
