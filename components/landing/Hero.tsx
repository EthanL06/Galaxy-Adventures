type Props = {};
const Hero = (props: Props) => {
  return (
    <div className="relative flex min-h-[calc(100vh-161px)] flex-col items-center justify-between p-4">
      <div></div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-y-4 text-center">
          <div className="font-serif text-4xl text-white sm:text-6xl">
            GALAXY ADVENTURES
          </div>
          <div className="esm:text-2xl text-xl font-medium text-zinc-400">
            Take your travels to new heights.
          </div>
        </div>

        <div className="button mr-0 mb-2 mt-6 flex h-12 w-80 cursor-pointer items-center justify-center rounded-md bg-dark-accent font-bold transition-all sm:mr-4 sm:mb-0 sm:w-52 lg:mr-6">
          Get Started
        </div>
      </div>

      <div className="scroll mb-4"></div>
    </div>
  );
};
export default Hero;
