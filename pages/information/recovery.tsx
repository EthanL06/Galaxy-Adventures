type Props = {};
import { Navbar, Footer, Breadcrumbs } from "@/components/global";

const Recovery = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen w-full max-w-3xl justify-center px-4 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <article className="prose prose-sm prose-invert mx-auto prose-a:no-underline sm:prose-base lg:prose-lg 2xl:prose-2xl xl:prose-xl">
          <div className="">
            <Breadcrumbs />
          </div>
          <h1>Recovery</h1>
          <p>
            The return of our space travelers from their missions is a top
            priority for our agency. Upon re-entry, travelers will be carefully
            monitored and assessed by our medical team to ensure their health
            and well-being. This will include physical evaluations, monitoring
            of vital signs, and any necessary medical interventions. Our agency
            has established protocols and procedures to address any potential
            issues that may arise during the recovery process. We understand the
            importance of providing our travelers with a safe and comfortable
            transition back to Earth, and we will do everything in our power to
            make that a reality. With state-of-the-art equipment and highly
            trained professionals, our travelers can feel confident and secure
            in the knowledge that they are in good hands during their recovery
            process.
          </p>

          <hr />

          <h2>Parachute ($30,000)</h2>
          <p>
            The parachute is a traditional and proven method of returning
            travelers safely to the Earth. Upon re-entry, travelers will utilize
            a parachute system that will safely lower them to the ground. This
            package is ideal for those who prefer a more classic approach to
            space travel and value the safety and reliability of proven
            technology.
          </p>

          <ul>
            <li>
              <strong>Safe and reliable landing method</strong>
            </li>

            <li>
              <strong>Familiar and well-understood technology</strong>
            </li>

            <li>
              <strong>Minimal training required</strong>
            </li>
          </ul>

          <hr />

          <h2>Vertical Landing ($100,000)</h2>
          <p>
            Vertical Landing is a cutting-edge method of returning travelers to
            the Earth that utilizes advanced landing technology. Upon re-entry,
            travelers will land vertically on a landing pad, providing a unique
            and exciting experience. This package is ideal for thrill-seekers
            who want to experience the latest in space travel technology.
          </p>

          <ul>
            <li>
              <strong>Exciting and unique landing experience</strong>
            </li>

            <li>
              <strong>Utilizes cutting-edge technology</strong>
            </li>

            <li>
              <strong>
                Offers a faster return time compared to other methods
              </strong>
            </li>
          </ul>

          <hr />

          <h2>Aerial Recovery ($200,000)</h2>
          <p>
            The Aerial Recovery package offers a unique and thrilling method of
            returning travelers to the Earth. Upon re-entry, travelers will be
            picked up in the air by an aircraft, which will then transport them
            back to the surface. This package is perfect for travelers who want
            to experience the excitement of flying and who are looking for a
            one-of-a-kind travel experience.
          </p>

          <ul>
            <li>
              <strong>
                Features an exciting in-air pickup and transport back to the
                surface
              </strong>
            </li>

            <li>
              <strong>Offers a unique and thrilling travel experience</strong>
            </li>

            <li>
              <strong>
                Provides a more dynamic and adventurous method of returning from
                space
              </strong>
            </li>
          </ul>
        </article>
      </div>
      <Footer />
    </>
  );
};
export default Recovery;
