import Image from "next/image"
import Person from "../../../public/images/6dd8e389a3 1.png"


export default function aboutMe() {
  return (
    <div>
        <div className="bg-[#C7C7C7]  lg:w-[800px] rounded-md mx-auto ">
            <Image className="mx-auto  object-cover " src={Person} alt="person" width={400} height={300}/>
        </div>
        <div className=" space-y-2 text-xl  flex flex-col lg:flex-row lg:gap-10 justify-center p-2 py-10 lg:p-14 ">
          <div>
           <h1 className="text-3xl text-white w-[560px] mb-4"> MY CAPABILITIES</h1>
          </div>
          <div className="lg:w-[580px] space-y-6 ">
            <p className="text-[#C7C7C7] md:text-[16px] text-[14px]">I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.</p>
            <div className="hidden lg:block text-white space-y-4">
             <div className="flex gap-4">
               <button className="border borde-[#C7C7C7] rounded-full p-2 px-4">HTML</button>
               <button className="border borde-[#C7C7C7] rounded-full p-2 px-4">CSS</button>
                <button className="border borde-[#C7C7C7] rounded-full p-2 px-4">JAVASCRIPT</button>
                 <button className="border borde-[#C7C7C7] rounded-full p-2 px-4">NEXT JS</button>
             </div >
                 <div className="flex gap-2">
                   <button className="border border-[#C7C7C7] rounded-full p-2 px-4">ACCESIBILITY</button>
                   <button className="border border-[#C7C7C7] rounded-full p-2 px-4">FIGMA</button>
                    <button className="border border-[#C7C7C7] rounded-full p-2 px-4">TAILWIND</button>
                 </div>
            </div>
            <div className="lg:hidden text-white space-y-4">
             <div className="flex gap-4">
               <button className="border borde-[#C7C7C7] rounded-full p-4 px-6 text-[14px]">HTML</button>
               <button className="border borde-[#C7C7C7] rounded-full p-4 px-6 text-[14px]">CSS</button>
                <button className="border borde-[#C7C7C7] rounded-full p-2 px-4 text-[14px]">JAVASCRIPT</button>
                
             </div >
             <div className="flex gap-2">
                <button className="border borde-[#C7C7C7] rounded-full p-4 px-6 text-[14px]">NEXT JS</button>
                   <button className="border border-[#C7C7C7] rounded-full p-4 px-6 text-[14px]">ACCESIBILITY</button>
             </div>
                 <div className="flex gap-2">
                 
                   <button className="border border-[#C7C7C7] rounded-full p-4 px-6 text-[14px]">FIGMA</button>
                    <button className="border border-[#C7C7C7] rounded-full p-4 px-6 text-[14px]">TAILWIND</button>
                 </div>
            </div>
          </div>
        </div>
        <div className=" text-xl flex flex-col lg:flex-row lg:gap-10 justify-center lg:p-14 ">
          <div className="text-2xl lg:text-3xl text-white w-[560px]">MY EXPERIENCE</div>
          <div className="lg:w-[580px] space-y-8 ">
            <div>
              <div className="flex justify-between pb-4 flex-col lg:flex-row">
                <h4 className="text-white">Freelance Developer </h4>
              <span className="text-[14px] text-[#C7C7C7]">Nov 2023 present</span>
              </div>
              <p className="text-[#C7C7C7] md:text-[16px] text-[14px]">lamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
           <div>
             <div className="pb-4">
             <div className="flex justify-between flex-col lg:flex-row ">
               <h4 className="text-white">Front-End Intern</h4>
              <span className="text-[#C7C7C7] text-[14px]">Nov 2023 present</span>
             </div>
             <h6 className="text-[#D3E97A] text-[16px]">Roose Tech</h6>
            </div>
            <p className="text-[#C7C7C7] md:text-[16px] text-[14px]">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
           </div>
          </div>
        </div>
    </div>
  )
}
