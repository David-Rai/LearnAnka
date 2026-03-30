import React from "react";
import { Search, Star, Home } from "lucide-react";
import { Link } from "react-router";

const links = [
  { name: "Home", icon: <Home size={20} />, href: "/" },
  { name: "Explore", icon: <Search size={20} />, href: "/explore" },
  { name: "Reviews", icon: <Star size={20} />, href: "/reviews" },
];

const Header = () => {
  return (
    <>
      {/* DESKTOP TOP NAV: Hidden on mobile, flex on md screens and up */}
      <nav className="hidden md:flex w-full py-4 border-b border-zinc-100">
        <div className="flex justify-center items-center max-w-4xl mx-auto px-4">
          <div className="flex gap-8 bg-zinc-900 px-6 py-2 rounded-full shadow-md">
            {links.map((l, index) => (
              <Link
                to={l.href}
                key={index}
                className="flex items-center gap-2 text-white hover:text-zinc-300 transition"
              >
                {l.icon}
                <span className="text-sm font-medium">{l.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAV: Flex on mobile, hidden on md screens and up */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 z-50 pb-safe">
        <div className="flex justify-around items-center py-3 px-4">
          {links.map((l, index) => (
            <Link
              to={l.href}
              key={index}
              className="flex flex-col items-center gap-1 text-zinc-500 hover:text-black transition-colors"
            >
              <div className="p-1">
                {/* Slightly larger icons for thumb-friendly mobile nav */}
                {React.cloneElement(l.icon, { size: 24 })}
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider">
                {l.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>

    </>
  );
};

export default Header;