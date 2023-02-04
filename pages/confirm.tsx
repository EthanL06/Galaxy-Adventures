import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BackgroundParticles } from "@/components/global";
import { motion } from "framer-motion";

type Props = {};
const Confirm = (props: Props) => {
  const [loading, setLoading] = useState(true);

  const loadingMessages = [
    "Processing purchase...",
    "Calculating jump to hyperspace...",
    "Charging up the warp drive...",
    "Launching into the final frontier...",
  ];

  useEffect(() => {
    (async () => {
      if (!loading) return;

      for (let i = 0; i < loadingMessages.length; i++) {
        const text = document.getElementById("text");
        if (text) {
          text.innerText = loadingMessages[i];
        }
        await new Promise((resolve) => setTimeout(resolve, 3500));
      }

      setLoading(false);
    })();

    return () => {};
  }, [loading]);

  return (
    <>
      <div className="flex min-h-screen items-center justify-center p-2">
        <div className="flex flex-col items-center gap-y-4">
          {loading ? (
            <>
              <FontAwesomeIcon icon={faSpinner} spin size="3x" />
              <h1 id="text" className="text-center text-lg font-bold"></h1>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FontAwesomeIcon
                  className="rounded-full bg-white text-dark-accent"
                  icon={faCheckCircle}
                  size="3x"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-xl font-bold"
              >
                Purchase complete!
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                animate={{ opacity: 1, y: -10 }}
              >
                <Link
                  href={"/"}
                  className="font-semibold text-gray-500 underline underline-offset-2 transition-colors hover:text-gray-400"
                >
                  Return to home
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </div>

      <BackgroundParticles />
    </>
  );
};
export default Confirm;
