type Props = {};
import { Navbar, Footer, Breadcrumbs } from "@/components/global";
import Link from "next/link";

const Sitemap = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen w-full max-w-3xl justify-center px-4 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <article className="prose prose-sm prose-invert mx-auto sm:prose-base lg:prose-lg xl:prose-xl">
          <div className="">
            <Breadcrumbs />
          </div>
          <h1>Sitemap</h1>
          <p>
            A collection of all the pages on our website aggregated into one
            convenient place. This is a great place to start if you&apos;re
            looking for something specific.
          </p>

          <hr />

          <h2>Pages</h2>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link> (includes list of
              technologies/sources used to build the site)
            </li>

            <li>
              <Link href={"/book"}>Book</Link> (must choose a destination first)
            </li>

            <li>
              <Link href={"/confirm"}>Confirm</Link> (payment/booking
              confirmation)
            </li>
            <li>
              <Link href={"/destinations"}>Destinations</Link>
            </li>
            <li>
              <Link href={"/packages"}>Packages</Link>
              <ul>
                <li>
                  <Link href={"/packages/training"}>Training</Link>
                </li>
                <li>
                  <Link href={"/packages/vehicles"}>Vehicle</Link>
                </li>
                <li>
                  <Link href={"/packages/recovery"}>Recovery</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href={"/sitemap"}>Sitemap</Link>
            </li>
          </ul>
        </article>
      </div>
      <Footer />
    </>
  );
};
export default Sitemap;
