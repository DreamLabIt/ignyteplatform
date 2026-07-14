"use client";
import LockIcon from "../../assets/icons/lock.svg";
import Storage from "../../assets/icons/storage.svg";
import Folder from "../../assets/icons/folder.svg";
import SectionBg from "../../assets/background/anita-austvika.jpg";
import FedrampCardSection, { GridCard } from "../(Certification)/CardFedramp";

export default function CardSection() {
  const CardsData: GridCard[] = [
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
      iconSrc: Storage,
      iconAlt: "Storage",
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
      iconSrc: Folder,
      iconAlt: "Folder",
      iconBgColor: "bg-[#1E374F]",
      cardBgColor: "bg-[#E2E1E2]",
      linkColor: "text-[#1E374F] border-[#1E374F]/30 hover:border-[#1E374F]"
    }
  ];

  return (
    <section className="w-full pb-16.5 -mt-1.25 pt-0.75"
      style={{
        backgroundImage: `linear-gradient(180deg, #F1F1F1 0%, rgba(241, 241, 241, 0.90) 29.88%), url(${SectionBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-[1920px] mx-auto px-6 pt-19.5 relative">
        <h2 className="font-Inter font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[125%] text-[#1E374F] text-center  max-w-222.5 mx-auto">
          Ignyte Supports The Compliance Journey From Start to Finish
        </h2>
        <FedrampCardSection title="" subtitle="" cards={CardsData} />
      </div>
    </section>
  );
}