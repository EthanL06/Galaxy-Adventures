type Props = {};
import { Navbar, Footer, Breadcrumbs, Button } from "@/components/global";
import { useRouter } from "next/router";

const Recovery = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen w-full max-w-3xl justify-center px-4 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <article className="prose prose-sm prose-invert mx-auto prose-a:no-underline sm:prose-base lg:prose-lg xl:prose-xl">
          <div className="">
            <Breadcrumbs />
          </div>
          <h1>Food</h1>
          <p>
            At Galaxy Adventures, we understand that the culinary experience is
            an integral part of any vacation, even in space. We are committed to
            providing our travelers with a wide range of delectable food
            packages designed specifically for interstellar journeys. Our
            carefully curated menus offer a variety of options to suit different
            tastes and dietary preferences, ensuring that our travelers can
            enjoy their meals while exploring the wonders of the universe.
            Choose from our enticing food packages listed below:
          </p>

          <hr />

          <h2>Basic Food Package ($500)</h2>
          <p>
            The Basic Food Package provides travelers with simple yet satisfying
            meals during their interstellar vacation. This package includes:
            Nutritious Space Meals - Our experienced chefs have crafted a
            selection of nutritious and delicious space meals that are specially
            prepared to meet the dietary needs of travelers in zero-gravity
            environments. These meals are vacuum-sealed and carefully packaged
            to ensure freshness and quality.
          </p>

          <ul>
            <li>
              <strong>Nutritious Space Meals</strong>
              <p>
                Our experienced chefs have crafted a selection of nutritious and
                delicious space meals that are specially prepared to meet the
                dietary needs of travelers in zero-gravity environments. These
                meals are vacuum-sealed and carefully packaged to ensure
                freshness and quality.
              </p>
            </li>

            <li>
              <strong>Variety of Cuisine</strong>
              <p>
                Travelers will enjoy a variety of cuisine options, including
                international dishes, comfort foods, and vegetarian or vegan
                alternatives. Our menu is designed to cater to different dietary
                preferences and cultural tastes.
              </p>
            </li>

            <li>
              <strong>Daily Snacks</strong>
              <p>
                In addition to the main meals, travelers will receive a daily
                assortment of snacks and treats to satisfy their cravings and
                keep them energized throughout their journey.
              </p>
            </li>
          </ul>

          <hr />

          <h2>Premium Food Package ($1,000)</h2>
          <p>
            The Premium Food Package offers a more diverse and gourmet dining
            experience for travelers seeking a higher level of culinary
            enjoyment. In addition to the Basic package, this package includes:
          </p>

          <ul>
            <li>
              <strong>Enhanced Menu Selection</strong>
              <p>
                Travelers will have access to an expanded menu with a wider
                range of gourmet options, including fine dining choices and
                signature dishes prepared by renowned space chefs. The menu will
                incorporate premium ingredients and culinary techniques to
                create exquisite flavors and textures.
              </p>
            </li>

            <li>
              <strong>Customizable Preferences</strong>
              <p>
                Travelers can personalize their meals by selecting their
                preferred dishes from the menu in advance. Our culinary team
                will accommodate specific dietary requirements and allergies to
                ensure a tailored dining experience.
              </p>
            </li>

            <li>
              <strong>Specialty Beverages</strong>
              <p>
                Travelers will have the opportunity to indulge in a selection of
                specialty beverages, including exotic space cocktails, premium
                wines, and unique interstellar brews, adding a touch of luxury
                to their dining experience.
              </p>
            </li>
          </ul>

          <hr />

          <h2>Deluxe Food Package ($2,500)</h2>
          <p>
            The Deluxe Food Package is the epitome of culinary excellence,
            offering a truly luxurious dining experience for discerning
            travelers. This package includes everything offered in the Basic and
            Premium packages, as well as:
          </p>

          <ul>
            <li>
              <strong>Private Chef Service</strong>
              <p>
                Travelers will have a dedicated private chef who will prepare
                exquisite meals exclusively for them, taking into account their
                personal preferences and dietary restrictions. This personalized
                service ensures that every meal is a bespoke dining experience.
              </p>
            </li>

            <li>
              <strong>Intergalactic Tastings</strong>
              <p>
                Travelers will embark on a gastronomic journey through the
                cosmos, sampling unique flavors and delicacies from different
                interstellar destinations. Our culinary team will showcase the
                finest intergalactic ingredients and showcase the diverse
                culinary traditions of the universe.
              </p>
            </li>

            <li>
              <strong>Celebratory Feasts</strong>
              <p>
                On special occasions or milestones during the vacation,
                travelers will be treated to lavish celebratory feasts,
                featuring extraordinary dishes and delightful surprises to
                create unforgettable memories.
              </p>
            </li>
          </ul>

          <button
            onClick={() => {
              router.back();
            }}
            className="flex items-center gap-x-2 text-gray-400 transition-colors hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <div>Back</div>
          </button>
        </article>
      </div>
      <Footer />
    </>
  );
};
export default Recovery;
