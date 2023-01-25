import { BackgroundParticles, Navbar, Footer } from "@/components/global";
import { Hero, SocialProof, Destinations, Promotion, Journey, Testimonials  } from "@/components/landing";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <SocialProof />
      <Destinations />
      <Promotion />
      <Journey />
      <Testimonials />
      <Footer />
      <BackgroundParticles />
    </div>
  );
}
