type Props = {};
import { Navbar, Footer, Breadcrumbs } from "@/components/global";
import { useRouter } from "next/router";

const Vehicles = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen w-full max-w-3xl justify-center px-4 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <article className="prose prose-sm prose-invert mx-auto prose-a:no-underline sm:prose-base lg:prose-lg xl:prose-xl">
          <div className="">
            <Breadcrumbs />
          </div>
          <h1>Vehicles</h1>
          <p>
            Our space vehicles are designed to provide travelers with a safe,
            comfortable, and reliable journey to space. Each vehicle is equipped
            with state-of-the-art technology and features that ensure a smooth
            and successful space mission. The vehicles are meticulously
            maintained and regularly tested to ensure that they meet the highest
            safety and performance standards. Our vehicles are capable of
            reaching low Earth orbit and beyond, providing travelers with a
            unique and unforgettable experience. The spacious and well-appointed
            interiors offer ample room for passengers to move around and enjoy
            the breathtaking views of the Earth and the cosmos. Whether
            you&apos;re an experienced astronaut or a first-time space traveler,
            our vehicles are the perfect choice for your journey to space.
          </p>
          <hr />
          <h2>Falcon Heavy ($1,000,000)</h2>
          <p>
            Travelers riding on the Falcon Heavy can expect a powerful and
            reliable space launch experience. With its reusable boosters and
            increased payload capacity, the Falcon Heavy is capable of carrying
            a variety of payloads and equipment to space. Some unique features
            that travelers can enjoy during their ride on the Falcon Heavy
            include:
          </p>
          <ul>
            <li>
              <strong>Spectacular Views</strong> - The Falcon Heavy&apos;s
              spacious interior provides ample room for passengers to move
              around and enjoy the breathtaking views of the Earth and the
              cosmos.
            </li>

            <li>
              <strong>Smooth and Efficient Launch</strong> - The Falcon Heavy
              has been designed and built with efficiency in mind, ensuring a
              smooth and efficient space launch for travelers.
            </li>

            <li>
              <strong>High-Tech Equipment</strong> - The Falcon Heavy is
              equipped with state-of-the-art technology and features, providing
              travelers with a safe and comfortable ride to space.
            </li>
          </ul>
          <hr />
          <h2>Space Launch System ($5,000,000)</h2>
          <p>
            The Space Launch System (SLS) provides travelers with a safe and
            capable space launch experience. With its powerful engines and
            increased payload capacity, the SLS is capable of taking astronauts
            and other payloads beyond low Earth orbit and into deep space. Some
            unique features that travelers can enjoy during their ride on the
            SLS include:
          </p>
          <ul>
            <li>
              <strong>Safe and Reliable Launch</strong> - The SLS has been
              designed and built with safety and reliability in mind, ensuring a
              safe and successful space mission for travelers.
            </li>

            <li>
              <strong>Advanced Technology</strong> - The SLS is equipped with
              advanced technology, including powerful engines and cutting-edge
              avionics, providing travelers with a state-of-the-art space launch
              experience.
            </li>

            <li>
              <strong>Comfort and Convenience</strong> - The SLS features
              spacious and well-appointed interiors, providing travelers with a
              comfortable and convenient space launch experience.
            </li>
          </ul>
          <hr />
          <h2>Starship ($10,000,000)</h2>
          <p>
            Travelers riding on Starship can expect a revolutionary space launch
            experience. With its fully reusable design and advanced
            capabilities, Starship is capable of carrying a variety of payloads
            and equipment to space. Some unique features that travelers can
            enjoy during their ride on Starship include:
          </p>
          <ul>
            <li>
              <strong>Versatile Capabilities</strong> - Starship is capable of
              landing and taking off from multiple surfaces, including Earth and
              other celestial bodies, making it one of the most versatile space
              vehicles in the world.
            </li>

            <li>
              <strong>Reusable Design</strong> - Starship&apos;s fully reusable
              design allows for a more cost-effective and environmentally
              friendly space mission.
            </li>

            <li>
              <strong>Advanced Life Support Systems</strong> - Starship is
              equipped with advanced life support systems, ensuring a safe and
              comfortable space travel experience for travelers, with air and
              temperature control, water recycling, and waste management
              systems.
            </li>
          </ul>

          <button
            onClick={() => {
              router.back();
            }}
            className="flex items-center gap-x-2 text-gray-400 transition-colors hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <div>Back</div>
          </button>
        </article>
      </div>
      <Footer />
    </>
  );
};
export default Vehicles;
