"use client";
import Image from "next/image";
import SectionBg from "../../assets/background/anita-austvika.jpg";
import RightGraphic from "../../assets/fontend/Illustration.png";
import PrimaryButton from "../(Common)/PrimaryButton";

export default function FedRamp() {
    return (
        <section
            className="w-full min-h-162.5 py-16 px-6 relative flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.86)), url(${SectionBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-[1620px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">

                <div className="w-full lg:max-w-222.5 flex flex-col items-start">
                    <h2 className="font-Inter font-semibold text-[32px] sm:text-[36px] md:text-[40px] leading-[125%] text-[#1E374F] mb-6 tracking-tight max-w-222.5">
                        FedRAMP Authorization Requires Efficient Processes and Expert Guidance
                    </h2>

                    <p className="font-Inter font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[125%] text-[#1E374F]/90 max-w-222.5 mb-8">
                        Collecting, cataloging, and linking all the evidence you need to prove FedRAMP
                        compliance can be manual, time-consuming, and confusing. Ignyte is the only
                        assurance solution that gives your business a personalized and scalable process
                        for achieving FedRAMP Authority to Operate (ATO), and the platform you need to
                        automate continuous monitoring and evidence collection.
                    </p>

                    <div className="shrink-0">
                        <PrimaryButton href="/free-consultation" text="Get a Free Consultation" />
                    </div>
                </div>

                <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center">
                    <div className="w-[320px] sm:w-105 lg:w-124.75 h-81 sm:h-106.25 lg:h-126.25 relative">
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
        </section>
    );
}