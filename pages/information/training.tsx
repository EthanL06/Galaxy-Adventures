type Props = {};
import { Navbar, Footer, Breadcrumbs } from "@/components/global";
import { useRouter } from "next/router";

const Training = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen w-full max-w-3xl justify-center px-4 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <article className="prose prose-sm prose-invert mx-auto prose-a:no-underline sm:prose-base lg:prose-lg 2xl:prose-2xl xl:prose-xl">
          <div className="">
            <Breadcrumbs />
          </div>
          <h1>Training</h1>
          <p>
            At Galaxy Adventure, we understand the importance of preparation and
            training for a successful space flight. Before embarking on their
            journey, all travelers will undergo an intensive training program
            designed to equip them with the skills and knowledge necessary to
            handle the unique challenges of space travel. Our experienced
            trainers will provide individualized attention to each customer to
            ensure they are fully prepared for their mission. With our rigorous
            training regimen, travelers can feel confident and ready for their
            once-in-a-lifetime adventure.
          </p>
          <hr />
          <h2>Basic Training ($50,000)</h2>
          <p>
            The Basic Training Package is designed for those who are looking for
            a basic understanding of space travel. This package will include:
          </p>
          <ul>
            <li>
              <strong>Simulations on emergency procedures</strong> - Our
              trainers will provide a brief overview of emergency procedures
              that travelers may encounter during their space flight. This
              includes procedures for dealing with depressurization, fire
              emergencies, and other unexpected situations.
            </li>

            <li>
              <strong>Physical fitness exercises</strong> - Travelers will
              undergo a series of physical fitness exercises to prepare for the
              conditions of zero-gravity. This includes exercises that focus on
              strength, balance, and flexibility.
            </li>

            <li>
              <strong>Overview of spacecraft operations</strong> - Travelers
              will receive a brief overview of spacecraft operations. This
              includes information on how to operate the spacecraft&apos;s
              navigation, communication, and life support systems.
            </li>
          </ul>
          <p>
            This package is ideal for travelers who have limited time and are
            looking for a general introduction to space travel.
          </p>
          <hr />
          <h2>Premium Training ($100,000)</h2>
          <p>
            The Premium Training Package offers a more comprehensive training
            experience for travelers who want to fully prepare for their space
            flight. In addition to the Basic package, this package also
            includes:
          </p>
          <ul>
            <li>
              <strong>More Advanced Simulations</strong> - Travelers will
              undergo additional simulations that focus on emergency procedures
              and survival techniques in various scenarios, allowing them to
              practice and prepare for unexpected events in space. These
              simulations will be designed to test the travelers&apos;s response
              time, decision-making skills, and ability to work under pressure.
              The simulations will also cover situations such as spacecraft
              malfunctions, communication failures, and spacewalk scenarios.
            </li>

            <li>
              <strong>Hands-on training with spacecraft</strong> - Travelers
              will have the opportunity to practice operating the spacecraft
              under the supervision of our trainers. This will allow them to
              gain a better understanding of how to operate the
              spacecraft&apos;s navigation, communication, and life support
              systems.
            </li>

            <li>
              <strong>Virtual Reality Training</strong> - Travelers will use
              virtual reality to simulate real-life space missions. This allows
              travelers to experience what it&apos;s like to be in space without
              actually leaving the ground. This cutting-edge training technology
              will provide customers with an immersive and interactive
              experience, helping them to better prepare for their actual space
              flight.
            </li>
          </ul>
          <p>
            Travelers who choose the Premium Training Package will receive
            personalized attention from our trainers to ensure they are fully
            prepared for their mission.
          </p>
          <hr />
          <h2>Deluxe Training ($150,000)</h2>
          <p>
            The Deluxe Training Package is our most comprehensive training
            program, offering the ultimate preparation experience for travelers.
            This package includes everything offered in the Basic and Premium
            packages, as well as:
          </p>
          <ul>
            <li>
              <strong>Mission Simulation</strong> - Travelers will participate
              in a pre-flight mission simulation, allowing them to put their
              skills and knowledge to the test. This simulation will closely
              resemble a real space mission, covering all aspects of space
              travel, from launch to landing. The travelers&apos;s performance
              in the simulation will be closely monitored by our trainers, who
              will provide personalized feedback and guidance on areas for
              improvement.
            </li>

            <li>
              <strong>Training with Astronauts</strong> - Travelers will have
              the opportunity to train with astronauts who have extensive
              experience in space flight. This will allow travelers to gain
              valuable insight into what it&apos;s like to be an astronaut and
              what it takes to succeed in space.
            </li>

            <li>
              <strong>Advanced Science and Technology Education</strong> -
              Travelers will receive a comprehensive education on the science
              and technology behind space travel. This will include information
              on the physics of space flight, the history of space exploration,
              and the future of space travel. Travelers will also learn about
              the latest advances in space technology, including the latest
              developments in spacecraft design, propulsion systems, and
              life-support systems.
            </li>
          </ul>
          <p>
            This package is ideal for travelers who want to be fully prepared
            for their space flight and have a true understanding of what it
            takes to succeed in space.
          </p>

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
export default Training;
