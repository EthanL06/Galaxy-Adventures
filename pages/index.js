import { BackgroundParticles, Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center flex-col min-h-[calc(100vh-130px)]">
        <div className="text-center flex flex-col gap-y-4">
          <div className="font-serif text-white text-6xl">
            GALAXY ADVENTURES
          </div>
          <div className="text-zinc-400 font-medium text-2xl">
            Take your travels to new heights.
          </div>
        </div>

        <div>Get Started</div>
      </div>

      <BackgroundParticles />
    </>
  );
}
