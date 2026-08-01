import { about } from "../constants/data";
import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import SectionTitle from "./common/SectionTitle";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

function About() {
  return (
    <section
      id="about"
      className="py-28 bg-slate-950"
    >
      <motion.div
variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
>

       <SectionTitle
    title="About Me"
    subtitle="Who I Am"
/> 

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center">

              <FaLaptopCode className="text-8xl text-blue-500" />

            </div>

          </div>

          {/* Right Side */}

          <div>

            <h3 className="text-3xl font-semibold mb-6">
              {about.title}
            </h3>

            <p className="text-slate-400 leading-8">
              {about.description}
            </p>

            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="bg-slate-900 rounded-xl p-5 text-center">

                <FaCode className="mx-auto text-3xl text-blue-400 mb-3" />

                <h4 className="font-bold">
                  {about.experience}
                </h4>

              </div>

              <div className="bg-slate-900 rounded-xl p-5 text-center">

                <FaGraduationCap className="mx-auto text-3xl text-blue-400 mb-3" />

                <h4 className="font-bold">
                  {about.education}
                </h4>

              </div>

              <div className="bg-slate-900 rounded-xl p-5 text-center">

                <FaLaptopCode className="mx-auto text-3xl text-blue-400 mb-3" />

                <h4 className="font-bold">
                  {about.location}
                </h4>

              </div>

            </div>

          </div>

        </div>

      </motion.div>
    </section>
  );
}

export default About;