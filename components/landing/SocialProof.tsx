import Image from "next/image";

type Props = {};
const SocialProof = (props: Props) => {
  return (
    <div className="pattern-dots-xl bg-[#1e1e20]  py-16 text-center text-white/5">
      <div className="text-4xl font-bold text-white">
        Trusted by the <span className="text-dark-accent">Best</span>.
      </div>
      <div className="pointer-events-none mt-12 flex select-none flex-wrap items-center justify-center gap-16">
        <Image
          className="grayscale"
          src="/nasa.svg"
          width={150}
          height={200}
          alt="NASA logo"
        />
        <Image
          className="grayscale"
          src="/spacex.svg"
          width={300}
          height={200}
          alt="SpaceX logo"
        />
        <Image
          className="grayscale"
          src="/blue_origin.svg"
          width={200}
          height={200}
          alt="Blue Origin logo"
        />

        <Image
          className="grayscale"
          src="/lockheed_martin.svg"
          width={300}
          height={300}
          alt="Boeing logo"
        />
        <Image
          className="grayscale"
          src="/esa.svg"
          width={150}
          height={200}
          alt="ESA logo"
        />
      </div>
    </div>
  );
};
export default SocialProof;
