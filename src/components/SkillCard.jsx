import { motion } from "framer-motion";

function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">
          {skill.name}
        </h3>

        <span className="text-blue-400">
          {skill.level}%
        </span>
      </div>

      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${skill.level}%`,
            background: skill.color,
          }}
        />
      </div>
    </motion.div>
  );
}

export default SkillCard;