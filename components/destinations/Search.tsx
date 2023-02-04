import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

const Search = ({ search, setSearch }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-2">
      <div className="flex h-12 items-center gap-x-1 rounded-lg border-2 border-gray-400 bg-background p-4 focus:border-dark-accent focus:outline-none">
        <FontAwesomeIcon icon={faSearch} className="text-xl text-white" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for a destination"
          className="w-full bg-background px-4 text-gray-300 focus:outline-none sm:w-[30rem]"
        />

        <button className="flex items-center justify-center rounded-full transition-transform hover:bg-dark-background">
          <FontAwesomeIcon
            icon={faFilter}
            className="p-2 text-xl text-white transition-transform active:scale-90"
          />
        </button>
      </div>
    </div>
  );
};

export default Search;
