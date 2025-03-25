import Hero from "@/components/sections/hero";
import Products from "@/components/sections/Products";
import { SuccessStories } from "@/components/sections/Testimonial";
import Contact from "@/components/sections/Contact";
import { Testimonials } from "@/components/ui/testimonials";


export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <SuccessStories/>
      <Contact />
      <div className="block">
      <Testimonials />
    </div>
    </>
  );
}
