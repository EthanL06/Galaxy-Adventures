import { Listing } from "@/components/destinations";
import { Footer, Navbar } from "@/components/global";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {};
const Destination = (props: Props) => {
  const router = useRouter();
  const { destination } = router.query;
  const { data, error, isLoading } = useSWR(
    `/api/destinations?destination=${destination}`,
    fetcher
  );

  return (
    <>
      <Navbar />
      <Listing destination={data} />
      <Footer />
    </>
  );
};
export default Destination;
