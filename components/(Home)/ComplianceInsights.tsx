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
        <section className="w-full mt-12 pb-22 px-6 lg:px-12.5 xl:px-6">
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
