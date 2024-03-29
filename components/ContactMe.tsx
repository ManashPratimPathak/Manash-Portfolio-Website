import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href=`mailto:mppoff021@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message} (${formData.email})`;
};
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tacking-[20px] text-gray-500 text-2xl">
        contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-[#f7ab0a]/50 underline">
            {" "}
            let's talk.
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-2xl">+1234567890</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-2xl">manash@google.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-2xl">123 developer lane</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contact-input"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contact-input"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contact-input"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contact-input"
          ></textarea>
          <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
