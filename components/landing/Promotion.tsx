import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
type Props = {};

const Promotion = (props: Props) => {
  return (
    <div className="grid w-full grid-cols-2 grid-rows-1 bg-dark-accent/10 p-24">
      <div className="flex flex-col gap-y-4">
        <div className="text-lg font-black tracking-widest text-light-accent">
          OUR EXPERIENCE
        </div>
        <div className="text-4xl font-bold">
          A <span className="text-dark-accent">one-in-a-lifetime </span>
          experience.
        </div>

        <div className="leading-loose text-gray-300">
          Experience the thrill of space travel with our expert guides. We'll
          take you on a journey to the stars and back. From floating in zero-g
          to standing on the surface of another celestial body, the
          possibilities are endless.
        </div>

        <div className="mt-4 flex flex-col gap-y-4">
          <div className="flex items-center gap-x-2">
            <FontAwesomeIcon
              className="text-light-accent"
              size="1x"
              icon={faCheckCircle}
            />
            <div className="font-semibold text-light-accent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <FontAwesomeIcon
              className="text-light-accent"
              size="1x"
              icon={faCheckCircle}
            />
            <div className="font-semibold text-light-accent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <FontAwesomeIcon
              className="text-light-accent"
              size="1x"
              icon={faCheckCircle}
            />
            <div className="font-semibold text-light-accent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-16 flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center gap-16 ">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-4xl font-bold text-dark-accent">1</div>
            <div className="text-lg font-bold text-light-accent">Launch</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Promotion;
