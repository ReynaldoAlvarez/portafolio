import React, {useState, useEffect} from 'react'
import Box from "./utils/Box"

const boxes = [
  {
    headline: "Architecture Systems",
    desc: "Create Architecture for your system aplication",
    project: "GitHub",
  },
  {
    headline: "BackEnd (Logical)",
    desc: "Create BackEnd Api End Point  with coding super smooth and use Clean Code",
    project: "Github"
  },
  {
    headline: "FrontEnd",
    desc: "Web and Mobile Application Developer for Android and Ios",
    project: "GitHub"
  }
];


const Works = () => {
  const [lower1075, setlower1075] = useState(false);
  const [lower790, setlower790] = useState(false);

  useEffect(() => {
    function handleResize () {
      setlower1075(window.innerWidth<1075);
      setlower790(window.innerWidth<790);

    }
    window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, [])

  return (
    <section id='services' className={`pt-10 pb-10 bg-gray3`}>
      <div className={`inner mb-20 ${lower790 ? " mt-16" : "grid grid-cols-1 mt-32"}`}>
        <div className="boxs space-y-4">
        {boxes.map((box, index) => (
            <Box key={index} headline={box.headline} desc={box.desc} project={box.project}/>
        ))}
        </div>
        <div className={`text text-white font-Roboto_mono mx-auto ${lower1075 ? "w-11/12": "w-10/12"} ${lower790? "w-9/12 mt-10": ""}`}>
          <p className='opacity-60 '>Introduce</p>
          <h1 className={` ${lower1075 ? "text-3.5xl": "text-4xl"}`}>Hello! I&apos;m Vidal Alvarez</h1>
          <h1 className={` ${lower1075 ? "text-3.5xl mb-5": "text-4xl mb-7"}`}>Software Engineer</h1>
          <p className={`italic opacity-90 mb-12 leading-1 ${lower1075 ? "textbase": "text-xl"}`}>I think that each application that a client requires is based on a need. This need is a contribution to the development of society.</p>
          <p className={`w-10/12 opacity-75 ${lower790 ? "h-[300px] w-11/12 overflow-x-auto":""}`}>Make various applications using different programming languages. However, as a software engineer I have the ability to lead teams to develop applications based on customer needs, using architectures and development methodologies, adapting the most convenient language for the requested requirements, I have the ability to master different languages, However, my specialty is the use of JS with Typescript and all its frameworks, as well as Dart with Flutter.</p>
        </div>
        </div>
    </section>
  )
}

export default Works