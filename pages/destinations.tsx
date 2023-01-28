import { Navbar, Footer } from "@/components/global";
import { Card, Search, List } from "@/components/destinations";
type Props = {};
const Destinations = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-y-8">
        <div className="text-4xl font-bold">
          Search <span className="text-dark-accent">Destinations</span>
        </div>

        <Search />
        <List />
      </div>
      <Footer />
    </>
  );
};
export default Destinations;
