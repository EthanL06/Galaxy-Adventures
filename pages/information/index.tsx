type Props = {};
import { Navbar, Footer, Breadcrumbs } from "@/components/global";
import Link from "next/link";

const Information = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen w-full max-w-3xl justify-center px-4 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <article className="prose prose-sm prose-invert mx-auto sm:prose-base lg:prose-lg 2xl:prose-2xl xl:prose-xl">
          <div className="">
            <Breadcrumbs />
          </div>
          <h1>Information</h1>
          <p>
            Our goal at Galaxy Adventures is to provide travelers with an
            unparalleled and safe space travel experience. Our experienced team
            of astronauts, engineers, and scientists work together to ensure
            that every aspect of the journey, from training to recovery, is
            seamless and enjoyable. We offer a range of packages and options to
            accommodate different needs and preferences, so that every traveler
            can have a customized and memorable experience. We believe that
            space travel is a unique opportunity to expand one&apos;s horizons,
            both literally and figuratively, and we are honored to be a part of
            making that dream a reality for our customers.
          </p>

          <hr />

          <h2>Training Packages</h2>
          <p>
            Learn more about our training packages{" "}
            <Link className="underline" href={"/information/training"}>
              here.
            </Link>
          </p>

          <hr />

          <h2>Vehicle Packages</h2>
          <p>
            Learn more about our vehicle packages{" "}
            <Link className="underline" href={"/information/vehicles"}>
              here.
            </Link>
          </p>

          <hr />

          <h2>Recovery Packages</h2>
          <p>
            Learn more about our recovery packages{" "}
            <Link className="underline" href={"/information/recovery"}>
              here.
            </Link>
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
};
export default Information;
