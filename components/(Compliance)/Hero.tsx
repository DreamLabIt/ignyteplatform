"use client";

import Image from "next/image";
import PrimaryButton from "../(Common)/PrimaryButton";
import HeroBg from "../../assets/background/compliance-risk.jpg";
import CmmcDashboard from "../../assets/fontend/dashboard.png";
import PathIcon from "../../assets/icons/path-icon.png";
import AssetIcon from "../../assets/icons/asset-icon.png";
import SprsIcon from "../../assets/icons/sprs-icon.png.png";
import AuditIcon from "../../assets/icons/audit-icon.png";

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

export default function Hero() {
    return (
        <div
            className="w-full relative pt-72 pb-28 overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(241, 241, 241, 0.56) 51.58%, #F1F1F1 77.61%), url(${HeroBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <section className="w-full relative z-10 px-6 ">
                <div className="mx-auto w-full flex flex-col items-center">

                    <div className="w-full flex flex-col items-center text-center">
                        <h1 className="font-Inter font-semibold text-[36px] sm:text-[48px] md:text-[64px] leading-[120%] text-[#3B7CB3] tracking-[0%] mb-8">
                            Get CMMC Certified <span className="text-[#1E374F]">in Weeks, <br className="hidden sm:inline" /> Not Months</span>
                        </h1>

                        <p className="font-Inter font-medium text-[15px] sm:text-[16px] md:text-[20px] leading-[130%] text-[#4A607A] max-w-205 mb-8.5">
                            Ignyte gives you the expert support and automated platform you need to accelerate the CMMC certification process
                        </p>

                        <div>
                            <PrimaryButton href="/get-started" text="Talk to an Expert" minWidth="min-w-58.5" />
                        </div>
                    </div>

                    <div className="w-full max-w-[1620px] h-auto aspect-1620/753 relative rounded-2xl overflow-hidden mx-auto mt-24">
                        <Image
                            src={CmmcDashboard}
                            alt="Ignyte CMMC Compliance Dashboard Showcase"
                            fill
                            priority
                            sizes="(max-width: 1620px) 100vw, 1620px"
                            className="object-cover object-top"
                        />
                    </div>

                </div>

                <div className="absolute -bottom-2 left-0 right-0 h-[40%] bg-linear-to-t from-[#ebebec] to-transparent pointer-events-none z-10" />
            </section>

            <section className="w-full relative pt-38 z-10 px-5">
                <div className="absolute -top-2 left-0 right-0 h-[20%] bg-linear-to-b from-[#ebebec] to-transparent pointer-events-none z-10" />

                <div className="max-w-[1640px] mx-auto w-full flex flex-col items-center">

                    <div className="w-full text-center mb-12 md:mb-21 ">
                        <h2 className="font-Inter font-semibold text-[26px] sm:text-[32px] md:text-[40px] leading-[130%] text-[#1E374F] mb-7 tracking-[0%]">
                            <span className="text-[#3B7CB3]">Don’t Let Compliance Delays</span> Put Your <br className="hidden sm:inline" /> Contracts at Risk
                        </h2>
                        <div className="flex flex-col gap-6 font-inter font-medium text-[14px] sm:text-[16px] md:text-[20px] leading-[115%] tracking-[-1.3%] text-[#1E374F] max-w-256.25 mx-auto text-center">
                            <p>
                                Achieving CMMC compliance at any level requires businesses to understand hundreds of rules and assemble documentation, credentials, logs, documented policies, and more in an incredibly short timeframe.
                            </p>
                            <p className="-mt-2">
                                Without the right team and platform to guide you through your audit process, the CMMC certification process can be confusing and require an unsustainable amount of manual work.
                            </p>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 px-7">
                        {featureData.map((feature, index) => (
                            <div
                                key={index}
                                className="w-full bg-[#92B5D740] backdrop-blur-md border border-[#E2E2E2] rounded-3xl px-5.5 py-7 flex flex-col items-start transition-all duration-300 hover:bg-[#E3EFFC]"
                            >
                                <div className="flex items-center justify-center mb-10.5">
                                    <div className="relative w-21.5 h-21.5 ">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <h3 className="font-Inter font-semibold text-[18px] sm:text-[20px] lg:text-[32px] leading-[135%] text-[#1E374F] mb-4">
                                    {feature.title}
                                </h3>
                                <p className="font-Inter font-semibold text-[14px] sm:text-[18px] tracking-[-0.5%] leading-[125%] text-[#1E374F]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex justify-center">
                        <PrimaryButton href="/book-session" text="Get a Free Consultation" minWidth = "min-w-75" />
                    </div>
                </div>
            </section>
        </div>
    );
}