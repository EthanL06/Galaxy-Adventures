import { motion } from "framer-motion";

type Props = {};
const Video = (props: Props) => {
  return (
    <div className="grid place-items-center py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-lg font-black tracking-widest text-light-accent"
      >
        PROMOTIONAL VIDEO
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-4 text-center text-4xl font-bold text-white"
      >
        What you should <span className="text-dark-accent">expect</span> with
        us.
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex w-full items-center justify-center px-4"
      >
        <iframe
          className="mt-16 aspect-video w-full rounded-lg border-4 border-dark-background lg:w-[60rem]"
          src="https://www.youtube.com/embed/A5NI0R_7M3g?cc_load_policy=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </motion.div>
    </div>
  );
};
export default Video;
