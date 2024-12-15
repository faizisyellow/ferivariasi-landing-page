import AboutUs from "@/containers/aboutUs";
import Navbar from "@/containers/navbar";
import OurServices from "@/containers/ourServices";
import Thumbnail from "@/containers/thumbnail";

export default function Home() {
  return (
    <>
      <Navbar />
      <Thumbnail />
      <AboutUs />
      <OurServices />
    </>
  );
}
