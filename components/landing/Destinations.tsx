import Image from "next/image";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../global";
import { useEffect, useState } from "react";

type Props = {};
const Destinations = (props: Props) => {
  const destinations = [
    {
      title: "Explore the Martian Sand Dunes",
      location: "Mars (75.4 million mi.)",
      image: "/mars.png",
      alt: "Martian Sand Dunes",
      description:
        "A vast and constantly shifting landscape, the sand dunes are shaped by the harsh winds of the Red Planet. It can reach heights of up to 100 meters, and offer a stunning view of the surrounding Martian terrain.",
    },
    {
      title: "Explore the Lunar Surface",
      location: "Moon (238,900 mi.)",
      image: "/lunar_surface.png",
      alt: "Lunar Surface",
      description:
        "Take a guided tour of the Lunar Surface and witness the famous lunar landmarks such as the Sea of Tranquility and the Tycho crater, also experience the thrill of low gravity and a unique opportunity to witness the Earth rise and set from a different perspective.",
    },
    {
      title: "Explore a Supermassive Black Hole",
      location: "Gargantua (10 billion ly.)",
      image: "/gargantua.png",
      alt: "Supermassive Black Hole",
      description:
        "Witness the immense power of a black hole. Observe how it bends and distorts light, and experience the sensation of being on the brink of a singularity. Get a glimpse of the intense gravitational pull and understand the mysteries that remain unsolved about these powerful objects in the universe. DISCLAIMER: Requires the use of a wormhole. Travelers may also experience time dilation.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-lg font-black tracking-widest text-light-accent"
      >
        PREMIER DESTINATIONS
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-4 text-center text-4xl font-bold text-white"
      >
        Our best destinations for <span className="text-dark-accent">You</span>.
      </motion.div>
      <div className="mt-16 flex w-full flex-col items-start justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex w-full flex-wrap items-start justify-center gap-16 "
        >
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="pattern-dots-md w-full rounded-xl border-2 border-dark-accent text-dark-accent sm:w-96"
            >
              <div className=" flex flex-col gap-y-4 rounded-xl bg-[#1F2023] p-4 lg:translate-x-5 lg:-translate-y-5">
                <div className="relative h-60 w-full overflow-clip bg-cover">
                  <Image
                    className="overflow-clip rounded-lg transition-all duration-700 hover:scale-150"
                    alt={destination.alt}
                    fill
                    src={destination.image}
                    sizes="100vw"
                  />
                </div>
                <div className="text-xl font-bold text-white">
                  {destination.title}
                </div>

                <div className="text-ellipsis text-gray-300">
                  <Description text={destination.description} />
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-y-4">
                  <div className="flex items-center gap-x-2">
                    <FontAwesomeIcon
                      className="text-light-accent"
                      icon={faLocationDot}
                    />
                    <div className="text-md font-medium text-light-accent">
                      {destination.location}
                    </div>
                  </div>

                  <Button
                    text="Book Now"
                    className="w-full text-white xsm:w-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Button className="mt-16" text="View All Destinations" />
      </motion.div>
    </div>
  );
};

const Description = ({ text }: { text: string }) => {
  const [readMore, setReadMore] = useState(false);
  const [displayedText, setDisplayedText] = useState(text);

  useEffect(() => {
    if (readMore) {
      setDisplayedText(text);
    } else {
      setDisplayedText(text.substring(0, 100) + "...");
    }
  }, [readMore]);

  return (
    <div className="text-ellipsis text-gray-300">
      {displayedText}

      {/* Read More */}
      {!readMore && text.length > 100 && (
        <button
          onClick={() => setReadMore(true)}
          className="text-light-accent hover:underline"
        >
          Read More
        </button>
      )}
    </div>
  );
};

export default Destinations;
