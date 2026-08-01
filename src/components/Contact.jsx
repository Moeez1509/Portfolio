import { contactInfo } from "../constants/data";
import SectionTitle from "./common/SectionTitle";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Let's Work Together"
          subtitle="Contact"
        />

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Get In Touch
            </h3>

            <p className="text-slate-400 leading-8 mb-10">
              I'm always open to discussing new projects,
              internship opportunities, or freelance work.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span>{contactInfo.email}</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-blue-400 text-xl" />
                <span>{contactInfo.phone}</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                <span>{contactInfo.location}</span>
              </div>

            </div>

            <div className="flex gap-5 mt-10">

              <a href={contactInfo.github} target="_blank" rel="noreferrer">
                <FaGithub className="text-3xl hover:text-blue-400 transition" />
              </a>

              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="text-3xl hover:text-blue-400 transition" />
              </a>

            </div>

          </div>

          {/* Right */}

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 outline-none"
            />

            <button
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;