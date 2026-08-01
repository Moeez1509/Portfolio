import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../constants/data";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">
          MI
        </h1>

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
>
  {menuOpen ? <HiX /> : <HiMenuAlt3 />}
</button>

        {/* Resume Button */}
        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-medium transition duration-300">
          Resume
        </button>

      </div>
      {menuOpen && (
  <div className="md:hidden bg-slate-900 border-t border-slate-800">

    <ul className="flex flex-col items-center py-6 gap-6">

      {navLinks.map((item) => (

        <li key={item.id}>

          <a
            href={item.path}
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-blue-400 transition"
          >
            {item.name}
          </a>

        </li>

      ))}

    </ul>

  </div>
)}
    </nav>
  );
}

export default Navbar;