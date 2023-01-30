import { Listing } from "@/components/destinations";
import { Footer } from "@/components/global";
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
    <div className="xl:pt-4">
      <Listing destination={data} />
      <Footer />
    </div>
  );
};
export default Destination;
