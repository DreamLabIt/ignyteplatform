import Image from "next/image";
import Link from "next/link";
import BgGradientImg from "../../assets/background/anita-austvika.jpg";
import ComplianceTeamImg from "../../assets/fontend/compliance-team.png";
import RiskDashboardImg from "../../assets/fontend/risk-dashboard.png";
import RevenueChartImg from "../../assets/fontend/revenue-chart.png";
import PrimaryButton from "../(Common)/PrimaryButton";

export default function GrcFeatures() {
    return (
        <section className="relative w-full overflow-hidden pt-12 lg:pt-16 select-none min-h-auto lg:min-h-286.75 px-1 sm:px-6 lg:px-6">

            <div className="absolute inset-0 -z-10 w-full h-full mx-auto">
                <Image
                    src={BgGradientImg}
                    alt="Background Gradient Layout"
                    fill
                    className="object-cover object-center pointer-events-none"
                    priority
                />

                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75))`,
                    }}
                />

                <div className="absolute top-0 left-0 right-0 h-22 bg-linear-to-b from-[#F8F9FA] via-white/50 to-transparent pointer-events-none" />
            </div>

            <div className="max-w-[1620px] mx-auto px-6 sm:px-12 lg:px-12.5 xl:px-0">

                <div className="max-w-222.5 mb-10 lg:mb-15 text-left">
                    <h2 className="font-Inter font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[125%] text-[#1E374F] mb-4">
                        GRC Doesn’t Have To Be Overwhelming
                    </h2>
                    <p className="font-Inter font-medium text-[16px] md:text-[20px] leading-[135%] md:leading-[125%] text-[#1E374F]/90 max-w-190">
                        Conducting manual IT asset collection and network discovery is time-consuming and costly.
                        And even when an organization achieves compliance, these processes are difficult to
                        maintain and scale to other frameworks.
                    </p>
                </div>

                <div className="flex flex-col gap-6">

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-29.75 w-full min-h-auto lg:min-h-122.75">
                        <div className="w-full lg:w-172.75 flex flex-col gap-6 md:gap-8.75 text-left order-1">
                            <div>
                                <h3 className="font-Inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-[125%] text-[#4F91CE]">
                                    Access a Team of Compliance Experts
                                </h3>
                            </div>
                            <p className="font-Inter font-medium text-[16px] md:text-[20px] leading-[140%] md:leading-[125%] text-[#1E374F]/90">
                                Compliance isn’t one-size-fits-all. Businesses and organizations of all sizes need an assurance partner that will understand their unique needs.
                            </p>
                            <div>
                                <Link
                                    href="/experts"
                                    className="group inline-flex items-center gap-2 font-Inter font-semibold text-[16px] text-[#1E374F] border-b-2 border-[#1E374F]/20 hover:border-[#1E374F] pb-1 transition-all"
                                >
                                    Meet our Compliance Experts
                                    <span className="transition-transform group-hover:translate-x-1 duration-200">&rarr;</span>
                                </Link>
                            </div>
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

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-29.75 w-full min-h-auto lg:min-h-122.75">
                        <div className="w-full lg:w-172.75 flex flex-col gap-6 md:gap-8.75 text-left order-1 lg:order-2">
                            <div>
                                <h3 className="font-Inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-[125%] text-[#4F91CE]">
                                    Centralize Risk Management
                                </h3>
                            </div>
                            <p className="font-Inter font-medium text-[16px] md:text-[20px] leading-[140%] md:leading-[125%] text-[#1E374F]/90">
                                Identify cyber risk and security gaps across all of your security and technology vendors, and pull them all into one dashboard for your team and auditors to view and act on.
                            </p>
                            <div>
                                <Link
                                    href="/platform"
                                    className="group inline-flex items-center gap-2 font-Inter font-semibold text-[16px] text-[#1E374F] border-b-2 border-[#1E374F]/20 hover:border-[#1E374F] pb-1 transition-all"
                                >
                                    Explore the GRC Platform
                                    <span className="transition-transform group-hover:translate-x-1 duration-200">&rarr;</span>
                                </Link>
                            </div>
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

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-29.75 w-full min-h-auto lg:min-h-122.75">
                        <div className="w-full lg:w-172.75 flex flex-col gap-6 md:gap-8.75 text-left order-1">
                            <div>
                                <h3 className="font-Inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-[125%] text-[#4F91CE]">
                                    Reclaim Lost Revenue
                                </h3>
                            </div>
                            <p className="font-Inter font-medium text-[16px] md:text-[20px] leading-[140%] md:leading-[125%] text-[#1E374F]/90">
                                Every day your organization is out of compliance leaves revenue on the table. Automate manual processes and restore client confidence, so you can focus on strategic work.
                            </p>
                            <div>
                                <PrimaryButton href="/get-started" text="Get Started" />
                            </div>
                        </div>
                        <div className="w-full lg:w-202.5 h-62.5 sm:h-95 lg:h-122.75 relative order-2">
                            <Image
                                src={RevenueChartImg}
                                alt="Reclaim Lost Revenue"
                                fill
                                className="object-contain lg:object-right"
                                sizes="(max-width: 1024px) 100vw, 810px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}