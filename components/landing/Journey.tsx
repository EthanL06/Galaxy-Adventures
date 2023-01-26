import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
type Props = {};

const Journey = (props: Props) => {
  const steps = [
    {
      title: "Training",
      description: "Learn the basics of space travel.",
    },
    {
      title: "Launch",
      description: "Take your first steps into space.",
    },
    {
      title: "Travel",
      description: "Explore the vastness of the universe.",
    },
    {
      title: "Land",
      description: "Stand on the surface of another celestial body.",
    },
    {
      title: "Return",
      description: "Return to Earth with memories that will last a lifetime.",
    },
  ];

  // As the user scrolls down the page, the current step should be highlighted in light accent color

  return (
    <div className="w-full py-32 px-8">
      <div className="flex flex-col items-center justify-center gap-32">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg font-black tracking-widest text-light-accent"
          >
            THE JOURNEY
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 text-center text-4xl font-bold"
          >
            A <span className="text-dark-accent">timeline</span> of your
            journey.
          </motion.div>
        </div>
        {steps.map((step, index) => (
          <>
            <div
              key={index}
              className="relative flex h-[30vh] flex-col items-center justify-center gap-4 text-center"
            >
              <motion.div
                initial={{ backgroundColor: "rgb(97 77 226 / 0.05)" }}
                whileInView={{ backgroundColor: "rgb(97 77 226)" }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative flex w-16 items-center justify-center rounded-full bg-[#32323F] text-center text-4xl font-bold leading-[4rem] text-white"
              >
                {index + 1}
                {/* {index !== steps.length - 1 && (
                <motion.div
                  initial={{ backgroundColor: "rgb(158 145 237 / 0.05)" }}
                  whileInView={{ backgroundColor: "rgb(158 145 237 / 0.15)" }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-16 hidden h-[22.88rem] w-1 bg-dark-accent/5 md:block"
                />
              )} */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2"
              >
                <div className="text-4xl font-bold text-white">
                  {step.title}
                </div>
                <div className="text-lg text-gray-300">{step.description}</div>
              </motion.div>
            </div>

            {index !== steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  size="3x"
                  className="text-white"
                />
              </motion.div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

const AngleDown = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
    </svg>
  );
};

export default Journey;
