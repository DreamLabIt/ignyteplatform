import CardSection from "@/components/(Home)/CardSection";
import ComplianceInsights from "@/components/(Home)/ComplianceInsights";
import TrustedTeams from "@/components/(Home)/TrustedTeams";
export default function Home() {
  return (
    <>
      <TrustedTeams />
      <CardSection />
      <ComplianceInsights />
    </>
  );
}