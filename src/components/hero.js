



import Image from "next/image";
import Photo from "../../public/images/image.png";
import LinkedIn from "../../public/images/bxl-linkedin.svg.svg";
import Github from "../../public/images/bxl-github.svg.svg";
import { LuDot } from "react-icons/lu";
import Circle from "../../public/images/circle.svg"



export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-20 py-6 p-4 lg:p-0 lg:py-12  ">
        <div className="lg:w-[600px] space-y-4  max-w-4xl">
            <div >
              <h1 className="text-[#ffff] text-4xl  xl:text-6xl">HI, I AM <br/>ALIMAT JAMIU.</h1>
            <p className="text-[#C7C7C7] lg:pr-18 pt-4 text-[16px] md:text-[18px]">I am a frontend developer with a passion for creating beautiful and functional web applications. I have experience in HTML, CSS, JavaScript, and React. I am always eager to learn new technologies and improve my skills.</p>
            </div>
            <div className="flex gap-4 items-center">
                <div className="bg-[#D3E97A] text-[#000000] px-4 py-2 lg:py-1  rounded-full flex gap-2 items-center">
                  <p className="font-semibold text-[14px] lg:text-[16px] text-[#0A0A0A]">CONTACT ME</p>
                  <LuDot className="hidden lg:block text-5xl "/>
                  <Image className="block lg:hidden" src={Circle} alt="circle" width={40} height={40}/>
                </div>
            <span className="rounded-full bg-[#222222] w-10 h-10 flex items-center justify-center p-2">  <Image src={LinkedIn} alt="linkedin" width={20} height={30} className=""/></span>
      <span className="rounded-full bg-[#222222] w-10 h-10 flex items-center justify-center p-2"
      ><Image src={Github} alt="github" width={30} height={30} className=""/></span>
            </div>

        </div>
        
            <Image className="" src={Photo} alt="photo" width={400} height={400}/>
        
    </div>
  )
}