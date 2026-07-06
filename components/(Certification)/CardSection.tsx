"use client";
import LockIcon from "../../assets/icons/lock.png";
import ShieldIcon from "../../assets/icons/shield.png";
import PatientIcon from "../../assets/icons/patient.png";
import SectionBg from "../../assets/background/anita-austvika.jpg"; 
import HomeCardSection, { HomeGridCard } from "../(Common)/CardGrid";

export default function CardSection() {
  const homeCardsData: HomeGridCard[] = [
    {
      id: "journey-card-1",
      title: "New to the FedRAMP Readiness Process?",
      description: "Connect with our experts to get an in-depth look at the certification requirements and what you need to automate the asset discovery and monitoring processes.",
      linkText: "Explore DIB Solutions",
      linkHref: "/explore-dib",
      iconSrc: LockIcon,
      iconAlt: "Lock",
      iconBgColor: "bg-[#4B90CD]",
      cardBgColor: "bg-[#EBF3FA]", 
      linkColor: "text-[#4B90CD] border-[#4B90CD]/30 hover:border-[#4B90CD]"
    },
    {
      id: "journey-card-2",
      title: "Need to Automate FedRAMP Maintenance?",
      description: "Get a demo of the Ignyte Platform's FedRAMP SSP automations to help you achieve visibility over your organization's estate and generate reporting as needed.",
      linkText: "Explore the Platform",
      linkHref: "/explore-the-platform",
      iconSrc: ShieldIcon,
      iconAlt: "Shield",
      iconBgColor: "bg-[#F7941D]",
      cardBgColor: "bg-[#FCECDA]", 
      linkColor: "text-[#F7941D] border-[#F7941D]/30 hover:border-[#F7941D]"
    },
    {
      id: "journey-card-3",
      title: "Ready to Achieve Higher Certifications?",
      description: "The Ignyte Platform's asset/document discovery and management is designed to help you re-apply your FedRAMP compliance progress to other frameworks.",
      linkText: "Explore Additional Frameworks",
      linkHref: "/additional-frameworks",
      iconSrc: PatientIcon,
      iconAlt: "Patient Data",
      iconBgColor: "bg-[#1E374F]",
      cardBgColor: "bg-[#E2E1E2]", 
      linkColor: "text-[#1E374F] border-[#1E374F]/30 hover:border-[#1E374F]"
    }
  ];

  return (
    <section 
      className="w-full pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.86)), url(${SectionBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-[1620px] mx-auto px-6">
        <h2 className="font-Inter font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[125%] text-[#1E374F] text-center mb-16 max-w-[890px] mx-auto tracking-tight">
          Ignyte Supports The Compliance Journey From Start to Finish
        </h2>

        <HomeCardSection title="" subtitle="" cards={homeCardsData} />
      </div>
    </section>
  );
}