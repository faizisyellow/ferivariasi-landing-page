import HeroSection from "@/containers/heroSection";
import Navbar from "@/containers/navbar";
import Thumbnail from "@/containers/thumbnail";

export default function Home() {
  return (
    <>
      <HeroSection>
        <Navbar />
        <Thumbnail />
      </HeroSection>
      <p id="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque minus
        voluptate earum eaque dolore voluptas cumque iure facere rem aliquid,
        magnam nihil omnis quis laboriosam incidunt debitis harum! Nostrum, at
        cumque eaque fugit qui et mollitia consequuntur minus pariatur a
        doloribus totam omnis molestiae quisquam commodi atque. Esse quas
        recusandae blanditiis, nisi libero dolores reprehenderit praesentium
        deleniti vel mollitia magnam accusamus possimus eum hic eaque id
        laudantium optio, explicabo voluptates impedit ipsam ipsum incidunt
        pariatur. Voluptas iste odio voluptate mollitia consequatur, numquam
        sequi, illo sed, cupiditate iusto qui similique! Possimus necessitatibus
        maxime consequatur soluta, quo ipsam ea nemo quam. Perspiciatis?
      </p>
    </>
  );
}
