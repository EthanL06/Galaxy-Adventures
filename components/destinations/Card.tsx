import React from "react";
import { useRouter } from "next/router";

type Props = {
  title: string;
  distance: string;
  duration: string;
  cost: string;
  image: string;
  rating: number;
};

// Name
// Distance
// Price (round-trip)
// Travel time
// Reviews

const Card = ({ title, distance, duration, cost, image, rating }: Props) => {
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

        <div className="flex w-full justify-between">
          <div>
            <span className="font-semibold">{cost}</span>
            <span className="text-gray-500"> per ticket</span>
          </div>
          <div className="flex items-center gap-x-1">
            <span className="font-semibold">
              {rating % 1 === 0 ? `${rating}.0` : rating}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// Filled star
const Star = () => {
  return (
    <svg
      className="h-5 w-5 text-yellow-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0L13.09 6.47208L20 7.8541L15 12.4721L16.18 19.5832L10 16.6666L3.82 19.5832L5 12.4721L0 7.8541L6.91 6.47208L10 0Z"
      />
    </svg>
  );
};

export default Card;
