import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contactInfo } from "../constants/data";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Moeez Intasar
            </h2>

            <p className="text-slate-400 mt-2">
              Full Stack Developer
            </p>
          </div>

          <div className="flex gap-5">

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-500">
          © {currentYear} Moeez Intasar | Built with React, Tailwind CSS & Passion.
        </div>

      </div>
    </footer>
  );
}

export default Footer;