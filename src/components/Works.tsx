import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github, URL } from "../assets";
import { projects } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Container from "../hoc/Container";
interface Props {
  index: number;
  name: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
  website_link: string;
}
const ProjectCard = ({
  index,
  name,
  tags,
  image,
  source_code_link,
  website_link
}: Props) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[240px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="absolute  right-0 black-gradient w-10 h-10 rounded-full top-12 flex justify-center items-center m-3 card-img_hover">
            <div
              onClick={() => window.open(website_link, "_blank")}
              className="bg-white w-7 h-7 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={URL}
                alt="url"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color} `}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <Container id="projects">
      <motion.div variants={textVariant(2)}>
        <p className={styles.sectionSubText}>My Projects</p>

        <h2 className={styles.heroHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experiecnce through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologoies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 items-center justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </Container>
  );
};

export default Works;
