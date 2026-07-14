"use client";
import Image from "next/image";
import PrimaryButton from "../(Common)/PrimaryButton";
import HeroBg from "../../assets/background/navbar-bg.png";
import DashboardMockup from "../../assets/fontend/risk-dashboard.png";
import RightGraphic from "../../assets/fontend/Illustration.png";

export default function Hero() {
    return (
        <section
            className="w-full min-h-screen pt-36 sm:pt-62.5 pb-25 px-6 relative overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(241, 241, 241, 0.21) 51.58%, #F1F1F1 100%), url(${HeroBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-[1620px] mx-auto w-full flex flex-col items-center relative z-10">
                <div className="max-w-262.5 w-full flex flex-col items-center text-center gap-3 ">

                    <div className="inline-flex items-center justify-center bg-[#1E374F]  rounded-[25px] py-1.5 px-4">
                        <span className="font-Inter font-medium text-[16px] sm:text-[18px] leading-[100%] text-[#ECEBEC] ">
                            Achieve Authority to Operate Faster
                        </span>
                    </div>

                    <h1 className="font-Inter font-semibold text-[40px] sm:text-[54px] md:text-[64px] leading-[115%] text-[#4F91CE] tracking-[-1%] max-w-262.5 ">
                        FedRAMP shouldn’t take years!
                        <br />
                        <span className="text-[#1E374F]">Get approved in 6 months or less.</span>
                    </h1>

                    <div className="flex flex-col gap-3 pt-6">
                        <p className="font-Inter font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[145%] text-[#1E374F] max-w-215">
                            Simplify FedRAMP authorization with real practitioners and a purpose-built platform
                        </p>
                        <p className="font-Inter font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[126%] text-[#1E374F] max-w-215">
                            Ignyte equips your organization with a platform that helps you implement processes
                            required for FedRAMP compliance, backed by a team of seasoned consultants.
                        </p>
                    </div>

                    <div className="mt-5">
                        <PrimaryButton href="/talk-expert" text="Talk to an Expert" minWidth="min-w-[234px]" />
                    </div>
                </div>

                <div className="w-full max-w-323.5 aspect-1294/880 relative pt-12 sm:pt-20 md:pt-24 lg:pt-32 mx-auto px-4 sm:px-6 md:px-8">
                    <div className="w-full h-full relative">
                        <div className="w-full h-full relative rounded-t-xl sm:rounded-t-2xl md:rounded-t-[20px] overflow-hidden">
                            <Image
                                src={DashboardMockup}
                                alt="Ignyte Compliance Management Platform Hero Interface Preview"
                                fill
                                priority
                                sizes="(max-width: 1294px) 100vw, 1294px"
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-2 pt-12 lg:pt-55">

                    <div className="w-full lg:max-w-208 flex flex-col items-start">
                        <h2 className="font-Inter font-semibold text-[32px] sm:text-[36px] md:text-[40px] leading-[125%] text-[#1E374F] mb-9 tracking-[0%]">
                            FedRAMP Authorization Requires Efficient Processes and Expert Guidance
                        </h2>

                        <p className="font-Inter font-medium max-w-[760px] text-[16px] sm:text-[18px] md:text-[20px] tracking-[0%] leading-[125%] text-[#1E374F] mb-9">
                            Collecting, cataloging, and linking all the evidence you need to prove FedRAMP
                            compliance can be manual, time-consuming, and confusing. Ignyte is the only
                            assurance solution that gives your business a personalized and scalable process
                            for achieving FedRAMP Authority to Operate (ATO), and the platform you need to
                            automate continuous monitoring and evidence collection.
                        </p>

                        <div className="shrink-0">
                            <PrimaryButton href="/free-consultation" text="Get a Free Consultation" minWidth="min-w-[305px]" />
                        </div>
                    </div>

                    <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center">
                        <div className="w-80 sm:w-105 lg:w-144.75 h-80 sm:h-106.25 lg:h-126.25 relative">
                            <Image
                                src={RightGraphic}
                                alt="FedRAMP automated compliance mapping process diagram"
                                fill
                                sizes="(max-w: 768px) 100vw, 499px"
                                priority
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
