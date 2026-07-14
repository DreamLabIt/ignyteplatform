import ScheduleAudit from "@/components/(Common)/ScheduleAudit";
import CmmcFeatures from "@/components/(Compliance)/CmmcFeatures";
import Hero from "@/components/(Compliance)/Hero";
import Testimonials from "@/components/(Compliance)/Testimonials";

export default function Compliance() {
  return (
    <>
      <Hero />
      <Testimonials />
      <CmmcFeatures />
      <ScheduleAudit
        title="Make CMMC Compliance a Competitive Advantage"
        description="The Ignyte team is ready to help you align with the best practices you need for your DoD contracts, and to set you up with a sustainable way to reach additional compliance milestones as needed."
        buttonText="Request a Consultation"
      />
    </>
  );
}