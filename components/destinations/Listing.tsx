import { Destination } from "@/types/destination";
import { useRouter } from "next/router";
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

  const { title, distance, duration, cost, image } = destination;

  return (
    <div className="min-h-screen px-52 pb-16">
      <div className="grid grid-cols-4 grid-rows-2 items-center gap-8">
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

      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="mt-1 text-lg text-gray-400">
              {distance} away • {duration} travel
            </p>
          </div>

          <hr id="overview" className="rounded-full border-gray-400 " />

          <div className="grid grid-cols-4 gap-x-12">
            <button
              onClick={() => {
                const element = document.getElementById("overview");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center rounded bg-dark-background p-4 text-lg font-semibold"
            >
              Overview
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("amenities");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center rounded bg-dark-background p-4 text-lg font-semibold"
            >
              Amenities
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("activites");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center rounded bg-dark-background p-4 text-lg font-semibold"
            >
              Activities
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("safety");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center rounded bg-dark-background p-4 text-lg font-semibold"
            >
              Safety
            </button>
          </div>

          <div className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quod,
            explicabo sequi repellendus facilis, cumque obcaecati, maiores
            dignissimos quisquam voluptatem eveniet accusantium fuga recusandae
            sit rem? Voluptatibus deserunt aut excepturi odio qui aliquam quidem
            cupiditate iusto obcaecati totam. Necessitatibus sint reprehenderit
            vel! Ipsam, deleniti quam nulla perspiciatis minus perferendis
            libero?
          </div>

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

          <hr className="my-4 rounded-full border-gray-400" />

          <div id="activities" className="flex flex-col gap-y-4">
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

        <div className="relative top-[6rem]">
          <div className="sticky top-16 flex flex-col gap-y-4 rounded-lg bg-dark-background p-7">
            <h2>
              <span className="text-4xl font-bold">{cost}</span>{" "}
              <span className="text-lg font-medium text-gray-400">
                roundtrip
              </span>
            </h2>

            <div className="grid grid-cols-2 grid-rows-2 rounded-lg border-gray-400">
              <div className="cols-span-1 row-span-1 border">test</div>
              <div className="cols-span-1 row-span-1 border border-l-0">
                test
              </div>
              <div className="cols-span-2 row-span-1 border border-t-0">
                {" "}
                testtesttesttesttesttesttesttesttesttesttesttest
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Listing;
