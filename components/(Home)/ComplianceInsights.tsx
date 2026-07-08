import Image from "next/image";
import Link from "next/link";
import FedRampImg from "../../assets/insight/fedramp.png";
import TradeshowImg from "../../assets/insight/tradeshow.png";
import PodcastImg from "../../assets/insight/podcast.png";

function ArrowIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M9.61992 12.5467C9.49325 12.5467 9.36658 12.5001 9.26658 12.4001C9.07325 12.2067 9.07325 11.8867 9.26658 11.6934L12.9599 8.00008L9.26658 4.30674C9.07325 4.11341 9.07325 3.79341 9.26658 3.60008C9.45992 3.40674 9.77992 3.40674 9.97325 3.60008L14.0199 7.64674C14.2132 7.84008 14.2132 8.16008 14.0199 8.35341L9.97325 12.4001C9.87325 12.5001 9.74658 12.5467 9.61992 12.5467Z" fill="currentColor" />
            <path d="M13.5535 8.5H2.3335C2.06016 8.5 1.8335 8.27333 1.8335 8C1.8335 7.72667 2.06016 7.5 2.3335 7.5H13.5535C13.8268 7.5 14.0535 7.72667 14.0535 8C14.0535 8.27333 13.8268 8.5 13.5535 8.5Z" fill="currentColor" />
        </svg>
    );
}

export default function ComplianceInsights() {
    const insights = [
        {
            id: "insight-1",
            imageSrc: FedRampImg,
            imageAlt: "What Happened to the FedRAMP JAB Process?",
            badgeText: "Article",
            title: "What Happened to the FedRAMP JAB Process?",
            linkText: "Read the Article",
            linkHref: "/insights/fedramp-jab-process",
            isLogo: true
        },
        {
            id: "insight-2",
            imageSrc: TradeshowImg,
            imageAlt: "Next Event / Industry Tradeshow",
            badgeText: "Event",
            title: "Next Event / Industry Tradeshow",
            linkText: "Register Now",
            linkHref: "/events/industry-tradeshow",
            isLogo: false
        },
        {
            id: "insight-3",
            imageSrc: PodcastImg,
            imageAlt: "The Reckless Compliance Podcast",
            badgeText: "Podcast",
            title: "The Reckless Compliance Podcast",
            linkText: "Listen to the Latest",
            linkHref: "/podcast/reckless-compliance",
            isLogo: false
        }
    ];

    return (
        <section className="w-full mt-12 pb-24 px-6 lg:px-12.5 xl:px-6">
            <div className="max-w-[1620px] mx-auto">

                <h2 className="font-Inter font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[125%] text-[#1E374F] mb-20 text-left">
                    Access the Latest Compliance Insights
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4">
                    {insights.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row items-start gap-4.5 w-full text-left"
                        >
                            <div className="w-full sm:w-50 md:w-40 xl:w-58 aspect-square relative rounded-[25px] overflow-hidden bg-[#ECEBEC] shrink-0 shadow-sm mx-auto sm:mx-0">
                                <Image
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    fill
                                    className={item.isLogo ? "object-contain p-6" : "object-cover"}
                                    sizes="(max-width: 640px) 100vw, 233px"
                                    priority
                                />
                            </div>


                            <div className="flex flex-col flex-1 justify-between sm:min-h-50 md:min-h-40 xl:min-h-48.25 py-1 w-full">
                                <div>
                                    <span className="inline-block bg-[#333333] text-white font-Inter font-medium text-[14px] px-4 py-1 rounded-[10px] mb-4">
                                        {item.badgeText}
                                    </span>

                                    <h3 className="font-Inter font-semibold text-[18px] xl:text-[24px] leading-[135%] text-[#1E374F] mb-2 pr-2">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="mt-10">
                                    <Link
                                        href={item.linkHref}
                                        className="inline-block font-Inter font-bold text-[20px] text-[#4B90CD] hover:text-[#3577b5] transition-colors border-b-2 border-[#4B90CD]/30 hover:border-[#4B90CD] pb-0.5"
                                    >
                                        {item.linkText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
