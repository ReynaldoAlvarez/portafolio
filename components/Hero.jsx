import React, { Fragment, useState, useEffect } from "react";
import heroImage from "../public/1.png";
import Image from "next/image";
import {RiFlutterLine} from "react-icons/ri"

import {IoLogoNodejs} from "react-icons/io"
import {FaPython} from "react-icons/fa"
import {FaReact} from "react-icons/fa"
import {DiApple, DiCode, DiLinux, DiVisualstudio} from "react-icons/di"
import { DiAndroid } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
import { DiCloud9 } from "react-icons/di";
import { DiDocker } from "react-icons/di";

import Link from 'next/link'

const Hero = () => {
    const [below1300, setbelow1300] = useState(false);
    const [below1250, setbelow1250] = useState(false);
    const [below1200, setbelow1200] = useState(false);
    const [below1000, setbelow1000] = useState(false);
    const [below600, setbelow600] = useState(false);

    useEffect(() => {
        function handleResize() {
          setbelow1300(window.innerWidth < 1300);
          setbelow1250(window.innerWidth < 1250);
          setbelow1200(window.innerWidth < 1200);
          setbelow1000(window.innerWidth < 1000);
          setbelow600(window.innerWidth < 600);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <Fragment>
        { !below1000 ? (
      <section className={` grid ${below1250 ? "grid-cols-1" : "grid-cols-2"} grid-cols-2 w-10/12 ${below1200 ? "w-11/12" : "w-10/12"} m-auto mt-28 font-Roboto_mono`}>
        <div className="text-elements inline-flex relative text-white flex-col">
          <div className={`w-10/12 ${below1300 ? "ml-0" : "ml-10"}`}>
            <div>
              <p className="work bg-green p-1 inline-block rounded-xl">
                Ing.Vidal Reynaldo Alvarez Challco
              </p>
            </div>
            <div className={`head leading-12  ${below1200 ? "mt-8 mb-8 text-4xl" : "mt-12 mb-12 text-5xl"}`}>
              <p>Software Engineer</p>
              <p></p>
            </div>
         
            <div className="desc text-base opacity-60 mb-10">
              <p>I create technological solutions tailored to your needs </p>
              <p>and I love what I do.</p>
            </div>
            <h3 className={`lowercase text-green text-xl underline underline-offset-4  ${below1200 ? "mb-10" : "mb-20"}`}>
            vidal.r.a.777@gmail.com
            </h3>
          </div>
          <div className="experience uppercase flex space-x-8 pb-7">
            <div className="year flex items-center">
              <p className={` mr-4 ${below1200 ? "text-4xl" : "text-5xl"}`}>12</p>
              <div className={`opacity-75 ${below1200 ? "text-sm" : "text-base"}`}>
                Years <p>of Experience</p>{" "}
              </div>
            </div>
            <div className="projects flex items-center justify-between">
              <p className={` mr-4 ${below1200 ? "text-4xl" : "text-5xl"}`}>N</p>
              <div className={`opacity-75 ${below1200 ? "text-sm" : "text-base"}`}>
                Project completed <p>in American and European companies</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className=" image-elements relative">
          <div class="flex justify-end items-center bg-gradient-primary-2 absolute bottom-0">
            <span className="absolute top-20 right-28 bg-gray3 shadow-3xl w-8 h-8 flex items-center justify-center rounded-50">
                <FaPython className="text-2xl text-blue"/>
            </span>
            <span className="absolute top-60 -right-10 w-24 h-24 bg-gray2 shadow-2xl flex items-center justify-center rounded-50">
                <IoLogoNodejs className="text-6xl text-green"/>
            </span>
            <span className="absolute top-3/4 -left-12 w-16 h-16 bg-darkgray shadow-xl flex items-center justify-center rounded-50">
                <RiFlutterLine className="text-4xl text-blue"/>
            </span>
            <span className="absolute top-10 left-12 w-8 h-8 flex items-center opacity-60 justify-center bg-darkgray shadow-4xl rounded-50">
                <FaReact className="text-2xl text-react" />
            </span>
            <span className="absolute top-40 left-12 w-8 h-8 flex items-center opacity-60 justify-center bg-darkgray shadow-3xl rounded-50">
                <DiApple className="text-3xl text-white" />
            </span>
            <span className="absolute top-80 left-2 w-8 h-8 flex items-center opacity-60 justify-center bg-darkgray shadow-3xl rounded-50">
            <DiAndroid className="text-2xl text-react align-baseline" />
            </span>
            <span className="absolute top-40 -right-50 w-24 h-24 flex items-center opacity-60 justify-lefth bg-darkgray shadow-xl rounded-50">
                <DiDatabase className="text-2xl text-react" />
                <DiCloud9 className="text-2xl text-react" />
                <DiDocker className="text-2xl text-react" />
                <DiCode className="text-2xl text-react" />
                <DiLinux className="text-2xl text-react" />
                
            </span>
            <Image
              className={``}
              src={heroImage}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section> ) 
      : 
      (
        <section className={` flex flex-col-reverse w-11/12 m-auto font-Roboto_mono`}>
        <div className={`text-elements relative text-white  w-10/12 m-auto ${below600 ? "w-11/12": ""}`}>
          <div className={`w-10/12 m-auto ${below600 ? "w-full": ""}`}>
            <div>
              <p className="work bg-green p-1 inline-block rounded-xl">
                Ing.Vidal Reynaldo Alvarez Challco
              </p>
            </div>
            <div className={`head leading-12 mt-4 mb-8 ${below600 ? "text-3.5xl" : "text-4xl"}`}>
            <p>Software Engineer</p>
            </div>
            <div>
              
            </div>
            <div className="desc text-base opacity-60 mb-10">
            <p>I create technological solutions tailored to your needs </p>
              <p>and I love what I do.</p>
            </div>
            <h3 className={`uppercase text-green text-3xl underline underline-offset-4"`}>
              Let&apos;s Chat:
            </h3>
          </div>
          <div className={`experience uppercase w-11/12 m-auto mt-7 pb-7 ${below600 ? "w-full float-left space-y-2": "flex space-x-8"}`}>
            <div className="year flex items-center">
              <p className={` mr-4 text-4xl`}>12</p>
              <div className={`opacity-75 text-sm`}>
                Years <p>of Experience</p>
              </div>
            </div>
            <div className="projects flex items-center ">
              <p className={` mr-4 text-4xl`}>N</p>
              <div className={`opacity-75 text-sm`}>
                Project completed <p>in American and European companies</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" image-elements relative mt-16 mb-20">
          <div class="flex justify-end items-center bg-gradient-primary-2 w-8/12 m-auto">
            <span className={`absolute bg-gray3 shadow-3xl w-8 h-8 flex items-center justify-center rounded-50 ${below600 ? "hidden" : "top-10 right-48"}`}>
                <FaPython className="text-2xl text-blue"/>
            </span>
            <span className={`absolute w-24 h-24 bg-gray2 shadow-2xl flex items-center justify-center rounded-50 ${below600 ? "hidden" : "top-60 right-16"}`}>
                <IoLogoNodejs className="text-6xl text-green"/>
            </span>
            <span className={`absolute  w-16 h-16 bg-darkgray shadow-xl flex items-center justify-center rounded-50 ${below600 ? "hidden" : "top-3/4 left-28"}`}>
                <RiFlutterLine className="text-4xl text-red"/>
            </span>
            <Image
              className={`w-[400px]`}
              src={heroImage}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
      )}
    </Fragment>
  );
};

export default Hero;
