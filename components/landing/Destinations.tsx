import Image from "next/image";

type Props = {};
const Destinations = (props: Props) => {
  return (
    <div className="flex flex-col items-center py-16">
      <div className="text-lg font-black tracking-widest text-light-accent">
        PREMIER DESTINATIONS
      </div>
      <div className="mt-4 text-4xl font-bold text-white">
        Our best destinations for <span className="text-dark-accent">You</span>.
      </div>

      <div className="mt-16 flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-y-16  lg:gap-x-16 lg:gap-y-0">
          <div className="pattern-dots-md">
            <div className="flex translate-x-5 -translate-y-5 flex-col gap-y-4 rounded-xl bg-[#1F2023] p-4">
              <div className="relative h-60 w-96 overflow-clip bg-cover">
                <Image
                  className="overflow-clip rounded-lg transition-all duration-700 hover:scale-150"
                  alt="Mars"
                  fill
                  src="/mars.png"
                  sizes="100vw"
                />
              </div>
              <div className="text-xl font-bold">
                Explore the sandy dunes of Mars
              </div>

              <div className="flex items-center justify-between">
                <div className="text-md font-medium text-light-accent">
                  The Red Planet
                </div>

                <div className="button flex cursor-pointer items-center justify-center rounded-md bg-dark-accent p-3 font-bold transition-all">
                  Book Now
                </div>
              </div>
            </div>
          </div>

          {/* <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex h-80 w-80 flex-col items-center justify-center rounded-md bg-dark-accent">
      <div className="text-2xl font-bold text-white">Mars</div>
      <div className="text-lg font-medium text-light-accent">
        The Red Planet
      </div>
    </div>
  );
};

export default Destinations;
