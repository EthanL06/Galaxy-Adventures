import React from "react";

type Props = {};

const Journey = (props: Props) => {
  return (
    <div className="w-full bg-[#1e1e20]">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex w-[2.25rem] items-center justify-center rounded-full bg-light-accent/10 text-3xl font-bold text-white">
          1
        </div>
        <div className="text-lg font-bold text-light-accent">Launch</div>
      </div>
    </div>
  );
};

export default Journey;
