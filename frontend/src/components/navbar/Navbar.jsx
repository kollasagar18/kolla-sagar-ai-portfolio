import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Internship",
  "Certificates",
  "Contact",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-500 cursor-pointer">
          KS
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-blue-400 transition duration-300"
            >
              {item}
            </a>
          ))}

          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition">
            Resume
          </button>

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700 px-6 py-4">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

        </div>
      )}
    </header>
  );
};

export default Navbar;