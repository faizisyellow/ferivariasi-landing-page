import Box from "@/components/box";
import Image from "next/image";
import React from "react";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
  return (
    <Box title="Tentang Kami" id="TentangKami">
      <div className="flex w-full justify-center gap-x-8 flex-wrap sm:flex-nowrap">
        <p id="about" className="w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque minus
          voluptate earum eaque dolore voluptas cumque iure facere rem aliquid,
          magnam nihil omnis quis laboriosam incidunt debitis harum! Nostrum, at
          cumque eaque fugit qui et mollitia consequuntur minus pariatur a
          doloribus totam omnis molestiae quisquam commodi atque. Esse quas
          recusandae blanditiis, nisi libero dolores reprehenderit praesentium
          deleniti vel mollitia magnam accusamus possimus eum hic eaque id
          laudantium optio, explicabo voluptates impedit ipsam ipsum incidunt
          pariatur. Voluptas iste odio voluptate mollitia consequatur, numquam
          sequi, illo sed, cupiditate iusto qui similique! Possimus
          necessitatibus maxime consequatur soluta, quo ipsam ea nemo quam.
          Perspiciatis?
        </p>

        {/* The image should have w/h when in mobile */}
        <div className="relative w-full h-96">
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
  );
};

export default AboutUs;
