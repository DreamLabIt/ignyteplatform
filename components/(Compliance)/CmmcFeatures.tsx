"use client";

import Image from "next/image";
import PrimaryButton from "../(Common)/PrimaryButton";
import TopCardBg from "../../assets/background/top-card-bg.jpg";
import BottomCardBg from "../../assets/background/anita-austvika.jpg";
import CmmcTechImg from "../../assets/fontend/cmmc-tech-dashboard.png";
import AuditPrepareImg from "../../assets/fontend/audit-prepare-girl.png";

export default function CmmcFeatures() {
    return (
        <section className="w-full bg-white pt-16 pb-16 md:py-24 select-none">
            <div className="max-w-[1620px] mx-auto px-6 sm:px-12 lg:px-8 flex flex-col gap-8.75">

                <div className="w-full lg:h-157.5 rounded-[30px] overflow-hidden relative flex flex-col lg:flex-row items-stretch justify-between p-0 bg-[#E0F2FE]"
                    style={{
                        backgroundImage: `url(${TopCardBg.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="w-full lg:w-[52%] flex flex-col justify-center text-left p-6 sm:p-12 lg:pl-12.5 z-10 order-1 pt-8 sm:pt-12 lg:pt-0">
                        <h2 className="font-Inter font-semibold text-[26px] sm:text-[34px] md:text-[38px] lg:text-[40px] leading-[125%] text-[#1E374F] mb-5 sm:mb-6 lg:mb-8 tracking-tight">
                            Access End-to-End Technology and Services for CMMC Compliance
                        </h2>
                        <p className="font-Inter font-medium text-[15px] sm:text-[16px] md:text-[18px] leading-[150%] text-[#1E374F]/90 mb-6 sm:mb-8 lg:mb-10 max-w-172.75">
                            Ignyte makes it easy to replace the 18 point-specific solutions and the generic compliance vendors that claim to support CMMC with a centralized platform, and a team of experienced professionals you can consult at any stage on your compliance journey.
                        </p>

                        <div className="w-full flex items-center justify-start overflow-visible">
                            <div className="max-w-full sm:max-w-max bubble-wrapper">
                                <PrimaryButton href="/book-session" text="Book a Free Strategy Session" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[48%] flex items-end justify-end order-2 mt-8 lg:mt-0 pl-6 lg:pl-0">
                        <div className="w-full h-60 sm:h-87.5 md:h-105 lg:h-137.5 relative bg-[#8E8E8E33] rounded-tl-[35px] pt-3 pl-3 sm:pt-5 sm:pl-5 lg:pt-8 lg:pl-8 overflow-hidden flex items-end justify-end">
                            <div className="relative w-full h-full bg-white rounded-tl-3xl overflow-hidden flex items-end justify-end border border-[#8E8E8E33]">
                                <Image
                                    src={CmmcTechImg}
                                    alt="CMMC Technology Solutions Dashboard"
                                    fill
                                    className="object-bottom-right object-cover lg:object-contain origin-bottom-right"
                                    sizes="(max-width: 1024px) 100vw, 750px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:h-157.5 rounded-[30px] overflow-hidden relative flex flex-col lg:flex-row items-stretch justify-between p-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)) , url(${BottomCardBg.src})`,
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center top",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="w-full lg:w-[50%] flex flex-col justify-center text-left p-6 sm:p-12 lg:pl-12.5 lg:pr-0 z-10 order-1 pt-8 sm:pt-12 lg:pt-0">
                        <h2 className="font-Inter font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[125%] text-[#1E374F] mb-6.25 sm:mb-8.75 tracking-tight">
                            Proactively Prepare for Future Compliance Audits
                        </h2>
                        <p className="font-Inter font-medium text-[16px] md:text-[20px] leading-[125%] text-[#1E374F]/90 mb-6.25 sm:mb-8.75 max-w-172.75">
                            Get a head start on complying with future audits or additional frameworks. Your partnership with Ignyte on implementing structured processes, documentation, and asset inventories can help you prepare for next year&apos;s audits and achieve compliance with other frameworks faster.
                        </p>
                        <div className="w-full sm:max-w-88.75">
                            <PrimaryButton href="/book-session" text="Book a Free Strategy Session" />
                        </div>
                    </div>

                    <div className="w-full lg:w-[50%] h-80 sm:h-112.5 lg:h-full relative mt-10 lg:mt-0 order-2 flex items-end justify-center lg:justify-end overflow-hidden">
                        <div className="relative w-full h-full">
                            <Image
                                src={AuditPrepareImg}
                                alt="Proactively Prepare for Future Compliance Audits"
                                fill
                                className="object-contain object-bottom lg:object-bottom-right"
                                sizes="(max-width: 1024px) 100vw, 668px"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}