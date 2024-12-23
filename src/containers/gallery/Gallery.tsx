import Box from "@/components/box";
import Image from "next/image";
import React from "react";

interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = (props) => {
  return (
    <Box title="Galeri">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        <Image
          src={"/about.png"}
          alt="about"
          width={400}
          height={200}
        />
        <Image
          src={"/about.png"}
          alt="about"
          width={400}
          height={200}
        />
        <Image
          src={"/about.png"}
          alt="about"
          width={400}
          height={200}
        />
        <Image
          src={"/about.png"}
          alt="about"
          width={400}
          height={200}
        />
        <Image
          src={"/about.png"}
          alt="about"
          width={400}
          height={200}
        />
        <Image
          src={"/about.png"}
          alt="about"
          width={400}
          height={200}
        />
        <Image
          src={"/about.png"}
          alt="about"
          width={400}
          height={200}
        />
        <Image
          src={"/about.png"}
          alt="about"
          width={400}
          height={200}
        />
      </div>
    </Box>
  );
};

export default Gallery;
