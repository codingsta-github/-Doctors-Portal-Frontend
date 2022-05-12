import React from "react";
import Button from "../../Shared/Button/Button";

const Contact = () => {
  return (
    <div className="bg-appointment my-20 py-10">
      <div className="my-10 text-center">
        <p className="uppercase text-secondary font-bold text-xl">contact us</p>
        <h1 className="capitalize font-semibold text-white text-4xl">
          Stay connected with us
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered input-md w-full max-w-xs my-3 "
        />

        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-md w-full max-w-xs my-3"
        />

        <textarea
          className="textarea w-80 textarea-bordered my-3 mb-7"
          placeholder="Your Message"
        ></textarea>
        <Button>submit</Button>
      </div>
    </div>
  );
};

export default Contact;
