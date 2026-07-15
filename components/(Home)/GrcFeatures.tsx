import Image from "next/image";
import Link from "next/link";
import BgGradientImg from "../../assets/background/anita-austvika.jpg";
import ComplianceTeamImg from "../../assets/fontend/compliance-team.png";
import RiskDashboardImg from "../../assets/fontend/risk-dashboard.png";
import RevenueChartImg from "../../assets/fontend/revenue-chart.png";
import PrimaryButton from "../(Common)/PrimaryButton";

function ArrowIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M9.61992 12.5466C9.49325 12.5466 9.36658 12.5 9.26658 12.4C9.07325 12.2066 9.07325 11.8866 9.26658 11.6933L12.9599 7.99996L9.26658 4.30662C9.07325 4.11329 9.07325 3.79329 9.26658 3.59996C9.45992 3.40662 9.77992 3.40662 9.97325 3.59996L14.0199 7.64662C14.2132 7.83996 14.2132 8.15996 14.0199 8.35329L9.97325 12.4C9.87325 12.5 9.74658 12.5466 9.61992 12.5466Z" fill="currentColor" />
            <path d="M13.5535 8.5H2.3335C2.06016 8.5 1.8335 8.27333 1.8335 8C1.8335 7.72667 2.06016 7.5 2.3335 7.5H13.5535C13.8268 7.5 14.0535 7.72667 14.0535 8C14.0535 8.27333 13.8268 8.5 13.5535 8.5Z" fill="currentColor" />
        </svg>
    );
}

export default function GrcFeatures() {
    return (
        <section className="relative w-full overflow-hidden -mt-px pt-14 lg:pt-42 px-6 lg:px-12.5 xl:px-6 pb-18"
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(241, 241, 241, 0.39) 70.82%, #F1F1F1 99.35%), url(${BgGradientImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="absolute top-0 left-0 right-0 h-30 md:h-50 lg:h-90 bg-linear-to-b from-[#F1F1F1] via-[F1F1F1]/50 to-transparent pointer-events-none" />
            <div className="max-w-[1620px] mx-auto">
                <div className="max-w-222.5 mb-10 lg:mb-16 text-left">
                    <h2 className="font-Inter font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[125%] text-[#1E374F] mb-7.75">
                        GRC Doesn’t Have To Be Overwhelming
                    </h2>
                    <p className="font-Inter font-medium text-[16px] md:text-[20px] leading-[125%] text-[#1E374F] max-w-190">
                        Conducting manual IT asset collection and network discovery is time-consuming and costly.
                        And even when an organization achieves compliance, these processes are difficult to
                        maintain and scale to other frameworks.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-29.75 w-full pb-20">
                        <div className="w-full lg:w-172.75 flex flex-col gap-6 md:gap-8.75 text-left order-1">
                            <h3 className="font-Inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-[125%] text-[#4F91CE]">
                                Access a Team of Compliance Experts
                            </h3>
                            <p className="font-Inter font-medium text-[16px] md:text-[20px] leading-[140%] md:leading-[125%] text-[#1E374F]/90">
                                Compliance isn’t one-size-fits-all. Businesses and organizations of all sizes need an assurance partner that will understand their unique needs.
                            </p>
                            <Link
                                href="/experts"
                                className="group inline-flex items-center gap-[21.83px] font-Inter font-semibold text-[16px] lg:text-[20px] text-[#1E374F] border-b-2 border-[#1E374F] hover:border-[#1E374F] pb-0 transition-all w-fit"
                            >
                                Meet our Compliance Experts
                                <span className="transition-transform group-hover:translate-x-1 duration-200">
                                    <ArrowIcon />
                                </span>
                            </Link>
                        </div>

                        <div className="w-full lg:w-202.5 h-62.5 sm:h-95 lg:h-122.75 relative order-2">
                            <Image
                                src={ComplianceTeamImg}
                                alt="Access a Team of Compliance Experts"
                                fill
                                className="object-contain lg:object-right"
                                sizes="(max-width: 1024px) 100vw, 810px"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-29.75 w-full pb-9">
                        <div className="w-full lg:w-172.75 flex flex-col gap-6 md:gap-8.75 text-left order-1 lg:order-2">
                            <h3 className="font-Inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-[125%] text-[#4F91CE]">
                                Centralize Risk Management
                            </h3>
                            <p className="font-Inter font-medium text-[16px] md:text-[20px] leading-[140%] md:leading-[125%] text-[#1E374F]/90">
                                Identify cyber risk and security gaps across all of your security and technology vendors, and pull them all into one dashboard for your team and auditors to view and act on.
                            </p>
                            <Link
                                href="/platform"
                                className="group inline-flex items-center gap-[21.83px] font-Inter font-semibold text-[16px] lg:text-[20px] text-[#1E374F] border-b-2 border-[#1E374F] hover:border-[#1E374F] transition-all w-fit"
                            >
                                Explore the GRC Platform
                                <span className="transition-transform group-hover:translate-x-1 duration-200">
                                    <ArrowIcon />
                                </span>
                            </Link>
                        </div>
                        <div className="w-full lg:w-202.5 h-62.5 sm:h-95 lg:h-122.75 relative order-2 lg:order-1">
                            <Image
                                src={RiskDashboardImg}
                                alt="Centralize Risk Management"
                                fill
                                className="object-contain lg:object-left"
                                sizes="(max-width: 1024px) 100vw, 810px"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-19.75 w-full ">

                        <div className="flex-1 w-full flex flex-col gap-6 md:gap-8.75 text-left order-1">
                            <div>
                                <h3 className="font-Inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-[125%] text-[#4F91CE] pb-8">
                                    Reclaim Lost Revenue
                                </h3>
                                <p className="font-Inter font-medium text-[16px] md:text-[20px] leading-[125%] text-[#1E374F] max-w-174.5">
                                    Every day your organization is out of compliance leaves revenue on the table. Automate manual processes and restore client confidence, so you can focus on strategic work.
                                </p>
                            </div>
                            <div className="ml-1 mt-1">
                                <PrimaryButton href="/get-started" text="Get Started" />
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-[910px] aspect-[910/691] relative order-2">
                            <Image
                                src={RevenueChartImg}
                                alt="Reclaim Lost Revenue"
                                fill
                                className="object-contain lg:object-right"
                                sizes="(max-width: 1024px) 100vw, 810px"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
