import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-[5rem] flex-shrink-0 w-full md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-[40%] cursor-pointer transition-opacity duration-200 overflow-hidden lg:mt-[7rem] lg:mb-[1.5rem]">
      <div className="px-0 md:px-10">
        <div className="flex flex-col md:flex-row-reverse md:justify-between">
          <div className="flex justify-center">
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
              src="https://i.ibb.co/RQdbYfD/ecell-logo-01-2.png"
              alt="ecell-logo-01-2"
            />
          </div>
          <div className="flex flex-col">
            <h4 className=" text-2xl md:text-4xl font-light">
              Technical Head of Ecell NIT Silchar
            </h4>
            <p className="text-xl text-bold uppercase md:text-2xl mt-1">
              Ecell NIT Silchar
            </p>
            <div className="flex space-x-2 my-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png"
                alt=""
              />
            </div>
            <p className="uppercase py-5 text-gray-300">
              Started work JULY 2022  Continue
            </p>
          </div>
        </div>

        <ul className="list-disc space-y-4 ml-5 text-base md:text-lg">
          <li>
            Worked with faculties and various supporting team for Smart India
            Hackathon 2022 held at NIT Silchar
          </li>
          <li>
            Currently, heading the team of 9 developers for the improvement of
            current version of Ecell Website
          </li>
          <li>
            Organizing head of one the events of Ecell s Module in Technical
            Fest of NIT Silchar
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
