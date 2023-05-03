import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="contact" className="bg-gray3 font-Dm_Sans">
      <div className="text-white flex flex-col items-center  py-16">
        <div className="w-36 h-12 border flex items-center justify-center my-8 hover:border-green cursor-pointer">
          <h1 className="text-2xl">Hire Me</h1>
        </div>
        <div className="icons flex space-x-10 text-3xl mb-8">
          <Link href='https://linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584'><IoLogoLinkedin className="cursor-pointer m-2 hover:text-green  ease-in duration-300" /></Link>

          <Link href={"https://github.com/ReynaldoAlvarez"}>
          <AiOutlineGithub className="cursor-pointer m-2 hover:text-green  ease-in duration-300" />
          </Link>
          <Link href={"https://www.youtube.com/@bunkerdev"}>
          <BsYoutube className="cursor-pointer m-2 hover:text-green  ease-in duration-300" />
          </Link>
        
        </div>
        <p className="tracking-wider text-center">
          All Rights are reserved | &#169; perfectCode 2023 | @BunkerDev @VidalAlvarez
        </p>
      </div>
    </section>
  );
};

export default Footer;
