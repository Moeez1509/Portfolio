import { education } from "../constants/data";
import SectionTitle from "./common/SectionTitle";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

function Education() {
  return (
    <motion.section
  id="education"
  className="py-28"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Education"
          subtitle="Academic Journey"
        />

        <div className="space-y-8">

          {education.map((item) => (

            <motion.div
  whileHover={{
    y: -10,
    scale: 1.02,
  }}
  transition={{ duration: 0.3 }}
  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500"
>

              <div className="flex items-start gap-5">

                <FaGraduationCap className="text-4xl text-blue-400 mt-1" />

                <div>

                  <h3 className="text-2xl font-bold">
                    {item.degree}
                  </h3>

                  <p className="text-blue-400 mt-2">
                    {item.institute}
                  </p>

                  <p className="text-slate-400 mt-2">
                    {item.duration}
                  </p>

                  <span className="inline-block mt-4 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400">
                    {item.status}
                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Education;