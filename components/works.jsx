import React, {useState, useEffect} from 'react'
import rightImage from "../public/3.png"
import leftImage1 from "../public/2.png"
import leftImage2 from "../public/4.png"
import Image from 'next/image'
import Link from 'next/link'

const Works = () => {
  const [lower1200, setlower1200] = useState(false);
  const [lower850, setlower850] = useState(false);
  const [lower450, setlower450] = useState(false);

  useEffect(() => {
    function handleResize () {
      setlower1200(window.innerWidth<1200);
      setlower850(window.innerWidth<850);
      setlower450(window.innerWidth<450);

    }
    window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, [])

  return (
    <section id='works' className='bg-gray3'>
      <hr className='text-green opacity-10' />
      <div className={`inner ${lower850 ? "" : "grid grid-cols-1"} m-auto pt-10 pb-10 text-white font-Roboto_mono ${lower1200 ? "w-11/12" : "w-10/12"}`}>
        <div className={`  ${lower850 ? "flex flex-col  justify-center items-center" : "grid grid-rows-3"}`}>
            <div className={`text1 ${lower850 ? "w-8/12 m-auto": ""}`}>
                <h1 className={` mb-2 ${lower450 ? "text-3.5xl": "text-4xl"}`}>Latest Work</h1>
            </div>
            <div className={`image ${lower850 ? "mt-10": ""}`}>
                <Image className={` rounded-2xl shadow-4xl ${lower1200 ? "w-[350px]":"w-[450px]"} ${lower450 ? "w-80": ""}`} src = {rightImage} alt = "Image" />
                <h1 className={` mb-5 ${lower450 ? "text-3xl": "text-3.5xl"}`}>GEOPOIS</h1>
            <p className='opacity-70 al'>Project oriented to edTech, oriented to teach geospatial technologies showing tutorials of geo technologies</p>
            <p className='opacity-70 justify-items-stretch'>This application is developed using a monolithic architecture, so NodeJs is used as background for the programming logic, PostgreSql for the database, and so also in front React was used in a first stage, and then it happened to Nextjs with typescript</p>
            <p className='opacity-70 justify-items-stretch'>Geopois is an EdTech StartUp, Located in Madrid Spain, which also develops applications oriented to Geo technologies, I worked in this company for two years Guiding the development team, concluding several applications for Europe. I think it was a great work experience and professional growth.
2020-2022</p>
<Link href={'https://www.geopois.com'}>
<p className='text-green underline underline-offset-2'>Project</p>
</Link>

            </div>
            
        </div>
        <div className="left grid grid-row-2 gap-20">
            <div className="image1 flex justify-center">
            <Image className={`rounded-2xl shadow-4xl aspect-auto ${lower1200 ? "w-[350px]":"w-[500px]"} ${lower450 ? "w-80": ""} `} src = {leftImage1} alt = "Image" />
            </div>
            <div>
            <h1 className={` mb-5 ${lower450 ? "text-3xl": "text-3.5xl"}`}>QHAWAY</h1>
            <p className='opacity-70 al'>Application that allows you to create a web store for any business, and offer your product</p>
            <p className='opacity-70 justify-items-stretch'>This project was carried out using a monolithic architecture, it was used for the aws cloud, for the backend, the API was used NodeJs and TypeScript in the background, with NoSql database, in the front Dart was used In the background for Ios, Andrioid , and web</p>
            <p className='text-green underline underline-offset-2'>Contact</p>
            </div>
            <div className="image1 flex justify-center">
            <Image className={`rounded-2xl shadow-4xl  aspect-auto ${lower1200 ? "w-[350px]":"w-[500px]"} ${lower450 ? "w-80": ""}`} src = {leftImage2} alt = "Image" />
            </div>
            <div>
            <h1 className={` mb-5 ${lower450 ? "text-3xl": "text-3.5xl"}`}>BUNKERBIBLE</h1>
            <p className='opacity-70 al'>Project to manage and reproduce audio based on a concept similar to Spotify, but oriented to Christian sermons of pre-eminent pastors of the reform until today</p>
            <p className='opacity-70 justify-items-stretch'>This project manages a monolithic architecture, with a background backend using the Nodejs language, and mongoDb, and on the front it was developed using ReactJs. The Development team used an agile methodology for its SCRUM development.</p>
            <p className='text-green underline underline-offset-2'>Contact</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Works