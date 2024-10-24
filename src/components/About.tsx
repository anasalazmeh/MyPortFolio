import { motion } from "framer-motion"; 
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import SectionWrapper from "../hoc/SectionWrapper";
interface Props{
  index:number,
  title:string,
  icon:string
}
const ServiceCard=({index,title,icon}:Props)=>{
  return(
    <Tilt className={`xs:w-[250px] w-full `}>
      <motion.div
      variants={fadeIn("right","spring",0.5 * index,0.75)}
      className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"
      >
          <div
          // options={{
          //   max:45,
          //   scale:1,
          //   speed:450
          // }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} 
             className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
      </motion.div>
    </Tilt> 
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I have graduated with a degree in Applied Engineering (Computer
        Technology) with the ability to work full-time. I began learning
        programming five years ago during high school and have been studying
        front-end development for two years. I have a fundamental understanding
        of back-end development and am familiar with RESTful APIs and modern
        front-end practices. I have completed several large-scale projects, both
        front-end and full-stack. My goal is to become a full-stack developer,
        and I am committed to achieving that. I am dedicated to continuous
        learning, detail-oriented, and able to quickly acquire new skills. I can
        handle long working hours and work on multiple projects to enhance my
        experience.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services,index)=>(
          <ServiceCard key={index} index={index} {...services} />
        ))}

      </div>
    </>
  );
};

export default About
