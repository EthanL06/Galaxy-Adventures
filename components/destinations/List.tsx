import React, { useEffect, useState } from "react";
import useSWR from "swr";

import Card from "./Card";
import { Destination } from "@/types/destination";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {
  destinations: Destination[];
};

const List = ({ destinations }: Props) => {
  return (
    <div className="grid min-h-screen w-full  grid-cols-1 flex-wrap items-start justify-items-center gap-x-4 gap-y-8 bg-dark-background p-8  mdd:grid-cols-2 lgg:grid-cols-3 xl:grid-cols-4">
      {destinations &&
        destinations.map((destination, i) => (
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
  );
};

export default List;
