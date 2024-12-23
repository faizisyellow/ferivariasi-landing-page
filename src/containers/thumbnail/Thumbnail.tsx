import Link from "next/link";
import React, { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface ThumbnailProps {}

const Thumbnail: FC<ThumbnailProps> = ({}) => {
  return (
    <section className="background-image h-screen w-full leading-relaxed">
      <div className="mx-8 flex gap-y-4 flex-col justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Feri Variasi</h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae inventore repellat, corporis est laborum nostrum quisquam aut molestias nam odio reiciendis similique rem quidem sapiente perspiciatis maxime itaque! Voluptas
          doloribus exercitationem explicabo. Ab soluta illum, dolorem id amet aliquam.
        </p>

        <Link
          href={"/"}
          className="text-white text-xl items-center bg-primary h-14 w-max px-4 gap-4 flex"
        >
          <div className="p-2 bg-green-500 text-primary rounded-full">
            <FaWhatsapp color="white" />
          </div>
          <strong>Pesan Sekarang !</strong>
        </Link>
      </div>
    </section>
  );
};

export default Thumbnail;
