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
        '"I recently took a tour with Galaxy Adventures and it was an incredible experience. From start to finish, the staff was professional and accommodating, and the tour itself was out of this world (literally). The spacecraft was state-of-the-art and provided a smooth ride with breathtaking views of Earth and the stars. The guides were knowledgeable and provided interesting facts and information throughout the journey. I would highly recommend Galaxy Adventures  to anyone looking for an unforgettable experience."',
      image: "/",
    },
    {
      name: "John Doe",
      title: "CEO of Company",
      description:
        '"The destinations visited were absolutely breathtaking. The views of the galaxy, planets and stars were truly mesmerizing and the tour was planned to perfection offering the perfect balance of adventure and relaxation. I would highly recommend Galaxy Adventures to anyone looking for an out of this world experience with pretty destinations."',
      image: "/",
    },
    {
      name: "John Doe",
      title: "CEO of Company",
      description:
        '"The staff, spacecraft, and guides were excellent, but what really stood out was the luxurious housing provided. The accommodation was elegant, spacious and comfortable, with large windows that offered stunning views of the galaxy. The bathrooms were luxurious and modern. I highly recommend Galaxy Adventures for a unique and unforgettable experience with luxurious housing."',
      image: "/",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center bg-dark-background py-24 px-4 sm:px-8">
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

      <div className="mt-16 flex w-full flex-wrap items-start justify-center gap-16 sm:w-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
