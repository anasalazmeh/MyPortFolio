import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { logo2 } from "../assets";
import Container from "../hoc/Container";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <Container id="hero">
      <section className="relative w-full h-screen mx-auto flex-wrap flex flex-col md:gap-5 md:flex-row md:justify-between items-center">
        <div className={` max-w-7xl flex items-start`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#9153ff]" />
            <div className="w-1 sm:h-400 h-60 violet-gradient " />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm <span className="text-[#915eff]">Anas</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              React Front-End Developer
            </p>
          </div>
        </div>
        {/* <ComputersCanvas /> */}
        {/* <ComputersCanvas /> */}
        <img
          src={logo2}
          alt="logo"
          className= "w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
        />
        <div className="w-full translate-y-5 md:-translate-y-10 flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
