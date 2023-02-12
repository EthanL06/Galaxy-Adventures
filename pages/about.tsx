type Props = {};
import { Navbar, Footer, Breadcrumbs } from "@/components/global";
import Link from "next/link";

const About = (props: Props) => {
  const sources = [
    {
      source: "NASA Logo",
      linkName: "𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴",
      href: "https://commons.wikimedia.org/wiki/File:NASA_Worm_logo.svg",
    },
    {
      source: "SpaceX Logo",
      linkName: "𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴",
      href: "https://commons.wikimedia.org/wiki/File:SpaceX-Logo.svg",
    },
    {
      source: "Blue Origin Logo",
      linkName: "𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴",
      href: "https://commons.wikimedia.org/wiki/File:Blue_Origin_new_logo.svg",
    },
    {
      source: "Lockheed Martin Logo",
      linkName: "𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴",
      href: "https://commons.wikimedia.org/wiki/File:Lockheed_Martin_logo.svg",
    },
    {
      source: "ESA Logo",
      linkName: "𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴",
      href: "https://commons.wikimedia.org/wiki/File:ESA_logo.svg",
    },
    {
      source: "Space Shuttle Leaving Earth",
      linkName: "𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴",
      href: "https://commons.wikimedia.org/wiki/File:STS-134_launch_seen_from_a_shuttle_training_aircraft_3.jpg",
    },
    {
      source: "Profile Picture",
      linkName: "𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴",
      href: "https://commons.wikimedia.org/wiki/File:Default_pfp.jpg",
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
      source: "Martian Sand Dunes",
      linkName: "NASA",
      href: "https://mars.nasa.gov/resources/5849/endurance-craters-dazzling-dunes/",
    },
    {
      source: "Lunar Surface",
      linkName: "Flickr",
      href: "https://www.flickr.com/photos/nasa2explore/48299943976",
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
    {
      source: "Destination Images",
      linkName: "Midjourney",
      href: "https://midjourney.com/",
    },
  ];

  const videoSources = [
    {
      source: "Galaxy Adventures Promotional Video",
      linkName: "YouTube (original video)",
      href: "https://www.youtube.com/watch?v=A5NI0R_7M3g",
    },
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
      source: "Background Music",
      linkName: "Google Drive (original music)",
      href: "https://drive.google.com/file/d/13hdgfuQLsxlTUwAmxMfppjJYbfjLsgV_/view",
    },
  ];

  const imagesSources = [
    "SpaceX. “File:SpaceX-Logo.svg.” 𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴, 2009, https://commons.wikimedia.org/wiki/File:SpaceX-Logo.svg.",
    "Blue Origin. “File:Blue Origin New Logo.svg.” 𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴, 13 Sept. 2016, https://commons.wikimedia.org/wiki/File:Blue_Origin_new_logo.svg. ",
    "Danne & Blackburn, NY, USA. “NASA Worm Logo.svg.” 𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴, 1 Jan. 1975, https://commons.wikimedia.org/wiki/File:NASA_Worm_logo.svg. ",
    "Lockheed Martin. “File:Lockheed Martin Logo.svg.” 𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴, 11 Apr. 2021, https://commons.wikimedia.org/wiki/File:Lockheed_Martin_logo.svg. ",
    "ESA. “File:ESA Logo.svg.” 𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴, https://commons.wikimedia.org/wiki/File:ESA_logo.svg. ",
    "NASA. “File:STS-134 Launch 12.Jpg - Wikimedia Commons.” 𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴, 16 May 2011, https://commons.wikimedia.org/wiki/File:STS-134_launch_12.jpg. ",
    "ByteDance. “File:Default Pfp.svg.” 𝘞𝘪𝘬𝘪𝘮𝘦𝘥𝘪𝘢 𝘊𝘰𝘮𝘮𝘰𝘯𝘴, 19 Nov. 2018, https://commons.wikimedia.org/wiki/File:Default_pfp.svg. ",
    "Nasa. “Photo by NASA on UNSPLASH.” 𝘉𝘦𝘢𝘶𝘵𝘪𝘧𝘶𝘭 𝘍𝘳𝘦𝘦 𝘐𝘮𝘢𝘨𝘦𝘴 & 𝘗𝘪𝘤𝘵𝘶𝘳𝘦𝘴, 27 Dec. 2015, https://unsplash.com/photos/Q1p7bh3SHj8. ",
    "Nasa. “Photo by NASA on UNSPLASH.” 𝘉𝘦𝘢𝘶𝘵𝘪𝘧𝘶𝘭 𝘍𝘳𝘦𝘦 𝘐𝘮𝘢𝘨𝘦𝘴 & 𝘗𝘪𝘤𝘵𝘶𝘳𝘦𝘴, 3 Mar. 2021, https://unsplash.com/photos/vhSz50AaFAs. ",
    "Petrucci, Mike. “Photo by Mike Petrucci on Unsplash.” 𝘉𝘦𝘢𝘶𝘵𝘪𝘧𝘶𝘭 𝘍𝘳𝘦𝘦 𝘐𝘮𝘢𝘨𝘦𝘴 & 𝘗𝘪𝘤𝘵𝘶𝘳𝘦𝘴, 26 Mar. 2018, https://unsplash.com/photos/uIf6H1or1nE. ",
    "Nasa. “Photo by NASA on UNSPLASH.” 𝘉𝘦𝘢𝘶𝘵𝘪𝘧𝘶𝘭 𝘍𝘳𝘦𝘦 𝘐𝘮𝘢𝘨𝘦𝘴 & 𝘗𝘪𝘤𝘵𝘶𝘳𝘦𝘴, 2 Mar. 2021, https://unsplash.com/photos/N3BQHYOVq5E. ",
    "Volumes, Planet. “Photo by Planet Volumes on Unsplash.” 𝘉𝘦𝘢𝘶𝘵𝘪𝘧𝘶𝘭 𝘍𝘳𝘦𝘦 𝘐𝘮𝘢𝘨𝘦𝘴 & 𝘗𝘪𝘤𝘵𝘶𝘳𝘦𝘴, 5 Sept. 2021, https://unsplash.com/photos/awYEQyYdHVE. ",
    "Nasa. “Photo by NASA on UNSPLASH.” 𝘉𝘦𝘢𝘶𝘵𝘪𝘧𝘶𝘭 𝘍𝘳𝘦𝘦 𝘐𝘮𝘢𝘨𝘦𝘴 & 𝘗𝘪𝘤𝘵𝘶𝘳𝘦𝘴, 3 Mar. 2021, https://unsplash.com/photos/2W-QWAC0mzI. ",
    "Nasa. “Photo by NASA on UNSPLASH.” 𝘉𝘦𝘢𝘶𝘵𝘪𝘧𝘶𝘭 𝘍𝘳𝘦𝘦 𝘐𝘮𝘢𝘨𝘦𝘴 & 𝘗𝘪𝘤𝘵𝘶𝘳𝘦𝘴, 3 Mar. 2021, https://unsplash.com/photos/Li41RApUAQA. ",
    "Nasa. “Photo by NASA on UNSPLASH.” 𝘉𝘦𝘢𝘶𝘵𝘪𝘧𝘶𝘭 𝘍𝘳𝘦𝘦 𝘐𝘮𝘢𝘨𝘦𝘴 & 𝘗𝘪𝘤𝘵𝘶𝘳𝘦𝘴, 26 Feb. 2021, https://unsplash.com/photos/ScBkW9AKgcA. ",
    "Nasa. “Photo by NASA on UNSPLASH.” 𝘉𝘦𝘢𝘶𝘵𝘪𝘧𝘶𝘭 𝘍𝘳𝘦𝘦 𝘐𝘮𝘢𝘨𝘦𝘴 & 𝘗𝘪𝘤𝘵𝘶𝘳𝘦𝘴, 26 Feb. 2021, https://unsplash.com/photos/-5V6VZxSQRo. ",
    "Nasa. “Photo by NASA on UNSPLASH.” 𝘉𝘦𝘢𝘶𝘵𝘪𝘧𝘶𝘭 𝘍𝘳𝘦𝘦 𝘐𝘮𝘢𝘨𝘦𝘴 & 𝘗𝘪𝘤𝘵𝘶𝘳𝘦𝘴, 2 Mar. 2021, https://unsplash.com/photos/N3BQHYOVq5E. ",
    "“Computer Simulated Global View of Venus.” 𝘕𝘈𝘚𝘈, NASA, 7 May 2008, https://solarsystem.nasa.gov/resources/688/computer-simulated-global-view-of-venus/?category=planets_venus. ",
    "“'Endurance Crater's' Dazzling Dunes – NASA Mars Exploration.” 𝘕𝘈𝘚𝘈, NASA, 6 Aug. 2004, https://mars.nasa.gov/resources/5849/endurance-craters-dazzling-dunes/. ",
    "Johnson, NASA. “Panorama View of Apollo 11 Lunar Surface Photos.” 𝘍𝘭𝘪𝘤𝘬𝘳, Yahoo!, 16 July 2019, https://www.flickr.com/photos/nasa2explore/48299943976. ",
    "Kanijoman. “Agujero Negro En La Película Interstellar.” 𝘍𝘭𝘪𝘤𝘬𝘳, Yahoo!, 30 Nov. 2015, https://www.flickr.com/photos/23925401@N06/22790273293. ",
    "𝘔𝘪𝘥𝘫𝘰𝘶𝘳𝘯𝘦𝘺. https://www.midjourney.com/. (4 secondary images for each destination were AI generated using the website, non-commerical use is allowed)",
  ];

  const videosSources = [
    "North, Ingrid. “The Sun Illuminating Earth's Surface - Pexels.” Pexels, 6 Mar. 2019 https://www.pexels.com/video/the-sun-illuminating-earth-s-surface-1851190/. ",
    "Cone, Frank. “Video Presentation of the Outer Space - Pexels.” Pexels, 17 Dec. 2019, https://www.pexels.com/video/video-presentation-of-the-outer-space-3194277/. ",
    "Redfield, Joseph. “Sunlight Shining Brightly on the Planet Earth - Pexels.” Pexels, 10 Jan. 2022, https://www.pexels.com/video/sunlight-shining-brightly-on-the-planet-earth-10755266/. ",
    "Pressmaster. “Heavenly Bodies in Still Motion Video - Pexels.” Pexels, 6 Nov. 2019, https://www.pexels.com/video/heavenly-bodies-in-still-motion-video-3141209/. ",
    "Werder, Hannes. “Download Futuristic Sci-Fi Space Ship Tunnel for Free.” Vecteezy, 14 Dec. 2020, https://www.vecteezy.com/video/1803414-futuristic-sci-fi-space-ship-tunnel. ",
    "Galaxy Adventures Promotional Video (original video)",
    "Background Music (original music)",
  ];

  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen w-full max-w-3xl justify-center px-4 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <article className="prose prose-sm prose-invert mx-auto sm:prose-base lg:prose-lg  xl:prose-xl">
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

          <h2>Documents</h2>
          <ul>
            <li>
              <Link href={"/copyright_form.pdf"}>Copyright Form</Link>
            </li>
            <li>
              <Link href={"/work_log.pdf"}>Plan of Work Log</Link>
            </li>
          </ul>
          <hr />

          <h2>Sources</h2>

          <table>
            <thead>
              <tr>
                <th>Image Sources</th>
              </tr>
            </thead>
            <tbody>
              {imagesSources.map((source, index) => (
                <tr key={index}>
                  <td>{source}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>Video Sources</th>
              </tr>
            </thead>
            <tbody>
              {videosSources.map((source, index) => (
                <tr key={index}>
                  <td>{source}</td>
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
