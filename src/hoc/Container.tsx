import { motion } from "framer-motion";
import { ReactNode } from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
interface Props {
  children: ReactNode;
  id?: string;
}
const Container = ({ children, id }: Props) => {
  return (
    <motion.div
      variants={staggerContainer(1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={` ${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={id}>
        &nbsp;
      </span>
      {children}
    </motion.div>
  );
};

export default Container;
