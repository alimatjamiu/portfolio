import Image from "next/image";
import Linkedin from "../../public/images/bxl-linkedin.svg.svg";
import Github from "../../public/images/bxl-github.svg.svg";
import Twitter from "../../public/images/bxl-linkedin.svg.png";
import Form from "../components/card/form";
import { LuInstagram } from "react-icons/lu";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-10 justify-center p-14 gap-6 px-6 lg:px-0">
     <div className="flex flex-col justify-between">
       <div className="lg:w-[580px] space-y-4">
        <h1 className="text-3xl lg:text-4xl text-white">LET'S CONNECT</h1>
        <p className="text-white text-sm lg:w-[280px]">Say hello at <a className="underline decoration-[#D3E97A]" href="mailto:alimatjamiu20@gmail.com">alimatjamiu20@gmail.com</a>. For more info, here’s my <strong className="underline decoration-[#D3E97A]">resume</strong> .</p>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Image src={Linkedin} alt="LinkedIn" width={30} height={32} />
          </a>
          <a href="https://github.com/alimatjamiu20" target="_blank" rel="noopener noreferrer">
            <Image src={Github} alt="GitHub" width={30} height={32} />
          </a>
          <a href="https://twitter.com/alimatjamiu" target="_blank" rel="noopener noreferrer">
            <Image src={Twitter} alt="Twitter" width={30} height={32} />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <LuInstagram className="text-[#D3E97A] text-3xl " />
          </a>
        </div>
      </div>
      <p className="text-[#C7C7C7] text-[16px] hidden lg:block">© 2023 Robert Garcia</p>
     </div>
      <Form/>
    </div>
  );
}