"use client";

import Image, { StaticImageData } from "next/image";
import PrimaryButton from "../(Common)/PrimaryButton";
import SectionBg from "../../assets/background/sunset-gradient.png";
import CardOneImg from "../../assets/fontend/CardOneImg.png";
import CardTwoImg from "../../assets/fontend/CardTwoImg.png";
import CardThreeImg from "../../assets/fontend/CardThreeImg.png";
import IconOne from "../../assets/icons/milestone.png";
import IconTwo from "../../assets/icons/action.png";
import IconThree from "../../assets/icons/monitor.png";

interface SolutionCard {
    id: string | number;
    iconSrc: StaticImageData;
    title: string;
    description: string;
    graphicSrc: StaticImageData;
    graphicAlt: string;
}

export default function CloudService() {
    const cardsData: SolutionCard[] = [
        {
            id: "solution-1",
            iconSrc: IconOne,
            title: "Identify Critical Milestones",
            description: "Ignyte’s compliance experts will help your CSP identify the steps your teams will need to take to achieve FedRAMP authorization and build an actionable strategy.",
            graphicSrc: CardOneImg,
            graphicAlt: "Milestones tracking flow with orange and blue accents",
        },
        {
            id: "solution-2",
            iconSrc: IconTwo,
            title: "Execute Your Action Plan",
            description: "Former DoD assessors and security managers are ready to help you complete key deliverables in two week sprints.",
            graphicSrc: CardTwoImg,
            graphicAlt: "Action plan execution timeline with cloud delivery endpoint",
        },
        {
            id: "solution-3",
            iconSrc: IconThree,
            title: "Streamline Asset Collection and Monitoring",
            description: "The Ignyte Platform is designed to help you collect your compliance data, artifacts, and policies and automate FedRAMP continuous monitoring to give your auditors real-time status updates.",
            graphicSrc: CardThreeImg,
            graphicAlt: "Continuous data visibility and automated compliance asset tracking",
        },
    ];

    return (
        <section
            className="w-full pt-25  pb-74 px-6 relative flex flex-col justify-center items-center"
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(24, 45, 67, 0.1) 62.68%, #182D43 100%), url(${SectionBg.src})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-[1620px] mx-auto w-full">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
                    <div className="">
                        <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold font-Inter text-[#ECEBEC] leading-[125%] tracking-[0%] w-full max-w-222.5 mb-8.5">
                            See How Ignyte Helps Cloud Service Providers Achieve ATO Rapidly and Efficiently
                        </h2>
                        <p className="font-Inter font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[120%] tracking-[-1.4%] text-[#ECEBEC]/80 max-w-187.75">
                            FedRAMP compliance requires buy-in across your engineering, cybersecurity, and go-to-market teams. Ignyte gives your company a turnkey partner and a platform to help you:
                        </p>
                    </div>

                    <div className="shrink-0">
                        <PrimaryButton href="/get-started" text=" Get Started" minWidth="min-w-[185px]" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {cardsData.map((card) => (
                        <div
                            key={card.id}
                            className="w-full lg:max-w-128.75 min-h-122 backdrop-blur-sm rounded-[30px] p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-white/20 pb-7"
                            style={{
                                background: `linear-gradient(204.15deg, rgba(146, 181, 215, 0) 7.03%, rgba(146, 181, 215, 0.4) 94.58%), #EAF0F6`
                            }}
                        >
                            <div className="relative">
                                <div className="w-21.5 h-21.5 flex items-center justify-center mb-6.5 relative overflow-hidden rounded-sm ">
                                    <Image
                                        src={card.iconSrc}
                                        alt={`${card.title} icon`}
                                        width={86}
                                        height={86}
                                        className="object-contain rounded-sm"
                                    />
                                </div>

                                <h3 className="font-Inter font-semibold text-[22px] sm:text-[24px] tracking-[0.8%] leading-[120%] text-[#1E374F] mb-14">
                                    {card.title}
                                </h3>

                                <p className="font-Inter font-normal text-[15px] sm:text-[18px] leading-[125%] tracking-[-0.9%] text-[#1E374F] max-w-106.25 mb-4.5">
                                    {card.description}
                                </p>
                            </div>

                            <div className="w-full h-70 relative rounded-[25px] overflow-hidden ">
                                <Image
                                    src={card.graphicSrc}
                                    alt={card.graphicAlt}
                                    fill
                                    sizes="(max-w: 768px) 100vw, 465px"
                                    className="object-cover border-5 border-[#FFFFFF5C] rounded-[25px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}