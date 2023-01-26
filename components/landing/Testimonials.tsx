import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
type Props = {};

const Testimonials = (props: Props) => {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO of Company",
      description:
        '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente nulla, saepe ullam architecto culpa est quod fuga dolores autem, rem ipsa quis labore quae non veniam? Voluptatum, voluptas qui."',
      image: "/",
    },
    {
      name: "John Doe",
      title: "CEO of Company",
      description:
        '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente nulla, saepe ullam architecto culpa est quod fuga dolores autem, rem ipsa quis labore quae non veniam? Voluptatum, voluptas qui."',
      image: "/",
    },
    {
      name: "John Doe",
      title: "CEO of Company",
      description:
        '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente nulla, saepe ullam architecto culpa est quod fuga dolores autem, rem ipsa quis labore quae non veniam? Voluptatum, voluptas qui."',
      image: "/",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center bg-[#1e1e20] py-24 px-4 sm:px-8">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg font-black tracking-widest text-light-accent"
        >
          TESTIMONIALS
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-4xl font-bold"
        >
          What our <span className="text-dark-accent">customers</span> are
          saying.
        </motion.div>
      </div>

      <div className="mt-16 flex w-full flex-wrap items-center justify-center gap-16 sm:w-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex w-96 flex-col gap-y-4 rounded-md border border-[#ffffff12] bg-background p-4"
          >
            <div>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-5xl text-gray-400"
              />
            </div>

            <div className="text-md mt-4 leading-relaxed text-white">
              {testimonial.description}
            </div>

            <div className="mt-4 flex items-center">
              <img
                src="https://thispersondoesnotexist.com/image"
                className="h-16 w-16 rounded-full bg-gray-400"
              ></img>
              <div className="ml-4">
                <div className="text-md font-bold text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm font-medium text-gray-300">
                  {testimonial.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
