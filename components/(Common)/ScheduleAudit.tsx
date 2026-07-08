import Image, { StaticImageData } from "next/image";
import PrimaryButton from "./PrimaryButton";
import FedRampBadge from "../../assets/badges/FedRampBadge.png";
import CyberAbBadge from "../../assets/badges/cyber.png";
import IasBadge from "../../assets/badges/Ias.png";

interface AuditBadge {
    src: StaticImageData;
    alt: string;
    desktopWidth: number;
    desktopHeight: number;
    mobileWidth: number;
    mobileHeight: number;
}

export default function ScheduleAudit(): React.ReactElement {
    const badges: AuditBadge[] = [
        {
            src: FedRampBadge as StaticImageData,
            alt: "FedRAMP Recognized 3PAO",
            desktopWidth: 102,
            desktopHeight: 130,
            mobileWidth: 47,
            mobileHeight: 59
        },
        {
            src: CyberAbBadge as StaticImageData,
            alt: "Cyber AB Authorized 3PAO",
            desktopWidth: 132,
            desktopHeight: 126,
            mobileWidth: 63,
            mobileHeight: 60
        },
        {
            src: IasBadge as StaticImageData,
            alt: "IAS Accredited System",
            desktopWidth: 81,
            desktopHeight: 124,
            mobileWidth: 40,
            mobileHeight: 60
        }
    ];

    return (
        <section className="w-full bg-[#1E374F] text-[#ECEBEC] font-Inter pt-26 pb-22 py-25 px-25 md:px-50">
            <div className="max-w-[1620px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8.75 lg:gap-80 lg:mx-2">

                <div className="flex flex-col w-full max-w-192 ">
                    <h2 className="font-Inter font-semibold text-[24px] md:text-[40px] leading-[125%] tracking-normal text-[#ECEBEC] mb-8">
                        Schedule Your Audit Today
                    </h2>

                    <p className="font-Inter font-medium text-[16px] md:text-[20px] leading-[125%] text-[#ECEBEC]/90 mb-[38px]">
                        Conducting manual IT asset collection and network discovery is time-consuming and costly.
                        And even when an organization achieves compliance, these processes are difficult to maintain
                        and scale to other frameworks.
                    </p>

                    <div className="hidden lg:block mt-1">
                        <PrimaryButton href="/schedule-call" text="Schedule a Call" />
                    </div>
                </div>

                <div className="flex flex-row items-center justify-start lg:justify-center gap-6 sm:gap-12 lg:gap-12.75 shrink-0">
                    {badges.map((badge, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <Image
                                src={badge.src}
                                alt={badge.alt}
                                width={badge.desktopWidth}
                                height={badge.desktopHeight}
                                className="object-contain hidden grayscale md:block"
                                priority
                            />
                            <Image
                                src={badge.src}
                                alt={badge.alt}
                                width={badge.mobileWidth}
                                height={badge.mobileHeight}
                                className="object-contain grayscale block md:hidden"
                                priority
                            />
                        </div>
                    ))}
                </div>

                <div className="block lg:hidden mt-2">
                    <PrimaryButton href="/schedule-call" text="Schedule a Call" />
                </div>

            </div>
        </section>
    );
}