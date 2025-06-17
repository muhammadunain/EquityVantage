import About from "@/components/home/module/ui/About";
import Contact from "@/components/home/module/ui/Contact";
import Hero from "@/components/home/module/ui/Hero";
import Pricing from "@/components/home/module/ui/Pricing";
import Services from "@/components/home/module/ui/Services";
import Testimonials from "@/components/home/module/ui/Testimonials";

export default function Home() {
  return (
   <div className=" bg-slate-50">
     <Hero />
      <Services />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
   </div>
  );
}
