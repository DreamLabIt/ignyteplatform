"use client";

import Image from "next/image";
import PrimaryButton from "../(Common)/PrimaryButton";
import HeroBgImg from "../../assets/background/navbar-bg.png";
import ManWithTablet from "../../assets/fontend/tablet.png";
import FedRampLogo from "../../assets/badges/FedRampBadge.png";
import CyberLogo from "../../assets/badges/cyber.png";
import VeteranLogo from "../../assets/badges/veteran.png";
import IasLogo from "../../assets/badges/Ias.png";

export default function MainHero() {
    return (
        <div
            className="w-full min-h-237.5 mx-auto relative overflow-hidden flex items-center px-6 pt-30"
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(241, 241, 241, 0.56) 51.58%, #F8F9FA 77.61%), url(${HeroBgImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="max-w-[1620px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

                <div className="lg:col-span-7 flex flex-col items-start justify-center">

                    <div className="flex items-center gap-2.5 mb-6">
                        <span className="w-24.25 h-8 flex items-center justify-center rounded-[25px] bg-[#4F91CE] text-white font-Inter font-medium text-[14px]">
                            Consult
                        </span>
                        <span className="w-28.75 h-8 flex items-center justify-center rounded-[25px] bg-[#F7941D] text-white font-Inter font-medium text-[14px]">
                            Automate
                        </span>
                        <span className="w-19 h-8 flex items-center justify-center rounded-[25px] bg-[#1E374F] text-white font-Inter font-medium text-[14px]">
                            Audit
                        </span>
                    </div>

                    <h1 className="max-w-206.25 font-Inter font-semibold text-[44px] sm:text-[54px] md:text-[64px] leading-[115%] tracking-[-1%] text-[#1E374F] mb-6">
                        Get CMMC <br /> Certified Quickly.
                    </h1>

                    <p className="max-w-206.25 font-Inter font-medium text-[18px] md:text-[20px] leading-[145%] text-[#1E374F]/90 mb-8">
                        The Ignyte Assurance Platform offers compliance-sensitive teams, such as government contractors, cloud service providers, and healthcare organizations with start-to-finish support as they align with the frameworks they need – all in one platform, backed by <span className="font-bold">personalized consulting and audit services.</span>
                    </p>

                    <div className="w-46.25 h-13.75">
                        <PrimaryButton href="/get-started" text="Get Started" />
                    </div>

                    <div className="flex items-center flex-wrap gap-8 mt-20 md:mt-27.5 grayscale-100">
                        <div className="relative w-21.25 h-16.25">
                            <Image src={FedRampLogo} alt="FedRAMP Logo" fill className="object-contain" />
                        </div>
                        <div className="relative w-18.75 h-16.25">
                            <Image src={CyberLogo} alt="Cyber Security Logo" fill className="object-contain" />
                        </div>
                        <div className="relative w-35 h-11.25">
                            <Image src={VeteranLogo} alt="Veteran Owned Business Logo" fill className="object-contain" />
                        </div>
                        <div className="relative w-16.25 h-16.25">
                            <Image src={IasLogo} alt="IAS Accredited Logo" fill className="object-contain" />
                        </div>
                    </div>

                </div>

                <div className="lg:col-span-5 w-full h-150 md:h-188.5 flex items-center justify-center lg:justify-end relative">
                    <div className="relative w-full max-w-213.5 h-full">

                        <Image
                            src={ManWithTablet}
                            alt="Ignyte Compliance Expert with Dashboard Showcase"
                            fill
                            priority
                            sizes="(max-w: 1024px) 100vw, 854px"
                            className="object-contain object-right-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}