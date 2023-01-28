import { Footer, Navbar } from "@/components/global";
import { useRouter } from "next/router";

type Props = {};
const Destination = (props: Props) => {
  const router = useRouter();
  const { destination } = router.query;

  return (
    <>
      <Navbar />
      {destination}
      <Footer />
    </>
  );
};
export default Destination;
