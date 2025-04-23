import Image from "next/image";
import CountUp from "../ui/count-up";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen pt-16 pb-24 md:pt-20 md:pb-32 bg-black  flex flex-col items-center justify-center px-6">
      {/* Main Content Container */}
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Brand Name */}
        <h1 className="text-center flex items-center flex-col gap-2 mb-16">
          <span className="block max-w-[850px] mx-auto text-3xl md:text-6xl font-semibold tracking-wide text-white">
          PIONEERS IN MANUFACTURING STAINLESS STEEL & ALUMINIUM ELBOWS
          </span>
        </h1>


        <div className="flex flex-col md:flex-row gap-16 pb-16 max-w-6xl mx-auto items-center justify-center">
          <div className="flex-shrink-0 hidden md:block">
            <Link href="/size-guide">
              <Button className="bg-white cursor-pointer text-black px-8 py-6 text-lg rounded-lg font-medium 
                hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Size Guide
              </Button>
            </Link>
          </div>
          <div className="">
            <img src="/logo.jpg" alt="Manufacturing facility" className="w-full h-full max-h-[250px] md:max-h-[250px] object-contain" />
          </div>
          <div className="flex-shrink-0 hidden md:block">
            <Link href="/contact">
              <Button className="bg-white cursor-pointer text-black px-8 py-6 text-lg rounded-lg font-medium 
                hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Place Order
              </Button>
            </Link>
          </div>
        </div>

        <div className="mb-16 max-w-2xl mx-auto text-center space-y-4">
          <p className="text-white text-2xl text-center">
          DOING BUSINESS ACROSS <br />
          NORTH AMERICA, SINCE 1969
          </p>
          <p className="text-white text-2xl text-center">
          WE OFFER A COMPLETE LINE OF STAINLESS STEEL & ALUMINUM FITTING COVER BANDING, WING CLIPS, CUSTOM FLAT SHEETS
          </p>
        </div>


        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center flex items-center flex-col gap-2">
            <CountUp
              from={0}
              to={"56+"}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-4xl md:text-5xl lg:text-6xl font-semibold"
            />
            <p className="text-base text-foreground uppercase tracking-wider">Years Legacy</p>
          </div>
          <div className="text-center  md:mr-8 flex items-center flex-col gap-2">
            <CountUp
              from={0}
              to={"10000+"}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-4xl md:text-5xl lg:text-6xl font-semibold"
            />
            <p className="text-base text-foreground uppercase tracking-wider">Projects</p>
          </div>
          <div className="text-center flex items-center flex-col gap-2">
            <CountUp
              from={0}
              to={"100000+"}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-4xl md:text-5xl lg:text-6xl font-semibold"
            />
            <p className="text-base text-foreground uppercase tracking-wider text-nowrap">Products manufactured</p>
          </div>
        </div>
      </div>
    </div>
  );
}
