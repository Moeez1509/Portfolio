import { personalInfo, techStack } from "../constants/data";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <p className="text-blue-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {personalInfo.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mt-5">
            {personalInfo.title}
          </h2>

          <p className="text-slate-400 mt-6 leading-8 max-w-xl">
            {personalInfo.subtitle}
          </p>

          <div className="flex gap-4 mt-10">
            <a
  href="#projects"
  className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
>
  View Projects
</a>

            <a
  href="/Moeez Intasar(CV).pdf"
  download
  className="border border-blue-500 px-6 py-3 rounded-xl hover:bg-blue-500 transition"
>
  Download CV
</a>
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
  {techStack.map((item) => (
    <span
      key={item}
      className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700"
    >
      {item}
    </span>
  ))}
</div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src="\Moeezpic.png"
            alt="Moeez"
            className="w-80 rounded-full border-4 border-blue-500 shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;