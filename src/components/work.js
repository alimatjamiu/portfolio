import WorkCard from "../components/card/workCard";

export default function Work() {
  return (
<div className="border">
      <div className="  space-y-10 py-4 px-6 lg:px-0">
      <div className="lg:w-[400px] lg:ml-20 xl:ml-32 space-y-2 py-8">
        <h1 className="text-[24px] font-medium lg:text-3xl text-white">FEATURED PROJECTS</h1>
        <p className="text-[#C7C7C7] text-[14px] lg:text-[16px] pr-10 lg:pr-0">
          Here are some of the selected projects that showcase my passion for front-end development.
        </p>
      </div>
      <WorkCard />
    </div>
</div>
  );
}