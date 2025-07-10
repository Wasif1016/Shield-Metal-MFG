import Image from "next/image";
import CountUp from "../ui/count-up";
import { Button } from "../ui/button";
import Link from "next/link";
import MetallicText from "../metalic-text";

export default function Hero() {
  return (
    <div className="min-h-screen pt-16 pb-24 md:pt-20 md:pb-36 bg-black  flex flex-col items-center justify-center px-6">
      {/* Main Content Container */}
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Brand Name */}
        <div className="max-w-5xl mx-auto mb-8">
          {/* - PIONEERS IN MANUFACTURING STAINLESS STEEL & ALUMINUM ELBOWS - */}
          {/* <img
            src="/PIONEERS-IN-MANUFACTURING-STA-06-07-2025.png"
            alt="Doing Business Across"
            className=""
          /> */}
          <Image
            src="/PIONEERS-IN-MANUFACTURING-STA-06-07-2025.png"
            alt="Doing Business Across"
            width={1000}
            height={1000}
            quality={100}
            className="object-contain "
          />
        </div>

        <div className="mb-16">
          <img
            src="/logo.jpg"
            alt="Manufacturing facility"
            className="w-full h-full max-h-[250px] md:max-h-[320px] object-contain"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-16 pb-16 max-w-6xl mx-auto items-center justify-center">
          <div className="flex-shrink-0 hidden md:block">
            <Link href="/size-guide">
              <Button
                className="bg-white cursor-pointer text-black px-8 py-6 text-lg rounded-lg font-medium 
                hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Size Guide
              </Button>
            </Link>
          </div>
          <div className="flex-shrink-0 hidden md:block">
            <Link href="/contact">
              <Button
                className="bg-white cursor-pointer text-black px-8 py-6 text-lg rounded-lg font-medium 
                hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Place Order
              </Button>
            </Link>
          </div>
        </div>

        <div className="mb-16 mx-auto text-center">
          <div className="max-w-3xl w-full mx-auto">
            {/* - DOING BUSINESS ACROSS NORTH AMERICA - */}
            <Image
              src="/DOING-BUSINESS-ACROSS-NORTH.png"
              alt="Doing Business Across"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain "
            />
          </div>
          <div className="w-full max-w-2xl mx-auto -mt-6">
            {/* - WE OFFER A COMPLETE LINE OF STAINLESS STEEL & ALUMINUM FITTING COVER BANDING, WING CLIPS, CUSTOM FLAT SHEETS - */}
            <Image
              src="/WE-OFFER-A-COMPLETE-LINE.png"
              alt="Doing Business Across"
              width={1000}
              height={1000}
              className="w-full  h-auto object-contain"
            />
          </div>
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
            <p className="text-base text-foreground uppercase tracking-wider">
              Years Legacy
            </p>
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
            <p className="text-base text-foreground uppercase tracking-wider">
              Projects
            </p>
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
            <p className="text-base text-foreground uppercase tracking-wider text-nowrap">
              Products manufactured
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
