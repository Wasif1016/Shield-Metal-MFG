import Hero from "@/components/sections/hero";
import Products from "@/components/sections/Products";
import { SuccessStories } from "@/components/sections/Testimonial";
import Contact from "@/components/sections/Contact";



export default function Home() {
  return (
    <>
     <main className="overflow-x-hidden">
     <Hero />
      <Products />
      <SuccessStories/>
      <Contact />
     </main>
    </>
  );
}
