import { certificates } from "../constants/data";
import SectionTitle from "./common/SectionTitle";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

function Certificates() {
  return (
    <motion.section
  id="certificates"
  className="py-28 bg-slate-950"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Certifications"
          subtitle="Achievements"
        />

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((certificate) => (

            <motion.div
  whileHover={{
    scale: 1.03,
    y: -8,
  }}
  transition={{ duration: 0.3 }}
  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500"
>

              <FaCertificate className="text-5xl text-yellow-400 mb-6" />

              <h3 className="text-2xl font-semibold">
                {certificate.title}
              </h3>

              <p className="text-slate-400 mt-3">
                {certificate.issuer}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Certificates;