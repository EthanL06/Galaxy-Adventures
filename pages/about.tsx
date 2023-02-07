type Props = {};
import { Navbar, Footer, Breadcrumbs } from "@/components/global";
import Link from "next/link";

const About = (props: Props) => {
  const sources = [
    {
      source: "NASA Logo",
      linkName: "Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:NASA_Worm_logo.svg",
    },
    {
      source: "SpaceX Logo",
      linkName: "Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:SpaceX-Logo.svg",
    },
    {
      source: "Blue Origin Logo",
      linkName: "Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Blue_Origin_new_logo.svg",
    },
    {
      source: "Lockheed Martin Logo",
      linkName: "Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Lockheed_Martin_logo.svg",
    },
    {
      source: "ESA Logo",
      linkName: "Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:ESA_logo.svg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen w-full max-w-3xl justify-center px-4 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <article className="prose prose-sm prose-invert mx-auto sm:prose-base lg:prose-lg 2xl:prose-2xl xl:prose-xl">
          <div className="">
            <Breadcrumbs />
          </div>
          <h1>About</h1>
          <p>
            Galaxy Adventures is a pioneering space tourism company that is
            dedicated to offering unforgettable experiences in space. Our
            mission is to make space accessible to everyone and provide a
            platform for people to explore the cosmos like never before. With
            our team of experienced astronauts, engineers, and space
            enthusiasts, we are committed to providing safe, comfortable, and
            memorable space missions that push the boundaries of what is
            possible. Whether you&apos;re looking to experience weightlessness,
            see the Earth from a unique perspective, or be among the first to
            witness the wonders of space, Galaxy Adventures is your ticket to a
            once-in-a-lifetime adventure. Join us as we embark on the ultimate
            journey to the stars.
          </p>

          <hr />

          <h2>Built With</h2>
          <ul>
            <li>
              <Link href={"https://nextjs.org/"}>Next.js</Link> (React
              Framework)
            </li>
            <li>
              <Link href={"/https://tailwindcss.com/"}>Tailwind CSS</Link> (CSS
              Framework)
            </li>

            <li>
              <Link href={"https://www.framer.com/motion/"}>Framer Motion</Link>{" "}
              (Animation Library)
            </li>

            <li>
              <Link href={"https://headlessui.com/"}>Headless UI</Link> (Modal
              Component)
            </li>

            <li>
              <Link href={"https://fontawesome.com/icons"}>Font Awesome</Link>{" "}
              (Icons)
            </li>

            <li>
              <Link href={"/https://fonts.google.com/"}>Google Fonts</Link>{" "}
              (Jost and Inter)
            </li>
          </ul>

          <hr />

          <h2>Sources</h2>
          <table>
            <thead>
              <tr>
                <th>Source</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {sources.map(({ source, linkName, href }, index) => (
                <tr key={index}>
                  <td>{source}</td>
                  <td>
                    <Link href={href}>{linkName}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>
      <Footer />
    </>
  );
};
export default About;
