import CardSection from "@/components/(Certification)/CardSection";
import CloudService from "@/components/(Certification)/CloudService";
import CustomerStories from "@/components/(Certification)/CustomerStoriesSection";
import FedRamp from "@/components/(Certification)/FedRamp,";

export default function Certification() {
  return (
    <>
      <FedRamp />
      <CloudService />
      <CustomerStories />
      <CardSection />
    </>
  );
}