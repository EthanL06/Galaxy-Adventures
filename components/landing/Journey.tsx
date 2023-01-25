import React from "react";

type Props = {};

const Journey = (props: Props) => {
  const steps = [
    {
      title: "Training",
      description: "Learn the basics of space travel.",
    },
    {
      title: "Launch",
      description: "Take your first steps into space.",
    },
    {
      title: "Travel",
      description: "Explore the vastness of the universe.",
    },
    {
      title: "Land",
      description: "Stand on the surface of another celestial body.",
    },
    {
      title: "Return",
      description: "Return to Earth with memories that will last a lifetime.",
    },
  ];

  // As the user scrolls down the page, the current step should be highlighted in light accent color

  return (
    <div className="w-full py-32 px-8">
      <div className="flex flex-col items-center gap-32">
        <div className="flex flex-col items-center">
          <div className="text-lg font-black tracking-widest text-light-accent">
            THE JOURNEY
          </div>
          <div className="mt-4 text-center text-4xl font-bold">
            A <span className="text-dark-accent">timeline</span> of your
            journey.
          </div>
        </div>
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex h-[30vh] flex-col items-center justify-center gap-4 text-center"
          >
            <div className="flex w-16 items-center justify-center rounded-full bg-light-accent/10 text-4xl font-bold leading-[4rem] text-white">
              {index + 1}
            </div>
            <div className="text-4xl font-bold text-white">{step.title}</div>
            <div className="text-lg text-gray-300">{step.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
