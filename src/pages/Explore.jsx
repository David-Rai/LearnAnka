import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";
import numberLists from "../constant/numbers";

function Explore() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const details = (originalIndex) => {
    // We store the index from the original master list
    localStorage.setItem("nepaliNumberIndex", originalIndex);
    navigate("/");
  };

  // Logic to filter numbers while keeping track of their original index
  const filteredNumbers = numberLists
    .map((item, index) => ({ ...item, originalIndex: index }))
    .filter(
      (n) =>
        n.num.toString().includes(search) ||
        n.nepali.includes(search) ||
        n.word.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Search Header */}
        <div className="sticky top-0 bg-white pb-6 pt-2 z-10">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search (1, २, ek sa ya...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border-2 border-red-600 rounded-lg px-4 py-3 pr-12 text-red-600 placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-100 transition-all"
            />
            <button className="absolute right-3 p-1 text-red-600 hover:scale-110 active:scale-95 transition-transform">
              <Search size={24} />
            </button>
          </div>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredNumbers.map((n) => (
            <button
              key={n.originalIndex}
              onClick={() => details(n.originalIndex)}
              className="group flex flex-col items-center justify-center p-6 bg-white border-2 border-red-100 rounded-xl hover:border-red-500 hover:bg-red-50 active:scale-95 transition-all duration-200"
            >
              <span className="text-3xl font-bold text-red-600 mb-1">
                {n.nepali}
              </span>
              <span className="text-sm font-medium text-red-400 group-hover:text-red-500">
                {n.num}
              </span>
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredNumbers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-red-300 font-medium">No numbers found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;