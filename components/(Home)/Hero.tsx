"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PrimaryButton from "../(Common)/PrimaryButton";
import HeroBgImg from "../../assets/background/navbar-bg.png";
import ManWithTablet from "../../assets/fontend/tablet.png";
import FedRampLogo from "../../assets/badges/FedRampBadge.png";
import CyberLogo from "../../assets/badges/cyber.png";
import VeteranLogo from "../../assets/badges/veteran.png";
import IasLogo from "../../assets/badges/Ias.png";

const rotatingWords = ["CMMC", "FedRAMP", "ISO 27001"];

export default function MainHero() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section>
            <div
                className="w-full min-h-239.5 relative overflow-hidden flex items-center px-6 lg:px-0 pt-24 lg:pt-8"
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(241, 241, 241, 0.56) 51.58%, #F8F9FA 87.61%), url(${HeroBgImg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="max-w-[1620px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 ">

                    {/* Left content */}
                    <div className="lg:col-span-6 flex flex-col items-start justify-center gap-0.5 max-w-220 pt-10">

                        {/* Top badges */}
                        <div className="flex items-center gap-2.5 pb-2">
                            <span className="w-24.25 h-8 flex items-center justify-center rounded-[25px] bg-[#4F91CE] text-[#ECEBEC] font-Inter font-medium text-[18px] opacity-70 px-3.75 py-1.25 ">
                                Consult
                            </span>
                            <span className="w-28.75 h-8 flex items-center justify-center rounded-[25px] bg-[#F7941D] text-[#ECEBEC] font-Inter font-medium text-[18px] opacity-70 px-3.75 py-1.25">
                                Automate
                            </span>
                            <span className="w-19 h-8 flex items-center justify-center rounded-[25px] bg-[#1E374F] text-[#ECEBEC] font-Inter font-medium text-[18px] opacity-70 px-3.75 py-1.25">
                                Audit
                            </span>
                        </div>

                        {/* Heading with rotating word */}
                        <h1 className="font-Inter font-semibold text-[36px] sm:text-[48px] lg:text-[64px] leading-[115%] tracking-[-1%] text-[#1E374F] pb-12">
                            <span className="inline-flex items-baseline gap-3">
                                Get
                                <span className="relative inline-block h-9.5 md:h-16 overflow-hidden align-bottom min-w-[30ch]">
                                    {rotatingWords.map((word, i) => (
                                        <span
                                            key={word}
                                            className={`absolute left-2 top-1 whitespace-nowrap transition-all duration-500 ease-in-out ${i === activeIndex
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-full opacity-0"
                                                }`}
                                        >
                                            {word}
                                        </span>
                                    ))}
                                </span>
                            </span>
                            <br />
                            Certified Quickly.
                        </h1>

                        {/* Paragraph */}
                        <p className="font-Inter font-medium text-[16px] lg:text-[20px] leading-[125%] text-[#1E374F] max-w-[760px] pb-12">
                            The Ignyte Assurance Platform offers compliance-sensitive teams, such as government contractors, cloud service providers, and healthcare organizations with start-to-finish support as they align with the frameworks they need – all in one platform, backed by <span className="font-bold">personalized consulting and audit services.</span>
                        </p>

                        <div className="w-40 h-13 pb-32">
                            <PrimaryButton href="/get-started" text="Get Started" />
                        </div>

                        {/* Badge logos */}
                        <div className="flex items-center gap-6 lg:gap-12.5 mt-6 lg:mt-12 grayscale flex-wrap">
                            <div className="relative w-10 h-18 lg:w-18.75 lg:h-24">
                                <Image src={FedRampLogo} alt="FedRAMP Logo" fill className="object-contain" />
                            </div>
                            <div className="relative w-14 h-18.25 lg:w-25.5 lg:h-24.5">
                                <Image src={CyberLogo} alt="Cyber Security Logo" fill className="object-contain" />
                            </div>
                            <div className="relative w-18 h-16.5 lg:w-35.75 lg:h-22.25">
                                <Image src={VeteranLogo} alt="Veteran Owned Business Logo" fill className="object-contain" />
                            </div>
                            <div className="relative w-10 h-18.25 lg:w-16.25 lg:h-24.5">
                                <Image src={IasLogo} alt="IAS Accredited Logo" fill className="object-contain" />
                            </div>
                        </div>
                    </div>

                    {/* Right image */}
                    <div className="lg:col-span-6 w-full h-100 sm:h-125 md:h-150 lg:h-260.5 flex items-center justify-center lg:justify-end relative">
                        <div className="relative w-full max-w-283.5 h-full">
                            <Image
                                src={ManWithTablet}
                                alt="Ignyte Compliance Expert with Dashboard Showcase"
                                fill
                                priority
                                className="object-contain object-right-center"
                            />
                            <div
                                className="absolute bottom-15 md:bottom-48 left-0 right-0 h-[10%] pointer-events-none z-10"
                                style={{
                                    background: "linear-gradient(180deg, rgba(241, 240, 239, 0) 0%, #ffffff 110%)"
                                }}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}
