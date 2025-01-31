import Aboutus from "./components/Aboutus";
import ClientReview from "./components/ClientReview";
import Services from "./components/Services";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
    <Slider />
    <Services/>
    <Aboutus/>
    <ClientReview/>
    </>
  );
}
