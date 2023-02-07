import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
const Navbar = ({ showLinks = true }: { showLinks?: boolean }) => {
  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/destinations",
      label: "Destinations",
    },
    {
      href: "/packages",
      label: "Packages",
    },
    {
      href: "/sitemap",
      label: "Sitemap",
    },
    {
      href: "/references",
      label: "References",
    },
  ];

  const [scrollDir, setScrollDir] = useState("up");
  const [y, setY] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const threshold = 100;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      setY(scrollY);

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 hidden items-center justify-between gap-6 px-8 py-4 transition-all duration-700 sm:flex sm:flex-col lg:flex-row ${
          scrollDir == "down"
            ? "-translate-y-[140px] lg:-translate-y-[80px]"
            : "translate-y-0"
        } ${y > 100 ? "bg-dark-background" : "bg-none"}`}
      >
        <div className="flex items-center">
          <Link href={"/"} passHref legacyBehavior>
            <a>
              <Image
                src={"/galaxy-logo.svg"}
                width={40}
                height={40}
                alt="logo"
              />
            </a>
          </Link>
        </div>
        {showLinks && (
          <>
            <ul className="flex gap-x-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} passHref legacyBehavior>
                    <a className="hidden rounded-md px-3 py-2 font-semibold text-gray-300 hover:cursor-pointer hover:bg-gray-700 hover:text-white sm:block">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </nav>

      <nav
        className={`sticky top-0 z-50 flex flex-col items-center justify-between bg-dark-background px-6 py-4 transition-transform duration-700 
        sm:hidden`}
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <Link href={"/"} passHref legacyBehavior>
              <a>
                <Image
                  src={"/galaxy-logo.svg"}
                  width={40}
                  height={40}
                  alt="logo"
                />
              </a>
            </Link>
          </div>

          <button
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
            }}
          >
            {!showMobileMenu ? (
              <FontAwesomeIcon icon={faBars} className="text-2xl text-white" />
            ) : (
              <FontAwesomeIcon icon={faXmark} className="text-2xl text-white" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {showLinks && showMobileMenu && (
            <motion.ul
              initial={{ opacity: 1, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 1, height: 0 }}
              className="flex flex-col items-center gap-6 overflow-hidden"
            >
              {links.map((link) => (
                <li className="last:mb-4" key={link.href}>
                  <Link href={link.href} passHref legacyBehavior>
                    <a className="rounded-md px-3 py-2 text-center font-semibold text-gray-300 hover:bg-gray-700 hover:text-white sm:block">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
export default Navbar;
