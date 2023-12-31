"use client" 
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return ( 
        <>
        {/* <div className="text-center md:text-left">
            <h1 className="font-bold text-4xl md:text-5xl ">Dream, Capture, Connect,
              With Dream Doodle.</h1>
            <p className="m-2 font-medium text-base">Your thought haven, where self-discovery unfolds effortlessly.
            </p>
            <Button>Start writing <ArrowRight className="w-4 h-4 ml-1" /></Button>
          <Image
              src="./Delivery.svg"
              alt="Hero Image"
              width="300"
              height="300"
              className="mx-auto mt-3 md:items-right"
            />
          </div> */} 

          <section className="md:flex md:items-center md:justify-center">
            <div className="m-10">
              <p className="text-center font-bold text-4xl md:text-6xl md:text-left md:w-[800px]">Dream, Capture, Connect, With Dream Doodle.</p>
              <p className="text-center m-2 font-medium text-base md:text-xl md:text-left my-4">Your thought haven, where self-discovery unfolds effortlessly.</p>
              <div className="flex justify-center md:justify-start">
              <Button>Start writing <ArrowRight className="w-4 h-4 ml-1"/></Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="./Delivery.svg"
                alt="Hero Image"
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                width="300"
                height="300"
              />
            </div>
          </section>
        </>
     );
}
 
export default Hero;
