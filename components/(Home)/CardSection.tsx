import LockIcon from "../../assets/icons/lock.png";
import ShieldIcon from "../../assets/icons/shield.png";
import PatientIcon from "../../assets/icons/patient.png";
import HomeCardSection, { HomeGridCard } from "../(Common)/CardGrid";

export default function CardSection() {
    const homeCardsData: HomeGridCard[] = [
        {
            id: "card-1",
            title: "Safeguard CUI and CDI",
            description: "See how Ignyte's consulting services have helped contractors serving the Defense Industrial Base prepare for CMMC enforcement in 2025.",
            linkText: "Explore DIB Solutions",
            linkHref: "/defense-industrial-base-cybersecurity/",
            iconSrc: LockIcon,
            iconAlt: "Lock",
            iconBgColor: "bg-[#4F91CE]",
            cardBgColor: "bg-[#92B5D7]/15",
            linkColor: "text-[#4F91CE] border-[#4F91CE]/30 hover:border-[#4F91CE]"
        },
        {
            id: "card-2",
            title: "Accelerate FedRAMP Compliance",
            description: "Streamline long authorization processes with cost-effective automations, rapid reporting, and comprehensive audit dashboards.",
            linkText: "Get Authorized",
            linkHref: "/new-fedramp-certification/",
            iconSrc: ShieldIcon,
            iconAlt: "Shield",
            iconBgColor: "bg-[#F7941D]",
            cardBgColor: "bg-[#F7941D]/15",
            linkColor: "text-[#F7941D] border-[#F7941D]/30 hover:border-[#F7941D]"
        },
        {
            id: "card-3",
            title: "Secure Your Patient Data and PII",
            description: "Ignyte empowers healthcare providers to establish and maintain trust with their patients.",
            linkText: "Unlock Healthcare Solutions",
            linkHref: "/healthcare-cybersecurity/",
            iconSrc: PatientIcon,
            iconAlt: "Patient Data",
            iconBgColor: "bg-[#1E374F]",
            cardBgColor: "bg-[#1E374F]/15",
            linkColor: "text-[#1E374F] border-[#1E374F]/30 hover:border-[#1E374F]"
        }
    ];

    return (
        <section className="w-full pt-18">
            <HomeCardSection cards={homeCardsData} />
        </section>
    );
}



// import LockIcon from "../../assets/icons/lock.png";
// import ShieldIcon from "../../assets/icons/shield.png";
// import PatientIcon from "../../assets/icons/patient.png";
// import HomeCardSection, { HomeGridCard } from "../(Common)/CardGrid";

// export default function CardSection() {
//     const homeCardsData: HomeGridCard[] = [
//         {
//             id: "card-1",
//             title: "Safeguard CUI and CDI",
//             description: "See how Ignyte's consulting services have helped contractors serving the Defense Industrial Base prepare for CMMC enforcement in 2025.",
//             linkText: "Explore DIB Solutions",
//             linkHref: "/explore-dib",
//             iconSrc: LockIcon,
//             iconAlt: "Lock",
//             iconBgColor: "bg-[#4B90CD]",
//             cardBgColor: "bg-[#92B5D7]/15",
//         },
//         {
//             id: "card-2",
//             title: "Accelerate FedRAMP Compliance",
//             description: "Streamline long authorization processes with cost-effective automations, rapid reporting, and comprehensive audit dashboards.",
//             linkText: "Get Authorized",
//             linkHref: "/get-authorized",
//             iconSrc: ShieldIcon,
//             iconAlt: "Shield",
//             iconBgColor: "bg-[#F7941D]",
//             cardBgColor: "bg-[#F7941D]/15",
//             linkColor: "text-[#F7941D] border-[#F7941D]/30 hover:border-[#F7941D]"
//         },
//         {
//             id: "card-3",
//             title: "Secure Your Patient Data and PII",
//             description: "Ignyte empowers healthcare providers to establish and maintain trust with their patients.",
//             linkText: "Unlock Healthcare Solutions",
//             linkHref: "/healthcare-solutions",
//             iconSrc: PatientIcon,
//             iconAlt: "Patient Data",
//             iconBgColor: "bg-[#1E374F]",
//             cardBgColor: "bg-[#1E374F]/15",
//         }
//     ];

//     return (
//         <section>
//             <HomeCardSection cards={homeCardsData} />
//         </section>
//     );
// }