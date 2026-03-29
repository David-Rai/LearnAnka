import React from "react";
import { Search, Star } from "lucide-react";
import { Link } from "react-router";

const links = [
  {
    name: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    name: "Explore",
    icon: <Search />,
    href: "/explore",
  },
  {
    name: "Reviews",
    icon: <Star />,
    href: "/reviews",
  },
];
const Header = () => {
  return (
    <nav>
      {links.map((l) => {
        return <Link to={l.href}>{l.name}</Link>;
      })}
    </nav>
  );
};

export default Header;
