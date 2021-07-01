import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <div class="container p-8 h-full">
      <section className="flex flex-col justify-center items-start space-y-6 h-full">
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
      <section className="flex flex-col justify-center items-center space-y-10 h-full">
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
      <section className="flex flex-col justify-center items-center space-y-10 h-full">
        <h1 className="text-5xl text-black font-montserrat leading-tight">
          Portfolio
        </h1>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://picsum.photos/seed/picsum/350/200"
        />
        <div className="w-full">
          <h4 className="text-lg text-black font-montserrat">Title</h4>
          <p>Fancylingo</p>
        </div>
        <div className="w-full">
          <h4 className="text-lg text-black font-montserrat">
            Development Tools
          </h4>
          <p>Lorem ipsum, lorem ipsum, lorem.</p>
        </div>
        <button className="p-2.5 text-xl font-semibold tracking-wider border-2 rounded-md border-gray-200">
          VIEW PROJECT
        </button>
      </section>
    </div>
  );
};

export default IndexPage;
