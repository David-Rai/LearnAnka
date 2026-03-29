import React from "react";
import { Search, Star, Home } from "lucide-react";
import { Link } from "react-router";

const links = [
  {
    name: "Home",
    icon: <Home size={20} />,
    href: "/",
  },
  {
    name: "Explore",
    icon: <Search size={20} />,
    href: "/explore",
  },
  {
    name: "Reviews",
    icon: <Star size={20} />,
    href: "/reviews",
  },
];

const Header = () => {
  return (
    <nav className="w-full py-3">
      <div className="flex justify-center  items-center max-w-4xl mx-auto px-4">
        
        {/* Nav Links */}
        <div className="flex gap-6 bg-zinc-900 px-4 py-2 rounded-full">
          {links.map((l, index) => {
            return (
              <Link
                to={l.href}
                key={index}
                className="flex items-center gap-2 text-white transition"
              >
                {/* Icon always visible */}
                {l.icon}

                {/* Text hidden on mobile */}
                <span className="hidden sm:inline text-sm">
                  {l.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;