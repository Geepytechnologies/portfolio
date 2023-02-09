import Html from "@/myicons/Html";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:geepytechnologies@gmail.com?subject=${data.subject}&body=Hi,my name is ${data.name}, ${data.message}`;
  };
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left max-w-full justify-evenly px-10 mx-auto items-center">
      <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <p className="text-[23px] font-[600]">
        I have got just what you need. Let&apos;s talk
      </p>
      <div className="space-y-4 text-[18px]">
        <p className="flex gap-1 items-center">
          <BsFillTelephoneFill /> +2348106974201
        </p>
        <p className="flex gap-1 items-center">
          <AiOutlineMail />
          geepytechologies@gmail.com
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-full  mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-0">
          <input
            {...register("name")}
            placeholder="Name"
            className="contact"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contact"
            type="email"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contact"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contact"
        />
        <button
          type="submit"
          className="bg-[#ac8063] mt-2 text-[20px] font-[600] rounded-sm py-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
