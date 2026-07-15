
import Image, { StaticImageData } from "next/image";
import PrimaryButton from "./PrimaryButton";
import FedRampBadge from "../../assets/badges/FedRampBadgee.png";
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

interface ScheduleAuditProps {
    title?: string;
    description?: string;
    buttonText?: string;
}

export default function ScheduleAudit({
    title = "Schedule Your Audit Today",
    description = "Conducting manual IT asset collection and network discovery is time-consuming and costly. And even when an organization achieves compliance, these processes are difficult to maintain and scale to other frameworks.",
    buttonText = "Schedule a Call"
}: ScheduleAuditProps): React.ReactElement {
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
        <section className=" mx-auto w-full  bg-[#1E374F] text-[#ECEBEC] font-Inter pt-25.5 pb-25 py-25">
            <div className="max-w-[1620px] mx-auto w-full px-12">

                <div className="flex flex-col lg:flex-row lg:items-center justify-start gap-[20%]">

                    <div className="flex flex-col ">
                        <h2 className="font-Inter font-semibold text-[24px] md:text-[40px] leading-[125%] tracking-normal text-[#ECEBEC] mb-8.5">
                            {title}
                        </h2>

                        <p className="font-Inter font-medium text-[16px] md:text-[20px] leading-[125%] text-[#ECEBEC] mb-8.5 max-w-187.75">
                            {description}
                        </p>

                        <div className="hidden lg:block  ">
                            <PrimaryButton href="/schedule-call" text={buttonText} minWidth="min-w-[226px]" />
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-6 sm:gap-8 lg:gap-[12%] w-full max-w-104.25">
                        {badges.map((badge, index) => (
                            <div key={index} className="flex items-center justify-start shrink-0">
                                {/* Desktop Image */}
                                <Image
                                    src={badge.src}
                                    alt={badge.alt}
                                    width={badge.desktopWidth}
                                    height={badge.desktopHeight}
                                    className="object-contain hidden grayscale md:block"
                                    priority
                                />
                                {/* Mobile Image */}
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


                    <div className="flex justify-center lg:hidden mt-2">
                        <PrimaryButton href="/schedule-call" text={buttonText} />
                    </div>

                </div>
            </div>
        </section>
    );
}