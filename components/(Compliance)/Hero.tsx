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

            className="w-full relative pt-32 pb-8 overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(241, 241, 241, 0.56) 51.58%, #F1F1F1 77.61%), url(${HeroBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <section className="w-full relative z-10 px-6">
                <div className="mx-auto w-full flex flex-col items-center">

                    <div className="w-full flex flex-col items-center text-center">
                        <h1 className="font-Inter font-bold text-[36px] sm:text-[48px] md:text-[56px] leading-[120%] text-[#3B7CB3] tracking-tight mb-4">
                            Get CMMC Certified <span className="text-[#1E374F]">in Weeks, <br className="hidden sm:inline" /> Not Months</span>
                        </h1>

                        <p className="font-Inter font-medium text-[15px] sm:text-[16px] md:text-[17px] leading-[150%] text-[#4A607A] max-w-162.5 mb-6">
                            Ignyte gives you the expert support and automated platform you need to accelerate the CMMC certification process
                        </p>

                        <div>
                            <PrimaryButton href="/get-started" text="Talk to an Expert" />
                        </div>
                    </div>

                    <div className="w-full max-w-275 aspect-16/9.5 relative rounded-2xl overflow-hidden">
                        <div className="w-full h-full relative rounded-xl overflow-hidden">
                            <Image
                                src={CmmcDashboard}
                                alt="Ignyte CMMC Compliance Dashboard Showcase"
                                fill
                                priority
                                sizes="(max-w: 1200px) 100vw, 1100px"
                                className="object-cover object-top"
                            />
                        </div>
                    </div>

                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-linear-to-t from-[#F3F9FE] to-transparent pointer-events-none z-10" />
            </section>



            <section className="w-full relative pt-20 z-10 px-6">
                <div className="absolute top-0 left-0 right-0 h-[10%] bg-linear-to-b from-[#F3F9FE] to-transparent pointer-events-none z-10" />

                <div className="max-w-310 mx-auto w-full flex flex-col items-center">

                    <div className="w-full text-center mb-12 md:mb-16 max-w-240">
                        <h2 className="font-Inter font-bold text-[26px] sm:text-[32px] md:text-[38px] leading-[130%] text-[#1E374F] mb-6 tracking-tight">
                            <span className="text-[#3B7CB3]">Don’t Let Compliance Delays</span> Put Your <br className="hidden sm:inline" /> Contracts at Risk
                        </h2>
                        <div className="flex flex-col gap-4 font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[160%] text-[#4A607A] max-w-205 mx-auto">
                            <p>
                                Achieving CMMC compliance at any level requires businesses to understand hundreds of rules and assemble documentation, credentials, logs, documented policies, and more in an incredibly short timeframe.
                            </p>
                            <p>
                                Without the right team and platform to guide you through your audit process, the CMMC certification process can be confusing and require an unsustainable amount of manual work.
                            </p>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                        {featureData.map((feature, index) => (
                            <div
                                key={index}
                                className="w-full bg-[#E3EFFC]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-start transition-all duration-300 hover:bg-[#E3EFFC]/70 shadow-xs"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-6 ">
                                    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <h3 className="font-Inter font-bold text-[18px] sm:text-[20px] lg:text-[22px] leading-[135%] text-[#1E374F] mb-3">
                                    {feature.title}
                                </h3>
                                <p className="font-Inter font-normal text-[14px] sm:text-[15px] leading-[150%] text-[#4A607A]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex justify-center">
                        <PrimaryButton href="/book-session" text="Get a Free Consultation" />
                    </div>
                </div>
            </section>
        </div>
    );
}