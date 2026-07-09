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

function ArrowIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M9.61992 12.5467C9.49325 12.5467 9.36658 12.5001 9.26658 12.4001C9.07325 12.2067 9.07325 11.8867 9.26658 11.6934L12.9599 8.00008L9.26658 4.30674C9.07325 4.11341 9.07325 3.79341 9.26658 3.60008C9.45992 3.40674 9.77992 3.40674 9.97325 3.60008L14.0199 7.64674C14.2132 7.84008 14.2132 8.16008 14.0199 8.35341L9.97325 12.4001C9.87325 12.5001 9.74658 12.5467 9.61992 12.5467Z" fill="currentColor" />
            <path d="M13.5535 8.5H2.3335C2.06016 8.5 1.8335 8.27333 1.8335 8C1.8335 7.72667 2.06016 7.5 2.3335 7.5H13.5535C13.8268 7.5 14.0535 7.72667 14.0535 8C14.0535 8.27333 13.8268 8.5 13.5535 8.5Z" fill="currentColor" />
        </svg>
    );
}

export default function HomeCardSection({
    title = "GRC Doesn't Have To Be Overwhelming",
    subtitle = "Conducting manual IT asset collection and network discovery is time-consuming and costly. And even when an organization achieves compliance, these processes are difficult to maintain and scale to other frameworks.",
    cards
}: HomeCardSectionProps): React.ReactElement {
    return (
        <section className="w-full py-10 px-6 lg:px-12.5 xl:px-6">
            <div className="max-w-[1620px] mx-auto">

                <div className="w-full max-w-196 mb-28">
                    <h2 className="font-Inter font-semibold text-[28px] sm:text-[36px] md:text-[40px] leading-[105%] text-[#1E374F] mb-8">
                        {title}
                    </h2>
                    <p className="font-Inter font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[120%] text-[#1E374F]/80">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7.5">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`flex flex-col justify-between p-6.75 rounded-[25px] w-full lg:max-w-128.75 min-h-97.5 transition-all duration-300 hover:shadow-sm ${card.cardBgColor}`}
                        >
                            <div>
                                <div className={`w-21.5 h-14 rounded-[25px] flex items-center justify-center mb-24 `}>
                                    <Image
                                        src={card.iconSrc}
                                        alt={card.iconAlt}
                                        width={86}
                                        height={86}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="font-Inter font-semibold text-[22px] sm:text-[24px] leading-[130%] text-[#1E374F] mb-5.75">
                                    {card.title}
                                </h3>

                                <p className="font-Inter font-normal text-[16px] sm:text-[18px] leading-[120%] text-[#1E374F] mb-6.25">
                                    {card.description}
                                </p>
                            </div>

                            <div>
                                <Link
                                    href={card.linkHref}
                                    className={`inline-flex items-center gap-4 font-Inter font-semibold text-[20px] group border-b pb-0.5 -pt-2 transition-all w-fit ${card.linkColor ? card.linkColor : "text-[#1E374F] border-[#1E374F] hover:border-[#1E374F]"
                                        }`}
                                >
                                    {card.linkText}
                                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                                        <ArrowIcon />
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
