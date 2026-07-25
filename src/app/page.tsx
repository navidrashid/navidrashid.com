import { Approach } from "@/components/sections/approach";
import { CareerGallery } from "@/components/sections/career-gallery";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { FeaturedIn } from "@/components/sections/featured-in";
import { Hero } from "@/components/sections/hero";
import { SplitFeature } from "@/components/sections/split-feature";
import { Statement } from "@/components/sections/statement";
import { ScrollRail } from "@/components/scroll-rail";
import { home } from "@/content/home";

export default function HomePage() {
  return (
    <main>
      <ScrollRail />
      <Hero />
      <FeaturedIn />
      <Statement />
      <CareerGallery />
      <Experience />
      <Approach />
      <SplitFeature data={home.venture} />
      <SplitFeature data={home.media} reverse />
      <Contact />
    </main>
  );
}
