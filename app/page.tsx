import ScheduleAudit from "@/components/(Common)/ScheduleAudit";
import CardSection from "@/components/(Home)/CardSection";
import ComplianceInsights from "@/components/(Home)/ComplianceInsights";
import ComplianceSection from "@/components/(Home)/ComplianceSection";
import GrcFeatures from "@/components/(Home)/GrcFeatures";
import Hero from "@/components/(Home)/Hero";
import TrustedTeams from "@/components/(Home)/TrustedTeams";
export default function Home() {
  console.log("Home: rendering",);
  return (
    <section className="bg-[#F1F1F1] ">
      <Hero />
      <TrustedTeams />
      <GrcFeatures />
      <ComplianceSection />
      <CardSection />
      <ComplianceInsights />
      <ScheduleAudit />
    </section>
  );
}