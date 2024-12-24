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
          Kami menyediakan layanan pemasangan kaca film untuk kendaraan dan gedung, serta layanan tambahan seperti pemasangan alarm dan power window. Kami bertujuan memberikan perlindungan maksimal, kenyamanan, dan tampilan elegan. Dengan
          berbagai pilihan brand berkualitas, baik premium maupun standar, kami siap memenuhi kebutuhan Anda dalam meningkatkan keamanan, privasi, dan efisiensi energi.
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
