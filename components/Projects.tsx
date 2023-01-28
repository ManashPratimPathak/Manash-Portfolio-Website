import React from "react";
import {motion} from "framer-motion"

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
     className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tacking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div key={i} className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
            initial={{
                y:-300,
                opacity:0
            }}
            transition={{duration:1.2}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
              src="https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_640.jpg"
              alt=""
            ></motion.img>
            <div className="space-y-10 px=0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                {" "}
                <span className="underline decoration-[#f7ab0a]/50"> Case study {i + 1} 0f {projects.length}: UPS clone</span>
              </h4>
              <p className="text-lg text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry  standard dummy text ever since the 1500s when an unknown printer took a galley of type</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
