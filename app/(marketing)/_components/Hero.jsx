"use client" 
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return ( 
        <>
          <section className="md:flex md:items-center md:justify-center">
            <div className="m-10">
              <p className="text-center font-bold text-4xl md:text-6xl md:text-left md:w-[800px]">Dream, Capture, Connect, With Dream Doodle.</p>
              <p className="text-center m-2 font-medium text-base md:text-xl md:text-left my-4">Your thought haven, where self-discovery unfolds effortlessly.</p>
              <div className="flex justify-center md:justify-start">
                <Link  href="/documents"><Button>Start writing <ArrowRight className="w-4 h-4 ml-1"/></Button></Link>
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
