import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../global";

type Props = {};
const Destinations = (props: Props) => {
  const destinations = [
    {
      title: "Explore the Martian Sand Dunes",
      location: "Mars (75.4 million mi.)",
      image: "/mars.png",
      alt: "Martian Sand Dunes",
    },
    {
      title: "Explore the Lunar Surface",
      location: "Moon (238,900 mi.)",
      image: "/lunar_surface.png",
      alt: "Lunar Surface",
    },
    {
      title: "Explore a Supermassive Black Hole",
      location: "M87 (55.8 million ly.)",
      image: "/gargantua.png",
      alt: "Supermassive Black Hole",
    },
  ];

  return (
    <div className="flex flex-col items-center py-16">
      <div className="text-lg font-black tracking-widest text-light-accent">
        PREMIER DESTINATIONS
      </div>
      <div className="mt-4 text-center text-4xl font-bold text-white">
        Our best destinations for <span className="text-dark-accent">You</span>.
      </div>

      <div className="mt-16 flex w-full flex-col items-center justify-center px-4">
        <div className="flex w-full flex-wrap items-center justify-center gap-16 ">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="pattern-dots-md w-full rounded-xl sm:w-96"
            >
              <div className="flex flex-col gap-y-4 rounded-xl bg-[#1F2023] p-4 lg:translate-x-5 lg:-translate-y-5">
                <div className="relative h-60 w-full overflow-clip bg-cover">
                  <Image
                    className="overflow-clip rounded-lg transition-all duration-700 hover:scale-150"
                    alt={destination.alt}
                    fill
                    src={destination.image}
                    sizes="100vw"
                  />
                </div>
                <div className="text-xl font-bold">{destination.title}</div>

                <div className="text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <FontAwesomeIcon
                      className="text-light-accent"
                      icon={faLocationDot}
                    />
                    <div className="text-md font-medium text-light-accent">
                      {destination.location}
                    </div>
                  </div>

                  <Button text="Book Now" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button className="mt-16" text="View All Destinations" />
    </div>
  );
};

export default Destinations;
