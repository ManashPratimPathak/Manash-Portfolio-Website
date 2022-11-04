import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] pl-[20px] text-gray-500 text-2xl">
        about
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="https://i.ibb.co/pdymMkG/me.jpg"
        alt="manash"
        className="-mb-20 mt-[2rem] md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:q-64 md:h-64 xl:w-[400px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am a pre-final year student of Electrical Engineering at the
          National Institute of Technology, Silchar. I have worked as a frontend
          Developer for various teams, fest, and Startup for the past year.
          Besides this, I also have experience working as a technical support
          member and organizing events and workshops. Currently, I have been
          working as a{" "}
          <span className="underline decoration-[#f7ab0a]/50">
            technical Head
          </span>{" "}
          of the Entrepreneurship Cell at NIT Silchar.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
