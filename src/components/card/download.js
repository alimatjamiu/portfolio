import Image from "next/image";
import LinkedIn from "../../../public/images/bxl-linkedin.svg.svg";
import Github from "../../../public/images/bxl-github.svg.svg";

import { LuDot } from "react-icons/lu";
import Circle from "../../../public/images/circle.svg";


export default function Download() {
  return (
          <div className="flex gap-4 items-center">
                    <div className="bg-[#D3E97A] text-[#000000] px-4 py-2 lg:py-1  rounded-full flex gap-2 items-center">
                      <p className="font-semibold text-[14px] lg:text-[16px] text-[#0A0A0A]">DOWNLOAD</p>
                      <LuDot className="hidden lg:block text-5xl "/>
                      <Image className="block lg:hidden" src={Circle} alt="circle" width={40} height={40}/>
                    </div>
                <span className="rounded-full bg-[#222222] w-10 h-10 flex items-center justify-center p-2">  <Image src={LinkedIn} alt="linkedin" width={20} height={30} className=""/></span>
          <span className="rounded-full bg-[#222222] w-10 h-10 flex items-center justify-center p-2"
          ><Image src={Github} alt="github" width={30} height={30} className=""/></span>
                </div>
  )
}
