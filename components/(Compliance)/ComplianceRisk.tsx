"use client";

import Image from "next/image";
import SectionBg from "../../assets/background/compliance-risk.jpg";
import PathIcon from "../../assets/icons/path-icon.png";
import AssetIcon from "../../assets/icons/asset-icon.png";
import SprsIcon from "../../assets/icons/sprs-icon.png.png";
import AuditIcon from "../../assets/icons/audit-icon.png";
import PrimaryButton from "../(Common)/PrimaryButton";
interface FeatureItem {
    icon: string;
    title: string;
    description: string;
}

const featureData: FeatureItem[] = [
    {
        icon: PathIcon.src,
        title: "Get Your Customized Path to Compliance",
        description: "The Ignyte team will help you build an actionable plan to achieve CMMC certification at the level your business needs.",
    },
    {
        icon: AssetIcon.src,
        title: "Automated Asset Inventory",
        description: "The Ignyte Platform's purpose-built automations will generate System Security Plans (SSPs), Plans of Action and Milestones (POA&M), policies, and network diagrams to bring your documentation and processes up to speed, and simplify updates as needed.",
    },
    {
        icon: SprsIcon.src,
        title: "Increase Your SPRS Score",
        description: "Ignyte's tailored consulting will give you the guidance you need to define your CMMC boundaries, implement the processes you need to stay secure, and close your visibility gaps.",
    },
    {
        icon: AuditIcon.src,
        title: "Achieve Proactive Audit Readiness",
        description: "Once you're certified, Ignyte's team is prepared to support you for future audits with minimal friction. Our platform automations lay the foundations for your success, and our consulting team is ready to help you cross the finish line.",
    },
];

export default function ComplianceRisk() {
    return (
        <section
            className="w-full relative py-16 md:py-20 overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(241, 241, 241, 0.56) 51.58%, #F1F1F1 77.61%), url(${SectionBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-[1620px] mx-auto px-6 sm:px-12 lg:px-8 w-full flex flex-col">

                <div className="w-full  text-center mb-12 md:mb-16">
                    <h2 className="font-Inter font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[125%] text-[#1E374F] mb-6 tracking-tight">
                        <span className="text-[#4F91CE]">Don’t Let Compliance Delays</span> Put Your Contracts at Risk
                    </h2>
                    <div className="flex flex-col gap-4 font-Inter font-medium text-[16px] md:text-[20px] leading-[140%] text-[#1E374F]/90 max-w-237.5 mx-auto">
                        <p>
                            Achieving CMMC compliance at any level requires businesses to understand hundreds of rules and assemble documentation, credentials, logs, documented policies, and more in an incredibly short timeframe.
                        </p>
                        <p>
                            Without the right team and platform to guide you through your audit process, the CMMC certification process can be confusing and require an unsustainable amount of manual work.
                        </p>
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
                    {featureData.map((feature, index) => (
                        <div
                            key={index}
                            className="w-full min-h-83.25 bg-[#E2E2E2]/50 backdrop-blur-sm border border-white/40 rounded-3xl p-6 sm:p-8 flex flex-col items-start transition-all duration-300 hover:shadow-md"
                        >
                            <div className=" rounded-[20px] flex items-center justify-center mb-8">
                                <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <h3 className="font-Inter font-semibold text-[22px] sm:text-[26px] lg:text-[32px] leading-[125%] text-[#1E374F] mb-4">
                                {feature.title}
                            </h3>
                            <p className="font-Inter font-regular text-[15px] sm:text-[16px] lg:text-[18px] leading-[140%] text-[#1E374F]/85">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="w-full flex justify-center mt-4">
                    <PrimaryButton href="/book-session" text="Get a Free Consultation" />
                </div>
            </div>
        </section>
    );
}