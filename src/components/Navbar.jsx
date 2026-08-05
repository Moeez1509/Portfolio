import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks, personalInfo } from "../constants/data";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-blue-400 hover:text-cyan-300 transition">
          MI
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className="text-slate-300 hover:text-blue-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Resume Button */}
        <a
          href={personalInfo.resume}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-medium transition duration-300"
        >
          Resume
        </a>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-slate-200 hover:text-blue-400 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-medium transition duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;