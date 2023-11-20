import Image from "next/image";

import { Button } from "../ui/button";
import TitleSection from "./title-section";

import Banner from "../../../public/appBanner.png";

function HeroSection() {
  return (
    <section className="overflow-hidden px-4 sm:px6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
      <TitleSection
        pill="✨ Your Workspace, Perfected"
        title="All-In-One Collaboration and Productivity Platform"
      />
      <div className="bg-white z-10 p-[2px] mt-6 rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[300px]">
        <Button
          variant="btn-secondary"
          className="w-full rounded-[10px] p-6 text-2xl bg-background">
          Get MindMingle Free
        </Button>
      </div>

      <div className="md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px]">
        <Image src={Banner} alt="Application Banner" />
        <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10" />
      </div>
    </section>
  );
}

export default HeroSection;
