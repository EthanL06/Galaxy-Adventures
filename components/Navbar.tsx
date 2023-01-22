import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"} passHref legacyBehavior>
        <a>
          <Image src={"/logo.svg"} width={80} height={80} />
        </a>
      </Link>
    </nav>
  );
};
export default Navbar;
