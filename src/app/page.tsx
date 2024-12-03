import Links from "@/components/links";
import { links } from "@/components/links/data";
import Navbar from "@/containers/navbar";

export default function Home() {
  return (
    <>
      <Navbar>
        <h1>Navbar</h1>
        <Links items={links} />
      </Navbar>
    </>
  );
}
