import email from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(5),
  });
  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    email
      .send(
        "",
        "",
        {
          form_name: data.name,
          to_name:"Anas Alazmeh",
          from_email:data.email,
          to_email:"anoosalazmeh@gmail.com",
          message:data.message
        },
        ""
      )
      .then(() => {
        setIsLoading(false);
        alert("");
      })
      .catch(() => {
        setIsLoading(false);
        alert("");
      });
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-blac-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Grt in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form className="mt-12 flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              {...register("name")}
              type="text"
              name="name"
              id="name"
              placeholder="What's your name?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.name && "border border-red-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </label>
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              {...register("email")}
              type="email"
              name="name"
              id="name"
              placeholder="What's your email?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.email && "border border-red-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </label>
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              {...register("message")}
              rows={7}
              name="name"
              id="name"
              placeholder="What do you want to say?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.message && "border border-red-500"
              }`}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-full text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {isLoading ?"Send...":"Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
