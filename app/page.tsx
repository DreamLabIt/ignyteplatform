import CardSection from "@/components/(Home)/CardSection";
import ComplianceInsights from "@/components/(Home)/ComplianceInsights";
import ComplianceSection from "@/components/(Home)/ComplianceSection";
import GrcFeatures from "@/components/(Home)/GrcFeatures";
import TrustedTeams from "@/components/(Home)/TrustedTeams";
export default function Home() {
  console.log("Home: rendering",);
  return (
    <>
      <TrustedTeams />
      <GrcFeatures />
      <ComplianceSection />
      <CardSection />
      <ComplianceInsights />
    </>
  );
}