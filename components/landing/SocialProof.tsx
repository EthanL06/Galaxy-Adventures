import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};
const SocialProof = (props: Props) => {
  return (
    <div className="pattern-dots-xl bg-dark-background  py-16 px-2 text-center text-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="px-4 text-4xl font-bold text-white sm:text-4xl"
      >
        Trusted by the <span className="text-dark-accent">Best</span>.
      </motion.div>
      <div className="pointer-events-none mt-12 flex select-none flex-wrap items-center justify-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            className="grayscale"
            src="/nasa.svg"
            width={150}
            height={200}
            alt="NASA logo"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            className="grayscale"
            src="/spacex.svg"
            width={300}
            height={200}
            alt="SpaceX logo"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            className="grayscale"
            src="/blue_origin.svg"
            width={200}
            height={200}
            alt="Blue Origin logo"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            className="grayscale"
            src="/lockheed_martin.svg"
            width={300}
            height={300}
            alt="Lockheed Martin logo"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            className="grayscale"
            src="/esa.svg"
            width={150}
            height={200}
            alt="ESA logo"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default SocialProof;
