import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  const mainLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About Us",
    },
    {
      href: "/references",
      label: "References",
    },
    {
      href: "/credits",
      label: "Credits",
    },
  ];

  const planningLinks = [
    {
      href: "/information",
      label: "Basic Information",
    },
    {
      href: "/booking",
      label: "Booking",
    },
    {
      href: "/destinations",
      label: "Destinations",
    },
    {
      href: "/activites",
      label: "Activities",
    },
  ];

  return (
    <footer>
      <div className="bg-[#1F2023] pt-10 lg:pt-20 lg:pb-12 ">
        <div className="container mx-auto w-4/5 px-4 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="mb-16 w-full lg:mb-0 lg:w-1/3">
              <div className="flex grow basis-0 items-center justify-center lg:justify-start">
                <div className="mr-2 text-6xl text-white">
                  <Image
                    src="/logo.svg"
                    width={80}
                    height={80}
                    alt="logo"
                    className="h-10 w-10"
                  />
                </div>
                <div className="text-xl font-bold text-white">
                  Galaxy Adventures
                </div>
              </div>
              <p className="mx-auto mb-10 mt-4 text-center leading-loose text-gray-400 sm:w-[22rem] lg:mx-0 lg:w-[20rem] lg:text-left xl:w-[24rem]">
                For an unforgettable, once-in-a-lifetime experience, start
                planning your next space adventure with us
                <Link
                  href="/"
                  target="_blank"
                  className="ml-1.5 text-gray-100 hover:text-gray-300"
                  aria-label="DarkAdmin"
                >
                  today.
                </Link>
              </p>
              <div className="mx-auto w-36 lg:mx-0">
                <a
                  className="bg-customDarkBg2 custom-border-gray  mr-2 inline-block h-10 w-10 rounded-xl  p-2 hover:bg-gray-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    fill="white"
                    className="h-5 w-5"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
                <a
                  className="bg-customDarkBg2 custom-border-gray  mr-2 inline-block h-10 w-10 rounded-xl  p-2 hover:bg-gray-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="white"
                    className="h-5 w-5"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
                <a
                  className="bg-customDarkBg2 custom-border-gray  mr-2 inline-block h-10 w-10 rounded-xl  p-2 hover:bg-gray-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="white"
                    className="h-5 w-5"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="hidden w-full  flex-wrap justify-between lg:flex lg:w-2/3 lg:pl-16">
              <div className="mb-16 w-full md:mb-0 md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Main Links
                </h3>
                <ul>
                  {mainLinks.map((link, index) => (
                    <li key={index} className="mb-4">
                      <Link
                        className="text-gray-400 hover:text-gray-300"
                        href={link.href}
                        aria-label={link.label}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-16 w-full md:mb-0 md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Plan Your Trip
                </h3>
                <ul>
                  {planningLinks.map((link, index) => (
                    <li key={index} className="mb-4">
                      <Link
                        className="text-gray-400 hover:text-gray-300"
                        href={link.href}
                        aria-label={link.label}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">Company</h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="#"
                      aria-label=""
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="#"
                      aria-label=""
                    >
                      Jobs
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="#"
                      aria-label=""
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="#"
                      aria-label=""
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-16 hidden border-t border-[rgb(255,255,255,0.2)] pt-12 text-sm text-gray-400 lg:block lg:text-center">
            © 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
