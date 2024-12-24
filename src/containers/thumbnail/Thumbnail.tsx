import React, { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface ThumbnailProps {}

const Thumbnail: FC<ThumbnailProps> = ({}) => {
  return (
    <section className="background-image h-screen w-full leading-relaxed">
      <div className="mx-8 pt-8 flex gap-y-4 flex-col justify-center h-full text-white">
        <h1 className="text-5xl font-bold">Feri Variasi </h1>
        <p className="text-xl mb-12 font-medium">Melayani jasa pemasangan kaca film untuk kendaraan dan gedung, memberikan perlindungan maksimal serta tampilan elegan untuk kebutuhan Anda.</p>

        <a
          href={"https://api.whatsapp.com/send?phone=6285102388273"}
          target="_blank"
          className="text-white text-xl items-center bg-primary h-14 w-max px-4 gap-4 flex"
        >
          <div className="p-2 bg-green-500 text-primary rounded-full">
            <FaWhatsapp color="white" />
          </div>
          <strong>Pesan Sekarang !</strong>
        </a>
      </div>
    </section>
  );
};

export default Thumbnail;
