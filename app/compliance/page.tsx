import CmmcFeatures from "@/components/(Compliance)/CmmcFeatures";
import Hero from "@/components/(Compliance)/Hero";
import Testimonials from "@/components/(Compliance)/Testimonials";

export default function Compliance() {
  return (
    <>
      <Hero />
      {/* <ComplianceRisk /> */}
      <Testimonials />
      <CmmcFeatures />
    </>
  );
}