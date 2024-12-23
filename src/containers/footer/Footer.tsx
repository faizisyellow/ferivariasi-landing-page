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
              <dt className="font-bold w-32 shrink-0">ALAMAT:</dt>
              <dd className="flex-1">Malang, Indonesia</dd>
            </div>
            <div className="flex items-start">
              <dt className="font-bold w-32 shrink-0">NO.TELEPON:</dt>
              <dd className="flex-1">012345678910112</dd>
            </div>
            <div className="flex items-start">
              <dt className="font-bold w-32 shrink-0">OFFICE HOUR:</dt>
              <dd className="flex-1">Monday to Friday 09:00am - 16:00pm</dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-y-4 sm:items-center">
          <h1 className="text-3xl">LOGO</h1>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl">IKUTI KAMI</h1>
            <div className="flex gap-4">
              <div className="p-2 bg-white text-primary text-lg rounded-full">
                <FaInstagram />
              </div>
              <div className="p-2 bg-white text-primary text-lg rounded-full">
                <FaTiktok />
              </div>
              <div className="p-2 bg-white text-primary text-lg rounded-full">
                <SiGooglemaps />
              </div>
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
