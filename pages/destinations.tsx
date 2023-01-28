import { useState, useEffect } from "react";
import useSWR from "swr";

import { Navbar, Footer } from "@/components/global";
import { Search, List } from "@/components/destinations";
import { Destination } from "@/types/destination";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Destinations = () => {
  const { data, error } = useSWR("/api/destinations", fetcher);

  const [search, setSearch] = useState("");
  const [destinations, setDestinations] = useState([] as Destination[]);
  const [filteredDestinations, setFilteredDestinations] = useState(
    [] as Destination[]
  );

  useEffect(() => {
    console.log(data);
    setDestinations(data);
    setFilteredDestinations(data);
  }, [data]);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredDestinations(destinations);
    } else {
      setFilteredDestinations(
        destinations.filter((destination) => {
          if (destination.title.toLowerCase().includes(search.toLowerCase())) {
            return destination;
          }
        })
      );
    }
  }, [destinations, search]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-y-8">
        <div className="text-3xl font-bold xsm:text-4xl">
          Search <span className="text-dark-accent">Destinations</span>
        </div>

        <Search search={search} setSearch={setSearch} />
        <List destinations={filteredDestinations} />
      </div>
      <Footer />
    </>
  );
};
export default Destinations;
