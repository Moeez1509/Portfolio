import { navLinks } from "../constants/data";

function Navbar() {
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

        {/* Resume Button */}
        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-medium transition duration-300">
          Resume
        </button>

      </div>
    </nav>
  );
}

export default Navbar;