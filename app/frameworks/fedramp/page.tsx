import CardSection from "@/components/(Certification)/CardSection";
import CloudService from "@/components/(Certification)/CloudService";
import CustomerStories from "@/components/(Certification)/CustomerStoriesSection";
import Hero from "@/components/(Certification)/Hero";
import ScheduleAudit from "@/components/(Common)/ScheduleAudit";

export default function Certification() {
  return (
    < section className="bg-[#F1F1F1]">
      <Hero />
      <CloudService />
      <CustomerStories />
      <CardSection />
      <ScheduleAudit
        title="Make FedRAMP Compliance 
       a Competitive Advantage"
        description="The Ignyte team is ready to help you align with the best practices you need for your DoD contracts, and to set you up with a sustainable way to reach additional compliance milestones as needed."
        buttonText="Request a Consultation"
      />
    </section>
  );
}