import Image from "next/image";
import Link from "next/link";

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
  ];

  return (
    <nav className="flex items-center justify-between p-12">
      <Link href={"/"} passHref legacyBehavior>
        <a>
          <Image src={"/logo.svg"} width={80} height={80} alt="logo" />
        </a>
      </Link>

      {showLinks && (
        <ul className="flex gap-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} passHref legacyBehavior>
                <a className="text-lg font-bold text-white">{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
