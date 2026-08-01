function SkillCard({ skill }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">

      <div className="flex justify-between mb-4">

        <h3 className="font-semibold">
          {skill.name}
        </h3>

        <span className="text-blue-400">
          {skill.level}%
        </span>

      </div>

      <div className="h-2 bg-slate-800 rounded-full">

        <div
          className="h-2 rounded-full"
          style={{
            width: `${skill.level}%`,
            background: skill.color,
          }}
        />

      </div>

    </div>
  );
}

export default SkillCard;