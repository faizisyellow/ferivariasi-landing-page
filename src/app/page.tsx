import Box from "@/components/box";
import HeroSection from "@/containers/heroSection";
import Navbar from "@/containers/navbar";
import Thumbnail from "@/containers/thumbnail";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection>
        <Navbar />
        <Thumbnail />
      </HeroSection>
      <Box title="Tentang Kami" id="TentangKami">
        <div className="flex w-full justify-center gap-x-8 flex-wrap sm:flex-nowrap">
          <p id="about" className="w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            minus voluptate earum eaque dolore voluptas cumque iure facere rem
            aliquid, magnam nihil omnis quis laboriosam incidunt debitis harum!
            Nostrum, at cumque eaque fugit qui et mollitia consequuntur minus
            pariatur a doloribus totam omnis molestiae quisquam commodi atque.
            Esse quas recusandae blanditiis, nisi libero dolores reprehenderit
            praesentium deleniti vel mollitia magnam accusamus possimus eum hic
            eaque id laudantium optio, explicabo voluptates impedit ipsam ipsum
            incidunt pariatur. Voluptas iste odio voluptate mollitia
            consequatur, numquam sequi, illo sed, cupiditate iusto qui
            similique! Possimus necessitatibus maxime consequatur soluta, quo
            ipsam ea nemo quam. Perspiciatis?
          </p>
          <div className="relative w-full ">
            <Image
              src="/about.png"
              alt="About"
              layout="fill"
              objectFit="cover"
              className="sm:w-0 w-full static mt-10 sm:mt-0"
            />
          </div>
        </div>
      </Box>
      <Box
        id="LayananKami"
        title="Layanan Kami"
        backgroundColor="bg-primary text-white"
        overflowX
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere at
          blanditiis mollitia fuga perspiciatis id sint laborum minus, repellat
          expedita. Aut, sit nemo porro accusantium eum animi doloremque
          necessitatibus iste officiis cumque corrupti laudantium debitis sequi
          doloribus atque quos quidem fugit impedit temporibus itaque. Eos,
          earum! Eum sunt soluta voluptatum alias iusto. Voluptatem odio natus,
          corrupti doloremque dolor mollitia eveniet modi vel beatae! Ea
          repellat debitis facere quos, quia animi. Doloribus, cum. Ea debitis
          facilis dolore in cum corrupti ipsum tempora. Doloribus hic omnis cum.
          Deserunt deleniti, nisi dolore consequatur culpa sequi est laborum
          cumque dolorum minima quibusdam unde? Aspernatur?
        </p>
      </Box>
    </>
  );
}
