import Hero from "@/components/sections/hero";
import Products from "@/components/sections/Products";
import { SuccessStories } from "@/components/sections/Testimonial";
import Contact from "@/components/sections/Contact";
import { Testimonials } from "@/components/ui/testimonials";
import Footer from "@/components/sections/footer";


export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <SuccessStories/>
      <Contact />
    </>
  );
}
