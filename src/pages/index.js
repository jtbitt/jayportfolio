import * as React from "react";

const IndexPage = () => {
  return (
    <div class="container p-8">
      <section className="flex flex-col justify-center items-start space-y-6 h-screen">
        <h1 className="text-5xl text-black font-montserrat leading-tight">
          Hi, I'm Jay
          <br />
          Front End
          <br />
          Developer
        </h1>
        <button className="p-2.5 text-xl font-semibold tracking-wider border-2 rounded-md border-gray-200">
          CONTACT ME
        </button>
      </section>
      <section className="flex flex-col justify-center items-center space-y-10 h-screen">
        <div className="space-y-4">
          <h1 className="text-5xl text-black font-montserrat leading-tight">
            About
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis
            porttitor auctor nostra, gravida platea convallis egestas tortor
            ullamcorper malesuada dui nibh quisque nisl, nec parturient ac proin
            nullam faucibus porta dapibus arcu sagittis.
          </p>
        </div>
        <div className="w-full">
          <h4 className="text-lg text-black font-montserrat">Skills</h4>
          <p>HTML, CSS, Javascript, Angular, React</p>
        </div>
        <button className="p-2.5 text-xl font-semibold tracking-wider border-2 rounded-md border-gray-200">
          HIRE ME
        </button>
      </section>
    </div>
  );
};

export default IndexPage;
