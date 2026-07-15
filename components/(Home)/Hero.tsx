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
        <section className="w-full relative">
            <div
                className="w-full overflow-hidden flex items-center px-6 lg:px-12 pt-24 lg:pt-34 pb-20"
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(241, 241, 241, 0.28) 51.58%, #F1F1F1 90%), url(${HeroBgImg.src})`,
                    backgroundSize: "cover",
                }}
            >

                <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1620px] mx-auto gap-0">

                    <div className="flex flex-col items-start justify-center gap-0.5 pt-10 lg:pt-28 flex-1 z-20">

                        {/* Top badges */}
                        <div className="flex items-center gap-2.5 pb-2">
                            <span className="w-24.25 h-8 flex items-center justify-center rounded-[25px] bg-[#4F91CE] text-[#ECEBEC] font-Inter font-medium text-[18px] opacity-70 px-3.75 py-1.25">
                                Consult
                            </span>
                            <span className="w-28.75 h-8 flex items-center justify-center rounded-[25px] bg-[#F7941D] text-[#ECEBEC] font-Inter font-medium text-[18px] opacity-70 px-3.75 py-1.25">
                                Automate
                            </span>
                            <span className="w-19 h-8 flex items-center justify-center rounded-[25px] bg-[#1E374F] text-[#ECEBEC] font-Inter font-medium text-[18px] opacity-70 px-3.75 py-1.25">
                                Audit
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-Inter font-semibold text-[36px] sm:text-[48px] lg:text-[64px] leading-[115%] tracking-[-1%] text-[#1E374F] pb-12 w-full">
                            <span className="inline-flex items-baseline gap-3">
                                Get

                                <span className="relative inline-block h-9.5 md:h-16 overflow-hidden align-bottom min-w-[10ch]">
                                    {rotatingWords.map((word, i) => (
                                        <span
                                            key={word}
                                            className={`absolute left-0 top-1 whitespace-nowrap transition-all duration-500 ease-in-out ${i === activeIndex
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
                        <p className="font-Inter font-medium text-[16px] lg:text-[20px] leading-[125%] text-[#1E374F] max-w-190 pb-11">
                            The Ignyte Assurance Platform offers compliance-sensitive teams, such as government contractors, cloud service providers, and healthcare organizations with start-to-finish support as they align with the frameworks they need – all in one platform, backed by <span className="font-bold">personalized consulting and audit services.</span>
                        </p>

                        <div className="ml-1 mt-0.70 pb-18">
                            <PrimaryButton href="/get-started" text="Get Started" />
                        </div>

                        {/* Badge logos */}
                        <div className="flex items-center gap-6 lg:gap-12.5 mt-6 lg:mt-12 grayscale flex-wrap z-20">
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

                    <div className="relative w-full max-w-213.5 aspect-854/754 flex-1  -ml-8">
                        <Image
                            src={ManWithTablet}
                            alt="Ignyte Compliance Expert with Dashboard Showcase"
                            fill
                            priority
                            className="object-contain w-213.5 h-188.5"
                        />
                    </div>
                </div>
            </div>
            <div
                className="absolute bottom-[2%] left-0 right-0 h-[60%] pointer-events-none z-10"
                style={{
                    background: "linear-gradient(180deg, rgba(241, 240, 239, 0) 16.29%, #F2F1EF 98.97%)"

                }}
            />
        </section>
    );
}