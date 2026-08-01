import { skills } from "../constants/data";
import SkillCard from "./SkillCard";
import SectionTitle from "./common/SectionTitle";

function Skills() {
  return (
    <section id="skills" className="py-28">

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

    </section>
  );
}

export default Skills;