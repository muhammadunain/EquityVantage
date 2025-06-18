import About from "@/components/home/module/ui/About";
import Contact from "@/components/home/module/ui/Contact";
import Pricing from "@/components/home/module/ui/Pricing";
import { HeroScroll } from "@/components/home/module/ui/ScrollHero";
import Services from "@/components/home/module/ui/Services";
import Testimonials from "@/components/home/module/ui/Testimonials";

export default function Home() {
  return (
   <div className=" bg-slate-900">
     <HeroScroll/>
      <Services />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
   </div>
  );
}
