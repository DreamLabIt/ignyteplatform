import CardSection from "@/components/(Home)/CardSection";
import ComplianceInsights from "@/components/(Home)/ComplianceInsights";
import GrcFeatures from "@/components/(Home)/GrcFeatures";
import TrustedTeams from "@/components/(Home)/TrustedTeams";
export default function Home() {
  return (
    <>
      <TrustedTeams />
      <GrcFeatures />
      <CardSection />
      <ComplianceInsights />
    </>
  );
}