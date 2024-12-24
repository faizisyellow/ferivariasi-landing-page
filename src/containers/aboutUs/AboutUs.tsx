import Box from "@/components/box";
import Image from "next/image";
import React from "react";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
  return (
    <Box
      title="Tentang Kami"
      id="TentangKami"
    >
      <div className="flex w-full justify-center gap-x-8 flex-wrap sm:flex-nowrap">
        <p
          id="about"
          className="w-full text-xl"
        >
          Kami menyediakan pemasangan kaca film untuk kendaraan dan gedung, serta layanan tambahan seperti alarm dan power window. Dengan pilihan brand berkualitas, baik premium maupun standar, kami berkomitmen memberikan perlindungan
          maksimal, kenyamanan, dan efisiensi energi.
        </p>

        {/* The image should have w/h when in mobile */}
        <div className="relative w-full h-96">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/about.png`}
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
