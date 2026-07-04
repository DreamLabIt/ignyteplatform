import Image from "next/image";
import Link from "next/link";
import FedRampImg from "../../assets/insight/fedramp.png";
import TradeshowImg from "../../assets/insight/tradeshow.png";
import PodcastImg from "../../assets/insight/podcast.png";

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
            isLogo: true // লোগোর জন্য আলাদা স্টাইলিং ট্রিগার করবে
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
        <section className="w-full bg-[#F8F9FA] pt-16 pb-16 md:py-20 px-6 sm:px-12 lg:px-37.5">
            <div className="max-w-[1621px] mx-auto">

                <h2 className="font-Inter font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[125%] text-[#1E374F] mb-13.5 text-left">
                    Access the Latest Compliance Insights
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-7.5">
                    {insights.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row items-start gap-5 w-full lg:max-w-133.75 min-h-58.25 text-left"
                        >
                            <div className="w-58.25 h-58.25 relative shrink-0 rounded-[25px] overflow-hidden bg-[#ECEBEC]">
                                <Image
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    fill
                                    className={item.isLogo ? "object-contain p-6" : "object-cover"}
                                    sizes="233px"
                                    priority
                                />
                            </div>

                            <div className="flex flex-col justify-between lg:min-h-58.25 py-1">
                                <div>
                                    <span className="inline-block bg-[#333333] text-white font-Inter font-medium text-[14px] px-3 py-1 rounded-[10px] mb-4 lg:mb-8">
                                        {item.badgeText}
                                    </span>

                                    <h3 className="font-Inter font-semibold text-[20px] md:text-[24px] leading-[135%] text-[#1E374F] ">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="mt-4">
                                    <Link
                                        href={item.linkHref}
                                        className="font-Inter font-semibold text-[16px] text-[#4B90CD] hover:text-[#3577b5] transition-colors border-b-2 border-[#4B90CD]/30 hover:border-[#4B90CD] pb-0.5"
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