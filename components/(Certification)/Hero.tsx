"use client";
import Image from "next/image";
import PrimaryButton from "../(Common)/PrimaryButton";
import HeroBg from "../../assets/background/navbar-bg.png";
import DashboardMockup from "../../assets/fontend/risk-dashboard.png";
import RightGraphic from "../../assets/fontend/Illustration.png";

export default function Hero() {
    return (
        <section
            className="w-full min-h-screen pt-35 sm:pt-45 pb-24 px-6 relative overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(241, 241, 241, 0.21) 51.58%, #F1F1F1 100%), url(${HeroBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-[1620px] mx-auto w-full flex flex-col items-center relative z-10">
                <div className="max-w-262.5 w-full flex flex-col items-center text-center gap-8.75 mb-15 sm:mb-18.75">

                    <div className="inline-flex items-center justify-center bg-[#1E374F] border border-white/10 rounded-[25px] py-1.25 px-3.75">
                        <span className="font-Inter font-medium text-[16px] sm:text-[18px] leading-[100%] text-[#ECEBEC]/80 tracking-wide">
                            Achieve Authority to Operate Faster
                        </span>
                    </div>

                    <h1 className="font-Inter font-semibold text-[40px] sm:text-[54px] md:text-[64px] leading-[115%] text-[#4F91CE] tracking-[-1%] max-w-262.5">
                        FedRAMP shouldn’t take years!
                        <br />
                        <span className="text-[#1E374F]">Get approved in 6 months or less.</span>
                    </h1>

                    <div className="flex flex-col gap-3">
                        <p className="font-Inter font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[125%] text-[#1E374F] max-w-215">
                            Simplify FedRAMP authorization with real practitioners and a purpose-built platform
                        </p>
                        <p className="font-Inter font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[125%] text-[#1E374F] max-w-215">
                            Ignyte equips your organization with a platform that helps you implement processes
                            required for FedRAMP compliance, backed by a team of seasoned consultants.
                        </p>
                    </div>

                    <div className="mt-2">
                        <PrimaryButton href="/get-started" text="Get Started Today" />
                    </div>
                </div>

                <div className="w-full max-w-323.5 h-62.5 sm:h-112.5 md:h-150 lg:h-175 relative mb-20 sm:mb-30">
                    <div className="w-full h-full relative px-5 sm:px-12.5 md:px-21.75">
                        <div className="w-full h-full relative rounded-t-[20px] overflow-hidden ">
                            <Image
                                src={DashboardMockup}
                                alt="Ignyte FedRAMP Compliance Dashboard interface preview"
                                fill
                                priority
                                sizes="(max-w: 1280px) 100vw, 1120px"
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-4">

                    <div className="w-full lg:max-w-212.5 flex flex-col items-start">
                        <h2 className="font-Inter font-semibold text-[32px] sm:text-[36px] md:text-[40px] leading-[125%] text-[#1E374F] mb-6 tracking-tight">
                            FedRAMP Authorization Requires Efficient Processes and Expert Guidance
                        </h2>

                        <p className="font-Inter font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[125%] text-[#1E374F]/90 mb-8">
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
                        <div className="w-80 sm:w-105 lg:w-124.75 h-80 sm:h-106.25 lg:h-126.25 relative">
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


// "use client";

// import React from "react";
// import Image from "next/image";

// // আপনার প্রজেক্টের গ্লোবাল বাটন কম্পোনেন্ট

// // ইমেজ অ্যাসেট ইম্পোর্ট (আপনার সঠিক পাথ অনুযায়ী চেঞ্জ করে নিবেন)
// import HeroBg from "../../assets/background/navbar-bg.png"; // আপনার গ্লোবাল ব্যাকগ্রাউন্ড গ্রেডিয়েন্ট
// import DashboardMockup from "../../assets/fontend/risk-dashboard.png"; // ড্যাশবোর্ড গ্রাফিক্স/স্ক্রিনশট ইমেজ
// import PrimaryButton from "../(Common)/PrimaryButton";

// export default function Hero() {
//     return (
//         <section
//             className="w-full min-h-[1550px] pt-[180px] pb-20 px-6 relative flex flex-col items-center overflow-hidden bg-[#1E374F]"
//             style={{

//                 backgroundImage: `linear-gradient(180deg, rgba(241, 241, 241, 0) 51.58%, #F1F1F1 100%), url(${HeroBg.src})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//             }}
//         >
//             {/* Container to center-align everything accurately */}
//             <div className="max-w-[1620px] mx-auto w-full flex flex-col items-center relative z-10">

//                 {/* Main Content Area (width: 1050px) */}
//                 <div className="max-w-[1050px] w-full flex flex-col items-center text-center gap-[35px] mb-[75px]">

//                     {/* Badge Area */}
//                     <div className="inline-flex items-center justify-center bg-[#1E374F] border border-white/10 rounded-[25px] py-[5px] px-[15px] gap-[10px]">
//                         {/* ছোট একটি ডট আইকন ভিজ্যুয়াল সুন্দরের জন্য */}
//                         <span className="font-Inter font-medium text-[16px] sm:text-[18px] leading-[100%] text-[#ECEBEC]/80 tracking-wide">
//                             Achieve Authority to Operate Faster
//                         </span>
//                     </div>

//                     {/* Main Heading H1 */}
//                     <h1 className="font-Inter font-semibold text-[40px] sm:text-[54px] md:text-[64px] leading-[115%] text-[#4F91CE] tracking-[-1%] max-w-[1050px]">
//                         FedRAMP shouldn’t take years!
//                         <br />
//                        <span className="text-[#1E374F]">Get approved in 6 months or less.</span>
//                     </h1>

//                     {/* Subtitle / Description Text */}
//                     <p className="font-Inter font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[125%] text-[#1E374F] max-w-[860px]">
//                         Simplify FedRAMP authorization with real practitioners and a purpose-built platform
//                     </p>
//                     <p className="font-Inter font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[125%] text-[#1E374F] max-w-[860px]">
//                         Ignyte equips your organization with a platform that helps you implement processes
//                         required for FedRAMP compliance, backed by a team of seasoned consultants.
//                     </p>

//                     {/* Action Button Container */}
//                     <div className="mt-2">
//                         <PrimaryButton href="/get-started" text="Get Started Today" />
//                     </div>
//                 </div>

//                 {/* Dashboard Image Outer Wrapper Box (width: 1294px) */}
//                 <div className="w-full max-w-[1294px] h-[350px] sm:h-[500px] md:h-[650px] lg:h-[750px] relative p-[1px]">

//                     {/* Inner Image Element (width: 1120px equivalent centered scaling) */}
//                     <div className="w-full h-full relative px-[20px] sm:px-[50px] md:px-[87px] pt-[20px] sm:pt-[40px]">
//                         <div className="w-full h-full relative rounded-t-[20px] overflow-hidden">
//                             <Image
//                                 src={DashboardMockup}
//                                 alt="Ignyte FedRAMP Compliance Dashboard interface preview"
//                                 fill
//                                 priority
//                                 sizes="(max-w: 1280px) 100vw, 1120px"
//                                 className="object-cover object-top"
//                             />
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }