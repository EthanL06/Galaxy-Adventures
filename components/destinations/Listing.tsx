import { Destination } from "@/types/destination";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button, Breadcrumbs } from "../global";

type Props = {
  destination: Destination;
};
const Listing = ({ destination }: Props) => {
  const router = useRouter();

  if (!destination) {
    return (
      <div className="min-h-screen w-full p-8 ">
        <div className="flex w-full flex-col items-center justify-center gap-y-2">
          <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
      </div>
    );
  }

  const { title, distance, duration, cost, image, overview } = destination;

  return (
    <div className="min-h-screen  px-6 pb-16 lg:px-12 lgg:px-24 xl:px-52">
      <Breadcrumbs />
      <div className="grid grid-cols-4 grid-rows-2 items-center gap-2 sm:gap-4 lg:gap-8">
        <img
          className="col-span-2 row-span-2 h-full w-full rounded-tl-lg rounded-bl-lg object-cover"
          src={image}
        />
        <img
          className="col-span-1 row-span-1 h-auto w-full  object-cover"
          src={image}
        />
        <img
          className="col-span-1 row-span-1 h-auto w-full  rounded-tr-lg object-cover"
          src={image}
        />
        <img
          className="col-span-1 row-span-1 h-auto w-full  object-cover"
          src={image}
        />
        <img
          className="col-span-1 row-span-1 h-auto w-full rounded-br-lg object-cover"
          src={image}
        />
      </div>

      <div className="relative mt-8 flex grid-cols-2 flex-col gap-8 md:grid">
        <div className="flex flex-col gap-y-4">
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="mt-1 text-lg text-gray-400">
              {distance} away • {duration} travel
            </p>
          </div>

          <hr id="overview" className="rounded-full border-gray-400 " />

          <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:grid-cols-4 sm:grid-rows-1 lg:gap-4 xl:gap-12">
            <button
              onClick={() => {
                const element = document.getElementById("overview");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center rounded bg-dark-background p-4 text-base font-semibold lg:text-lg "
            >
              Overview
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("amenities");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center rounded bg-dark-background p-4 text-base font-semibold lg:text-lg"
            >
              Amenities
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("activities");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center rounded bg-dark-background p-4 text-base font-semibold lg:text-lg"
            >
              Activities
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("safety");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center rounded bg-dark-background p-4 text-base font-semibold lg:text-lg"
            >
              Safety
            </button>
          </div>

          <div className="text-gray-400">{overview}</div>

          <hr id="amenities" className="my-4 rounded-full border-gray-400" />

          <div className="flex flex-col gap-y-4">
            <div>
              <h2 className="text-3xl font-bold">Amenities</h2>
              <p className="mt-1 text-lg font-semibold text-gray-400">
                What this place offers.
              </p>
            </div>

            <div className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              quod, explicabo sequi repellendus facilis, cumque obcaecati,
              maiores dignissimos quisquam voluptatem eveniet accusantium fuga
              recusandae sit rem? Voluptatibus deserunt aut excepturi odio qui
              aliquam quidem cupiditate iusto obcaecati totam. Necessitatibus
              sint reprehenderit vel! Ipsam, deleniti quam nulla perspiciatis
              minus perferendis libero?
            </div>
          </div>

          <hr id="activities" className="my-4 rounded-full border-gray-400" />

          <div className="flex flex-col gap-y-4">
            <div>
              <h2 className="text-3xl font-bold">Activites</h2>
              <p className="mt-1 text-lg font-semibold text-gray-400">
                Things to do.
              </p>
            </div>

            <div className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              quod, explicabo sequi repellendus facilis, cumque obcaecati,
              maiores dignissimos quisquam voluptatem eveniet accusantium fuga
              recusandae sit rem? Voluptatibus deserunt aut excepturi odio qui
              aliquam quidem cupiditate iusto obcaecati totam. Necessitatibus
              sint reprehenderit vel! Ipsam, deleniti quam nulla perspiciatis
              minus perferendis libero?
            </div>
          </div>

          <hr id="safety" className="my-4 rounded-full border-gray-400" />

          <div className="flex flex-col gap-y-4">
            <div>
              <h2 className="text-3xl font-bold">Safety</h2>
              <p className="mt-1 text-lg font-semibold text-gray-400">
                What we do to keep you safe.
              </p>
            </div>

            <div className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              quod, explicabo sequi repellendus facilis, cumque obcaecati,
              maiores dignissimos quisquam voluptatem eveniet accusantium fuga
              recusandae sit rem? Voluptatibus deserunt aut excepturi odio qui
              aliquam quidem cupiditate iusto obcaecati totam. Necessitatibus
              sint reprehenderit vel! Ipsam, deleniti quam nulla perspiciatis
              minus perferendis libero?
            </div>
          </div>

          <hr className="my-4 rounded-full border-gray-400" />

          <div className="flex flex-col gap-y-4">
            <div>
              <h2 className="text-3xl font-bold">More Destinations</h2>
              <p className="mt-1 text-lg font-semibold text-gray-400">
                Similar destinations you would love.
              </p>
            </div>

            <div className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              quod, explicabo sequi repellendus facilis, cumque obcaecati,
              maiores dignissimos quisquam voluptatem eveniet accusantium fuga
              recusandae sit rem? Voluptatibus deserunt aut excepturi odio qui
              aliquam quidem cupiditate iusto obcaecati totam. Necessitatibus
              sint reprehenderit vel! Ipsam, deleniti quam nulla perspiciatis
              minus perferendis libero?
            </div>
          </div>
        </div>

        <div>
          <div className="relative flex flex-col gap-y-4 rounded-lg bg-dark-background p-7 md:top-16">
            <h2>
              <span className="text-4xl font-bold">{cost}</span>{" "}
              <span className="text-lg font-medium text-gray-400">
                roundtrip
              </span>
            </h2>

            <div className="grid grid-cols-1 grid-rows-3 rounded-lg xsm:grid-cols-2 xsm:grid-rows-2 ">
              <div className="col-span-1 row-span-1 flex items-center justify-between rounded-tl-lg rounded-tr-lg border border-gray-400 px-3 py-2 xsm:rounded-tr-none">
                <div>
                  <div className="text-sm font-semibold text-gray-400">
                    DEPARTURE
                  </div>
                  <div>1/26/2023</div>
                </div>

                <button className="flex items-center justify-center rounded-full transition-transform hover:bg-background">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="p-3 text-xl text-white transition-transform active:scale-90"
                  />
                </button>
              </div>
              <div className="col-span-1 row-span-1 flex items-center justify-between border border-gray-400 px-3 py-2 xsm:rounded-tr-lg xsm:border-l-0">
                <div>
                  <div className="text-sm font-semibold text-gray-400">
                    RETURN
                  </div>
                  <div>2/14/2023</div>
                </div>

                <button className="flex items-center justify-center rounded-full transition-transform hover:bg-background">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="p-3 text-xl text-white transition-transform active:scale-90"
                  />
                </button>
              </div>
              <div className="col-span-1 row-span-1 flex justify-between rounded-b-lg border border-t-0 border-gray-400 px-3 py-2 xsm:col-span-2 xsm:row-span-2">
                <div>
                  <div className="text-sm font-semibold text-gray-400">
                    TICKETS
                  </div>
                  <div>1 ticket</div>
                </div>

                <button className="flex items-center justify-center rounded-full transition-transform hover:bg-background">
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="p-3 text-xl text-white transition-transform active:scale-90"
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-y-6">
              <div className="mt-4 flex flex-col gap-y-2">
                <h2 className="text-center text-2xl font-bold xsm:text-left">
                  SELECT TRAINING PACKAGE
                </h2>

                <div className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
                  <div className="h-24 w-full rounded-lg bg-gray-400 lg:h-32 lg:w-32 lggg:h-40 lggg:w-40  xxl:h-48 xxl:w-48"></div>
                  <div className="h-24 w-full rounded-lg bg-gray-400 lg:h-32 lg:w-32 lggg:h-40 lggg:w-40 xxl:h-48 xxl:w-48"></div>
                  <div className="h-24 w-full rounded-lg bg-gray-400 lg:h-32 lg:w-32 lggg:h-40 lggg:w-40 xxl:h-48 xxl:w-48"></div>
                </div>
              </div>

              <div className="flex flex-col gap-y-2">
                <h2 className="text-center text-2xl font-bold xsm:text-left">
                  SELECT VEHICLE
                </h2>

                <div className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
                  <div className="h-24 w-full rounded-lg bg-gray-400 lg:h-32 lg:w-32 lggg:h-40 lggg:w-40  xxl:h-48 xxl:w-48"></div>
                  <div className="h-24 w-full rounded-lg bg-gray-400 lg:h-32 lg:w-32 lggg:h-40 lggg:w-40 xxl:h-48 xxl:w-48"></div>
                  <div className="h-24 w-full rounded-lg bg-gray-400 lg:h-32 lg:w-32 lggg:h-40 lggg:w-40 xxl:h-48 xxl:w-48"></div>
                </div>
              </div>

              <div className="flex flex-col gap-y-2">
                <h2 className="text-center text-2xl font-bold xsm:text-left">
                  SELECT RECOVERY STRATEGY
                </h2>

                <div className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
                  <div className="h-24 w-full rounded-lg bg-gray-400 lg:h-32 lg:w-32 lggg:h-40 lggg:w-40  xxl:h-48 xxl:w-48"></div>
                  <div className="h-24 w-full rounded-lg bg-gray-400 lg:h-32 lg:w-32 lggg:h-40 lggg:w-40 xxl:h-48 xxl:w-48"></div>
                  <div className="h-24 w-full rounded-lg bg-gray-400 lg:h-32 lg:w-32 lggg:h-40 lggg:w-40 xxl:h-48 xxl:w-48"></div>
                </div>
              </div>
            </div>

            <Button text="Book Now" className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Listing;
