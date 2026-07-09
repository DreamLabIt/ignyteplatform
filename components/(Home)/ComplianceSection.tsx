"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import GradientBgImg from "../../assets/background/sunset-gradient.png";
import ConsultImg from "../../assets/fontend/consultImg.png";
import AutomateImg from "../../assets/fontend/automateImg.png";
import AuditImg from "../../assets/fontend/auditImg.png";

type Step = 1 | 2 | 3;

export default function ComplianceSection() {
    const [activeStep, setActiveStep] = useState<Step>(1);
    const images: Record<Step, { src: typeof ConsultImg; alt: string }> = {
        1: { src: ConsultImg, alt: "Before an Audit Cards" },
        2: { src: AutomateImg, alt: "Compliance Progress Dashboard" },
        3: { src: AuditImg, alt: "Top Priorities and Targets status" },
    };

    return (
        <section
            className="relative w-full overflow-x-hidden text-white "
            style={{
                backgroundImage: `linear-gradient(0deg, transparent 10px, rgba(24, 45, 67, 0.60) 300px, #182D49 30%), url(${GradientBgImg.src})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="max-w-[1620px] mx-auto px-4 md:px-1 pt-20 pb-10 lg:pb-26 relative z-20">

                <div className="max-w-222.5 mx-auto text-center flex flex-col items-center justify-center mb-12">
                    <h2 className="font-Inter font-semibold text-[32px] sm:text-[40px] leading-[125%] text-[#ECEBEC] tracking-tight mb-6">
                        Achieve Compliance in Months, Not Years
                    </h2>
                    <p className="font-Inter font-medium text-[16px] sm:text-[20px] leading-[125%] text-[#ECEBEC] max-w-219.75">
                        Our automated GRC platform and a team of former US Department of Defense assessors and
                        security managers is ready to help you achieve compliance, maintain near real-time transparency,
                        and proactively prepare for compliance audits.
                    </p>
                </div>

                <div className="w-full flex justify-center mb-14 lg:mb-18">
                    <div className="w-full max-w-[1560px] aspect-1560/878 relative rounded-[25px] overflow-hidden border-12 sm:border-18 border-[#8E8E8E33] shadow-2xl bg-black">
                        <video
                            src="/video/compliance.mp4"
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-16 lg:hidden mb-10">
                    <div className="space-y-4">
                        <h3 className="font-Inter font-semibold text-[32px] leading-[125%] text-[#ECEBEC]">
                            End-to-End Compliance Support
                        </h3>
                        <p className="font-Inter font-normal text-[15px] text-[#ECEBEC]">
                            Ignyte’s platform and services will meet you where your compliance program is.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="font-Inter font-semibold text-[26px] text-white">Consult</h4>
                        <p className="text-[16px] leading-[160%] text-slate-300">
                            Ignyte’s team of consultants are prepared to help you rapidly achieve certification for major compliance frameworks, including CMMC, FedRAMP, ISO 27001, and more.
                        </p>
                        <div className="relative w-full h-64 sm:h-96 mt-2">
                            <Image src={ConsultImg} alt="Consult Support" fill className="object-contain" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="font-Inter font-semibold text-[26px] text-white">Automate</h4>
                        <p className="text-[16px] leading-[160%] text-slate-300">
                            Ignyte customers can create and access customizable dashboards, cross-mapping frameworks, and automatically generate near real-time compliance reports.
                        </p>
                        <div className="relative w-full h-64 sm:h-96 mt-2">
                            <Image src={AutomateImg} alt="Automate Dashboard" fill className="object-contain" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="font-Inter font-semibold text-[26px] text-white">Audit</h4>
                        <p className="text-[16px] leading-[160%] text-slate-300">
                            Ignyte has helped customers move ten times faster during an active compliance audit process.
                        </p>
                        <div className="relative w-full h-64 sm:h-96 mt-2">
                            <Image src={AuditImg} alt="Audit Process" fill className="object-contain" />
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex relative w-full flex-row gap-20 h-auto items-start">

                    <div className="w-full lg:w-190 flex flex-col gap-12 py-6 z-10">
                        <div className="space-y-4 lg:sticky lg:top-24">
                            <h3 className="font-Inter font-semibold lg:text-[40px] leading-[125%] text-[#ECEBEC] lg:max-w-max lg:whitespace-nowrap">
                                End-to-End Compliance Support
                            </h3>
                            <p className="font-Inter font-Medium text-[20px] text-[#ECEBEC]">
                                Ignyte’s platform and services will meet you where your compliance program is.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8 relative pt-6">
                            <motion.div
                                className="transition-all duration-300 pb-22 relative border-b border-[#FFFFFF40] cursor-pointer"
                                whileInView={{ opacity: 1 }}
                                viewport={{ amount: 0.6 }}
                                onViewportEnter={() => setActiveStep(1)}
                            >
                                <h4 className={`font-Inter font-semibold text-[32px] transition-colors duration-300 ${activeStep === 1 ? "text-white" : "text-[#92B5D7]"}`}>
                                    Consult
                                </h4>
                                <p className={`text-[18px] font-Regular mt-6  leading-[160%] -mb-12 transition-colors duration-300 ${activeStep === 1 ? "text-[#ECEBEC]" : "text-[#ECEBEC59]"}`}>
                                    Ignyte’s team of consultants are prepared to help you rapidly achieve certification for major compliance frameworks, including CMMC, FedRAMP, ISO 27001, and more.
                                </p>
                                {activeStep === 1 && (
                                    <motion.div
                                        layoutId="activeLine"
                                        className="absolute bottom-0 left-0 h-0.5 bg-[#38bdf8] w-[37.5%]"
                                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                    />
                                )}
                            </motion.div>

                            <motion.div
                                className="transition-all duration-300 pt-4 pb-20 relative border-b border-[#FFFFFF40] cursor-pointer"
                                whileInView={{ opacity: 1 }}
                                viewport={{ amount: 0.6 }}
                                onViewportEnter={() => setActiveStep(2)}
                            >
                                <h4 className={`font-Inter font-semibold text-[32px] transition-colors duration-300 ${activeStep === 2 ? "text-white" : "text-[#92B5D7]"}`}>
                                    Automate
                                </h4>
                                <div className={`text-[18px] mt-6 -mb-10 leading-[160%] transition-colors font-Regular duration-300 ${activeStep === 2 ? "text-[#ECEBEC]" : "text-[#ECEBEC59]"}`}>
                                    Ignyte customers can create and access customizable dashboards, cross-mapping frameworks, and automatically generate near real-time compliance reports.
                                </div>
                                {activeStep === 2 && (
                                    <motion.div
                                        layoutId="activeLine"
                                        className="absolute bottom-0 left-0 h-0.5 bg-[#38bdf8] w-[37.5%]"
                                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                    />
                                )}
                            </motion.div>

                            <motion.div
                                className="transition-all duration-300 pt-3 pb-8 relative border-b border-[#FFFFFF40] cursor-pointer"
                                whileInView={{ opacity: 1 }}
                                viewport={{ amount: 0.6 }}
                                onViewportEnter={() => setActiveStep(3)}
                            >
                                <h4 className={`font-Inter font-semibold text-[32px] transition-colors duration-300 ${activeStep === 3 ? "text-white" : "text-[#92B5D7]"}`}>
                                    Audit
                                </h4>
                                <p className={`text-[18px] font-Regular  mt-6 -mb-4 leading-[160%] transition-colors duration-300 ${activeStep === 3 ? "text-[#ECEBEC]" : "text-[#ECEBEC59]"}`}>
                                    Ignyte has helped customers move ten times faster during an active compliance audit process.
                                </p>
                                {activeStep === 3 && (
                                    <motion.div
                                        layoutId="activeLine"
                                        className="absolute bottom-0 left-0 h-0.5 bg-[#38bdf8] w-[37.5%]"
                                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                    />
                                )}
                            </motion.div>

                        </div>
                    </div>

                    <div className="flex-1 h-240 lg:sticky lg:top-80 flex justify-center items-center z-20">
                        <div className="relative w-full h-full max-w-200 overflow-hidden rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                                >
                                    <Image
                                        src={images[activeStep].src}
                                        alt={images[activeStep].alt}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
