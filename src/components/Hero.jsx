import { personalInfo, techStack } from "../constants/data";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations/variants";
function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center overflow-hidden"
>
     <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="absolute top-20 -left-40 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>

<div className="absolute bottom-20 -right-40 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>
        {/* Left */}
        <motion.div
  variants={fadeLeft}
  initial="hidden"
  animate="visible"
>
          
          <p className="text-blue-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mt-5">
            {personalInfo.title}
          </h2>

          <p className="text-slate-400 mt-6 leading-8 max-w-xl">
            {personalInfo.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mt-10">  <a
  href="#projects"
  className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
>
  View Projects
</a>

            <a
  href="/Moeez Intasar(CV).pdf"
  download
  className="px-7 py-3 rounded-xl border border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
>
  Download CV
</a>
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
  {techStack.map((item) => (
    <span
      key={item}
     className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition duration-300 cursor-default"
    >
      {item}
    </span>
  ))}
</div>
       </motion.div>

        {/* Right */}
       <motion.div
  variants={fadeRight}
  initial="hidden"
  whileInView="visible"
viewport={{ once: true }}
  className="flex justify-center items-center"
>
  <div className="relative">

  <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

  <motion.img
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    src={personalInfo.profileImage}
    alt="Profile"
    className="relative w-80 h-80 object-cover rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/30"
  />

</div>
</motion.div>

      </div>
    </section>
  );
}

export default Hero;