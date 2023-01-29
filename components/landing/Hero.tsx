import { motion } from "framer-motion";
import { useRouter } from "next/router";
type Props = {};
const Hero = (props: Props) => {
  const router = useRouter();

  return (
    <div className="relative flex min-h-[calc(100vh-161px)] flex-col items-center justify-between p-4">
      <div></div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-4xl text-white sm:text-6xl"
          >
            GALAXY ADVENTURES
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="esm:text-2xl text-xl font-medium text-zinc-400"
          >
            Take your travels to new heights.
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="button mr-0 mb-2 mt-6 flex h-12 w-80 cursor-pointer items-center justify-center rounded-md bg-dark-accent font-bold transition-colors sm:mr-4 sm:mb-0 sm:w-52 lg:mr-6"
          onClick={() => router.push("/destinations")}
        >
          View Destinations
        </motion.div>
      </div>

      <div className="scroll mb-12"></div>
    </div>
  );
};
export default Hero;
