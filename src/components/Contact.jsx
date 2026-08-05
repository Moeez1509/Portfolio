import { useState } from "react";
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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    const subject = `Portfolio contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus("Opening your email app...");
  };

  return (
    <section id="contact" className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle title="Let's Work Together" subtitle="Contact" />

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
            <p className="text-slate-400 leading-8 mb-10">
              I’m available for freelance work, internship roles, and collaboration on web development projects.
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
              <a href={contactInfo.github} target="_blank" rel="noreferrer" className="text-3xl hover:text-blue-400 transition">
                <FaGithub />
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="text-3xl hover:text-blue-400 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 outline-none"
            />

            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 outline-none"
            />

            <textarea
              rows="6"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 outline-none"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl transition"
            >
              Send Message
            </button>

            {status && <p className="text-sm text-slate-400 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;