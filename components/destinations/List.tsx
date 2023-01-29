import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Card from "./Card";
import { Destination } from "@/types/destination";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {
  destinations: Destination[];
  isLoading: boolean;
};

const List = ({ destinations, isLoading }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (destinations !== undefined) {
      setLoading(false);
    }
  }, [destinations]);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full bg-dark-background p-8 ">
        <div className="flex w-full flex-col items-center justify-center gap-y-2">
          <div className="flex h-96 items-center justify-center">
            <FontAwesomeIcon icon={faSpinner} spin size="3x" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-dark-background p-8 ">
      {!isLoading &&
      (destinations === undefined || destinations?.length === 0) ? (
        <div className="flex w-full flex-col items-center justify-center gap-y-2">
          <h1 className="text-4xl font-bold">No results found</h1>
          <p className="text-lg text-gray-500">
            Try searching for something else
          </p>
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 items-start justify-items-center gap-x-4 gap-y-8 mdd:grid-cols-2 lgg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((destination, i) => (
            <Card
              key={i}
              title={destination.title}
              distance={destination.distance}
              duration={destination.duration}
              cost={destination.cost}
              image={destination.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
