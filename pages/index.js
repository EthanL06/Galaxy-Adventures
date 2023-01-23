import { BackgroundParticles, Navbar, Footer } from "@/components/global";
import { Hero, SocialProof, Destinations } from "@/components/landing";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <SocialProof />
      <Destinations />
      <Footer />
      <BackgroundParticles />
    </div>
  );
}
