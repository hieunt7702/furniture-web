import { TopNavBar } from "@/components/shared/TopNavBar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/home/Hero";
import { CategorySection } from "@/components/home/CategorySection";
import { AboutSection } from "@/components/home/AboutSection";
import { BigSaleBanner } from "@/components/home/BigSaleBanner";
import { CountdownSection } from "@/components/home/CountdownSection";
import { PartnershipSection } from "@/components/home/PartnershipSection";
import { ElevateSpaceSection } from "@/components/home/ElevateSpaceSection";
import { BlogSection } from "@/components/home/BlogSection";
import { FAQSection } from "@/components/home/FAQSection";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        <Hero />
        <CategorySection />
        <AboutSection />
        <BigSaleBanner />
        <CountdownSection />
        <PartnershipSection />
        <ElevateSpaceSection />
        <BlogSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
