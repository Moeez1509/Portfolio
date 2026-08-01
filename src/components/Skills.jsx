import { skills } from "../constants/data";
import SkillCard from "./SkillCard";
import SectionTitle from "./common/SectionTitle";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

function Skills() {
  return (       <motion.section
  id="skills"
  className="py-28"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Skills"
          subtitle="Technologies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill) => (

            <SkillCard
              key={skill.name}
              skill={skill}
            />

          ))}

        </div>

      </div>

    </motion.section>
  );
}

export default Skills;