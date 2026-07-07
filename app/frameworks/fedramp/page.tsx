import CardSection from "@/components/(Certification)/CardSection";
import CloudService from "@/components/(Certification)/CloudService";
import CustomerStories from "@/components/(Certification)/CustomerStoriesSection";
import Hero from "@/components/(Certification)/Hero";

export default function Certification() {
  return (
    <>
      <Hero />
      <CloudService />
      <CustomerStories />
      <CardSection />
    </>
  );
}