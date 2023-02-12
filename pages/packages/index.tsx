type Props = {};
import { Navbar, Footer, Breadcrumbs } from "@/components/global";
import Link from "next/link";

const Packages = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen w-full max-w-3xl justify-center px-4 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <article className="prose prose-sm prose-invert mx-auto sm:prose-base lg:prose-lg xl:prose-xl">
          <div className="">
            <Breadcrumbs />
          </div>
          <h1>Packages</h1>
          <p>
            At Galaxy Adventures, we understand that every traveler&apos;s needs
            and preferences are different, which is why we offer a range of
            packages to choose from. Whether you&apos;re looking for a basic
            training experience, a premium method of recovery, or a luxury
            travel experience, we have something to suit your needs. Our
            packages are designed to provide a comprehensive and customizable
            space travel experience, and they cover everything from training and
            transportation to recovery. Our team is dedicated to helping
            travelers make informed decisions and select the right package for
            their unique needs and preferences, and we&apos;re here to answer
            any questions you may have. Browse our packages today and start
            planning your once-in-a-lifetime journey to space.
          </p>

          <hr />

          <h2>Training Packages</h2>
          <p>
            Learn more about our training packages{" "}
            <Link className="underline" href={"/packages/training"}>
              here.
            </Link>
          </p>

          <hr />

          <h2>Vehicle Packages</h2>
          <p>
            Learn more about our vehicle packages{" "}
            <Link className="underline" href={"/packages/vehicles"}>
              here.
            </Link>
          </p>

          <hr />

          <h2>Recovery Packages</h2>
          <p>
            Learn more about our recovery packages{" "}
            <Link className="underline" href={"/packages/recovery"}>
              here.
            </Link>
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
};
export default Packages;
