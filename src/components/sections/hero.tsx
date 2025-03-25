import Image from "next/image";
import CountUp from "../ui/count-up";

export default function Hero() {
  return (
    <div className="min-h-screen pt-16 pb-24 md:pt-40 md:pb-32 bg-black  flex flex-col items-center justify-center px-6">
      {/* Main Content Container */}
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Brand Name */}
        <h1 className="text-center flex items-center flex-col gap-2 mb-16">
          <span className="block text-7xl font-semibold tracking-wide text-white">
            Shield Metal
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white/80 mt-2">
            Manufacturing
          </span>
        </h1>


        <div className="flex flex-col md:flex-row gap-12 pb-20 md:pb-24 max-w-6xl mx-auto items-center justify-center">
        <p className="text-white text-2xl text-center md:text-left"> 
            We are a family owned and operated company that has been in the business of manufacturing since 1970.
          </p>
          <div className="">
            <img src="/logo.jpeg" alt="Manufacturing facility" className="w-full h-full max-h-[200px] md:max-h-[800px] object-contain" />
          </div>
          <p className="text-white text-2xl text-center md:text-left">
            Trusted by our customers for our 55 years of experience, 
            we provide quality North American made products.
          </p>
        </div>


        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center flex items-center flex-col gap-2">
          <CountUp
              from={0}
              to={55}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-4xl md:text-5xl lg:text-6xl font-semibold"
            />  
            <p className="text-base text-foreground uppercase tracking-wider">Years Legacy</p>
          </div>
          <div className="text-center flex items-center flex-col gap-2">
          <CountUp
              from={0}
              to={1000}
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
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-4xl md:text-5xl lg:text-6xl font-semibold"
            />
            <p className="text-base text-foreground uppercase tracking-wider">Quality Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
