import { Project } from "../../db";
import Image from "next/image";
import Circle from "../../../public/images/circle.svg"
import Github from "../../../public/images/bxl-github.svg.svg";

export default function WorkCard() {
  return (
    <div>

      {Project.map((project) => (
        <div
          className="flex flex-col lg:flex-row  lg:gap-18 items-center justify-center mb-18 "
          key={project.id}
        >
          <div className="bg-[#1A1A1A] lg:w-[500px] p-20 rounded-md relative ">
            <span className="bg-[#0A0A0A] text-white p-2 px-4 rounded-full text-[12px] lg:text-[14px] absolute top-4 left-4">
              {project.top}
              </span>
            <Image
              className="rounded-md w-full"
              src={project.image}
              alt={project.name}
              width={300}
              height={300}
            />
          </div>
          <div className="lg:w-[500px] mt-4 lg:mt-0 lg:ml-6 space-y-4">
            <h1 className="text-lg lg:text-xl text-white ">{project.title}</h1>
            <p className="text-[14px] text-[#C7C7C7]">{project.description}</p>
            <div className="space-y-2">
              <h5 className="text-[14px] lg:text-[16px] font-medium text-white">{project.name}</h5>
              <hr />
              <div className="flex justify-between py-2">
                <p className="text-[14px] lg:text-[16px] text-white">Year</p>
                <p className="text-[14px] lg:text-[16px] text-white">{project.year}</p>
              </div>
              <hr  className=" h-[0.2px]  "/>
              <div className="flex justify-between py-2">
                <p className="text-[14px] lg:text-[16px] text-white">Role</p>
                <p className="text-[14px] lg:text-[16px] text-white">{project.role}</p>
              </div>
              <hr />
            </div>
               <div className="flex gap-4 lg:gap-10 pt-4">
               <div className="flex  items-center underline text-[#D3E97A]  "> 
           
                 <a className="text-[12px] lg:text-[12px]"  href={project.demo} target="_blank" rel="noopener noreferrer">
                  {project.view}</a>
                     <Image className=" " src={Circle} alt="circle" width={20} height={20}/>
                  </div>
          <div className="flex items-center"> 
              <a className="text-[#D3E97A] underline text-[12px] lg:text-[12px] hover:text-[#cde964] transition-colors duration-200 " href={project.link} target="_blank" rel="noopener noreferrer">SEE ON GITHUB</a>
              <Image className="" src={Github} alt="github" width={20} height={20}/>
               </div>
     
    </div>
  
     </div>
          </div>
        
      ))}
    </div>
  );
}
