import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../global";
import { useRouter } from "next/router";
type Props = {};

const Promotion = (props: Props) => {
  const router = useRouter();
  return (
    <div className="grid w-full gap-x-12 bg-dark-accent/10 lg:grid-cols-2 lg:grid-rows-1 ">
      <div className="items-between flex flex-col gap-y-4 p-8 sm:p-16 md:p-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg font-black tracking-widest text-light-accent"
        >
          THE EXPERIENCE
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          A <span className="text-dark-accent">once-in-a-lifetime </span>
          experience.
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="leading-loose text-gray-300"
        >
          Embark on the adventure of a lifetime. Our dedicated team will guide
          you on a journey beyond the reaches of Earth, where the possibilities
          are endless. Imagine the sensation of weightlessness as you float in
          zero-gravity, or the awe-inspiring view of our planet from orbit. Take
          the ultimate step and stand on the surface of another celestial body,
          where you will witness the vast expanse of the universe in a way that
          only a select few have experienced. Join us on a journey to the stars
          and back, and make memories that will last a lifetime.
        </motion.div>
        <div className="mt-4 flex flex-col gap-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center gap-x-2"
          >
            <FontAwesomeIcon
              className="text-light-accent"
              size="1x"
              icon={faCheck}
            />
            <div className="text-lg font-semibold text-light-accent">
              State-of-the-art technology and equipment
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center gap-x-2"
          >
            <FontAwesomeIcon
              className="text-light-accent"
              size="1x"
              icon={faCheck}
            />
            <div className="text-lg font-semibold text-light-accent ">
              Personalized service and luxury accommodations
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center gap-x-2"
          >
            <FontAwesomeIcon
              className="text-light-accent"
              size="1x"
              icon={faCheck}
            />
            <div className="text-lg font-semibold text-light-accent">
              Experience the vastness and beauty of the universe first hand
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            className="mt-8 w-full lg:w-36"
            text="Learn More"
            onClick={() => {
              router.push("/packages");
            }}
          />
        </motion.div>
      </div>

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        src="https://www.snopes.com/uploads/2016/04/space-shuttle1.jpg"
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Promotion;
