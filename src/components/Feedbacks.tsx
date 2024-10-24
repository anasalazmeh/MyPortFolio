import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials, TypeTestimonials } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
interface Props {
  testimonial: TypeTestimonials;
  index: number;
}
const FeedbackCard = ({ testimonial, index }: Props) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p>{testimonial.testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {testimonial.name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {testimonial.designation} of {testimonial.company}
            </p>
          </div>
          <img
            src={testimonial.image}
            alt={"feedback-bg-" + testimonial.name}
            className="rounded-full w-10 h-10 object-cover "
          />
        </div>
      </div>
    </motion.div>
  );
};
const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant(1)}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonails.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={index} index={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
