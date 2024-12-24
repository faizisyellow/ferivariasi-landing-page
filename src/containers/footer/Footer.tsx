import Image from "next/image";
import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="bg-primary text-white px-6 py-11">
        <div className="w-full sm:w-[40%]">
          <dl className="space-y-2 leading-loose">
            <div className="flex items-start">
              <dt className="font-medium w-32 shrink-0">ALAMAT:</dt>
              <dd className="flex-1">Jl. Batanghari No.805, RW.3, Rampal Celaket, Kec. Klojen, Kota Malang, Jawa Timur 65111</dd>
            </div>
            <div className="flex items-start">
              <dt className="font-medium w-32 shrink-0">NO.TELEPON:</dt>
              <dd className="flex-1">+62 851-0238-8273</dd>
            </div>
            <div className="flex items-start">
              <dt className="font-medium w-32 shrink-0">JAM KERJA:</dt>
              <dd className="flex-1">Senin - Sabtu: 09:00 am - 16:00 pm</dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-y-4 sm:items-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`}
            alt="logo"
            width={60}
            height={40}
          />
          <div className="flex items-center gap-3">
            <h1 className="text-2xl">IKUTI KAMI</h1>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ferikacafilm?igsh=MWZyM2ExaW1uN2pscA=="
                target="_blank"
                className="p-2 bg-white text-primary text-lg rounded-full"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                target="_blank"
                className="p-2 bg-white text-primary text-lg rounded-full"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.google.com/maps/place/Feri+Variasi+Kaca+Film/@-7.963353,112.6341685,17z/data=!4m6!3m5!1s0x2dd6283376c944ad:0x21f4c721fb88fdb7!8m2!3d-7.963353!4d112.6367434!16s%2Fg%2F11b75qny3q?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="p-2 bg-white text-primary text-lg rounded-full"
              >
                <SiGooglemaps />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="text-primary py-4 px-6 bg-white">
        COPYRIGHT &copy; 2024 <strong>Feri Variasi </strong>
      </div>
    </>
  );
};

export default Footer;
