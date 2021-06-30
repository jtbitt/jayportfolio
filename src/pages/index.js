import * as React from "react";

const IndexPage = () => {
  return (
    <section className="flex flex-col justify-center items-start space-y-6 h-screen p-8">
      <p className="text-5xl text-black font-montserrat leading-tight">
        Hi, I'm Jay
        <br />
        Front End
        <br />
        Developer
      </p>
      <button className="p-2.5 text-xl font-medium tracking-wider border-2 rounded-md border-gray-200">
        CONTACT ME
      </button>
    </section>
  );
};

export default IndexPage;
