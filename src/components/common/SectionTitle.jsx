function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-20">
      <p className="text-blue-400 uppercase tracking-[6px] text-sm">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {title}
      </h2>

      <div className="w-24 h-1 bg-blue-500 mx-auto mt-5 rounded-full"></div>
    </div>
  );
}

export default SectionTitle;