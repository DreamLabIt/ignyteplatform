import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export interface HomeGridCard {
    id: string | number;
    iconSrc: StaticImageData;
    iconAlt: string;
    iconBgColor: string;
    cardBgColor: string;
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
    linkColor?: string;
}

interface HomeCardSectionProps {
    title?: string;
    subtitle?: string;
    cards: HomeGridCard[];
}

export default function HomeCardSection({
    title = "GRC Doesn't Have To Be Overwhelming",
    subtitle = "Conducting manual IT asset collection and network discovery is time-consuming and costly. And even when an organization achieves compliance, these processes are difficult to maintain and scale to other frameworks.",
    cards
}: HomeCardSectionProps): React.ReactElement {
    return (
        <section className="w-full  py-10 px-6">
            <div className="max-w-[1620px] mx-auto">

                <div className="w-full max-w-222.5 mb-10">
                    <h2 className="font-Inter font-semibold text-[28px] sm:text-[36px] md:text-[40px] leading-[125%] text-[#1E374F] mb-4">
                        {title}
                    </h2>
                    <p className="font-Inter font-medium text-[15px] sm:text-[16px] md:text-[18px] leading-[140%] text-[#1E374F]/80">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7.5">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`flex flex-col justify-between p-8.75 rounded-[25px] w-full lg:max-w-128.75 min-h-97.5 transition-all duration-300 hover:shadow-sm ${card.cardBgColor}`}
                        >
                            <div>
                                <div className={`w-21.5 h-21.5 rounded-[20px] flex items-center justify-center mb-8 ${card.iconBgColor}`}>
                                    <Image
                                        src={card.iconSrc}
                                        alt={card.iconAlt}
                                        width={45}
                                        height={45}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="font-Inter font-semibold text-[20px] sm:text-[22px] leading-[130%] text-[#1E374F] mb-4">
                                    {card.title}
                                </h3>

                                <p className="font-Inter font-normal text-[15px] sm:text-[16px] leading-[150%] text-[#1E374F]/80 mb-8">
                                    {card.description}
                                </p>
                            </div>

                            <div>
                                <Link
                                    href={card.linkHref}
                                    className={`inline-flex items-center gap-2 font-Inter font-medium text-[15px] group border-b pb-0.5 transition-all ${card.linkColor ? card.linkColor : "text-[#1E374F] border-[#1E374F]/30 hover:border-[#1E374F]"
                                        }`}
                                >
                                    {card.linkText}
                                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
