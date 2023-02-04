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
      href: "/information",
      label: "Information",
    },
    {
      href: "/references",
      label: "References",
    },
  ];

  const planningLinks = [
    {
      href: "/destinations",
      label: "Destinations",
    },
    {
      href: "/information/training",
      label: "Training",
    },
    {
      href: "/information/vehicles",
      label: "Vehicles",
    },
    {
      href: "/information/recovery",
      label: "Recovery",
    },
  ];

  return (
    <footer>
      <div className="bg-[#1F2023] pt-10 lg:pt-20 lg:pb-12 ">
        <div className="container mx-auto w-4/5 px-4 md:w-11/12 lg:w-10/12 2xl:w-2/3 xl:w-4/5">
          <div className="flex flex-wrap">
            <div className="mb-16 w-full lg:mb-0 lg:w-1/3">
              <div className="flex grow basis-0 items-center justify-center lg:justify-start">
                <div className="mr-2 text-6xl text-white">
                  <Image
                    src="/galaxy-logo.svg"
                    width={80}
                    height={80}
                    alt="logo"
                    className="h-10 w-10"
                  />
                </div>
                <div className="font-serif text-xl font-bold text-white">
                  GALAXY ADVENTURES
                </div>
              </div>
              <p className="mx-auto mb-10 mt-4 text-center leading-loose text-gray-400 sm:w-[22rem] lg:mx-0 lg:w-[20rem] lg:text-left xl:w-[24rem]">
                For an unforgettable, once-in-a-lifetime experience, start
                planning your next space adventure with us
                <Link
                  href="/destinations"
                  className="ml-1.5 text-gray-100 hover:text-gray-300"
                >
                  today.
                </Link>
              </p>
            </div>
            <div className="hidden w-full  flex-wrap justify-end gap-x-48 lg:flex lg:w-2/3 lg:pl-16">
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
