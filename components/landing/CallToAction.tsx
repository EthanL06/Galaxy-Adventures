import { Button } from "../global";
import { motion } from "framer-motion";
type Props = {};
const CallToAction = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex w-full items-center justify-center bg-[#1e1e20] py-24 lg:px-12 xl:px-48"
    >
      <div className="relative flex h-[24rem] w-full items-center justify-center rounded-none p-8 lg:rounded-xl">
        <img
          src="https://wallpapercave.com/wp/wp4568917.jpg"
          className="absolute inset-0 h-full w-full rounded-none object-cover brightness-50 lg:rounded-xl"
        ></img>

        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="text-center text-3xl font-bold text-white lg:text-4xl">
            Are you ready for the{" "}
            <span className="text-light-accent">adventure of a lifetime?</span>
          </div>

          <div className="text-md text-center text-gray-200 lg:w-[48rem] lg:text-lg">
            Book your space tour now and experience the thrill of exploring the
            final frontier.
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              className="mt-8 rounded-full bg-dark-accent py-4 px-8 text-white"
              text="Book Now"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default CallToAction;
