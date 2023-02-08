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
    {
      source: "Martian Sand Dunes",
      linkName: "NASA",
      href: "https://mars.nasa.gov/system/resources/detail_files/5849_Sol201B-PIA06754-full2.jpg",
    },
    {
      source: "Lunar Surface",
      linkName: "NASA",
      href: "https://science.nasa.gov/tranquility-base-panorama",
    },
    {
      source: "Space Shuttle Leaving Earth",
      linkName: "NASA",
      href: "https://www.nasa.gov/sites/default/files/images/555830main_134launchthroughclouds_full.jpg",
    },
    {
      source: "Earth Surface",
      linkName: "Unsplash",
      href: "https://unsplash.com/photos/Q1p7bh3SHj8",
    },
    {
      source: "Earth from Space",
      linkName: "Unsplash",
      href: "https://unsplash.com/photos/vhSz50AaFAs",
    },
    {
      source: "Moon from Space",
      linkName: "Unsplash",
      href: "https://unsplash.com/photos/uIf6H1or1nE",
    },
    {
      source: "Venus from Space",
      linkName: "Unsplash",
      href: "https://unsplash.com/photos/N3BQHYOVq5E",
    },
    {
      source: "Jupiter from Space",
      linkName: "Unsplash",
      href: "https://unsplash.com/photos/awYEQyYdHVE",
    },
    {
      source: "Saturn from Space",
      linkName: "Unsplash",
      href: "https://unsplash.com/photos/2W-QWAC0mzI",
    },
    {
      source: "Uranus from Space",
      linkName: "Unsplash",
      href: "https://unsplash.com/photos/Li41RApUAQA",
    },
    {
      source: "Neptune from Space",
      linkName: "Unsplash",
      href: "https://unsplash.com/photos/ScBkW9AKgcA",
    },
    {
      source: "Pluto from Space",
      linkName: "Unsplash",
      href: "https://unsplash.com/photos/-5V6VZxSQRo",
    },
    {
      source: "Mars from Space",
      linkName: "iStock Photo",
      href: "https://media.istockphoto.com/id/1214890390/photo/planet-mars-in-space.jpg?s=612x612&w=0&k=20&c=zbmCpu6vaD036-6HQNOzHO1qz0tEjUa7boJaoaWG6B0=",
    },
    {
      source: "Gargantua",
      linkName: "Flickr",
      href: "https://www.flickr.com/photos/23925401@N06/22790273293",
    },
    {
      source: "Background Particles",
      linkName: "GitHub",
      href: "https://github.com/VincentGarreau/particles.js/",
    },
  ];

  const videoSources = [
    {
      source: "The Sun Illuminating Earth's Surface",
      linkName: "Pexels",
      href: "https://www.pexels.com/video/the-sun-illuminating-earth-s-surface-1851190/",
    },
    {
      source: "Video Presentation of the Outer Space",
      linkName: "Pexels",
      href: "https://www.pexels.com/video/video-presentation-of-the-outer-space-3194277/",
    },
    {
      source: "Sunlight Shining Brightly on the Planet Earth",
      linkName: "Pexels",
      href: "https://www.pexels.com/video/sunlight-shining-brightly-on-the-planet-earth-10755266/",
    },
    {
      source: "Heavenly Bodies in Still Motion Video",
      linkName: "Pexels",
      href: "https://www.pexels.com/video/heavenly-bodies-in-still-motion-video-3141209/",
    },
    {
      source: "Futuristic Sci-Fi Space Ship Tunnel",
      linkName: "Vecteezy",
      href: "https://www.vecteezy.com/video/1803414-futuristic-sci-fi-space-ship-tunnel",
    },
    {
      source: "Robot Voice Countdown Sound Effect",
      linkName: "Epidemic Sound",
      href: "https://www.epidemicsound.com/track/XeJCwVwdrO/",
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
              <Link href={"https://tailwindcss.com/"}>Tailwind CSS</Link> (CSS
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
              <Link href={"https://fonts.google.com/"}>Google Fonts</Link> (Jost
              and Inter)
            </li>
          </ul>

          <hr />

          <h2>Sources</h2>
          <table>
            <thead>
              <tr>
                <th>Image Sources</th>
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

              <tr>
                <td>Destination Images</td>
                <td>
                  <Link href={"https://openai.com/dall-e-2/"}>Dall-E 2</Link>{" "}
                  and <Link href={"https://midjourney.com/"}>Midjourney</Link>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>Video Sources</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {videoSources.map(({ source, linkName, href }, index) => (
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
