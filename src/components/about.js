"use client"
import { useState } from "react";
import AboutMe from "../components/card/aboutMe";
import Download from "../components/card/download";

export default function About() {
  const [more, setMore] = useState(false);

  return (
    <div className="px-2 lg:px-0 lg:border   ">
      <div className="space-y-2 text-xl flex flex-col lg:flex-row lg:gap-26 justify-center p-6 lg:pb-28">
        <h1 className="text-white lg:w-[300px] lg:text-[40px]">ABOUT ME</h1>
        <div className="space-y-4 lg:w-[540px]">
          <h2 className="lg:text-xl text-white">
            I’m a front-end developer based in Lagos with a background in Front-end Engineering.
          </h2>
          <p className="text-[#C7C7C7] text-[14px] lg:text-[16px]">
            I’m currently looking for exciting opportunities in front-end development. I focus on accessibility and love solving problems. I'm exploring React.js, Webflow, and some design tools. Outside of work, I enjoy playing football, photography, and Valorant. I'm always learning and improving my skills.
          </p>
          <button
            onClick={() => setMore(!more)}
            aria-expanded={more}
            className="text-[#D3E97A] underline text-sm"
          >
            {more ? <Download/> : "MORE ABOUT ME"}
          </button>
        </div>
      </div>

      {more && <AboutMe />}
    </div>
  );
}