import React from "react";
import { useRouter } from "next/router";

type Props = {
  title: string;
  distance: string;
  duration: string;
  cost: string;
  image: string;
};

// Name
// Distance
// Price (round-trip)
// Travel time
// Reviews

const Card = ({ title, distance, duration, cost, image }: Props) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/destinations/${title.toLowerCase()}`);
      }}
      className="group flex w-full flex-col gap-y-2  text-white hover:cursor-pointer sm:w-96"
    >
      <div className="relative flex h-60 w-full overflow-clip  sm:w-96">
        <img
          src={image}
          loading="lazy"
          className="h-60 w-full overflow-clip rounded-lg object-cover transition-all duration-700 hover:cursor-pointer group-hover:scale-125 sm:w-96"
          alt={title}
        />
      </div>

      <div className="flex flex-col justify-between gap-y-3">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold transition-colors group-hover:text-dark-accent">
            {title}
          </h3>
          <p className="text-gray-500">{distance}</p>
          <p className="text-gray-500">{duration}</p>
        </div>

        <div>
          <span className="font-semibold">{cost}</span>
          <span className="text-gray-500"> per ticket</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
