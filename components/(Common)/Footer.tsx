"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo/logotw.png";
import TwitterIcon from "../../assets/icons/X1.png";
import FacebookIcon from "../../assets/icons/FB1.png";
import GithubIcon from "../../assets/icons/Git1.png";
import LinkedinIcon from "../../assets/icons/LinkedinIcon1.png";
import SpotifyIcon from "../../assets/icons/Spotify1.png";
import AppleIcon from "../../assets/icons/Apple1.png";
import YoutubeIcon from "../../assets/icons/YT1.png";
import Badge1 from "../../assets/badges/register.png";
import Badge2 from "../../assets/badges/organaization.png";
import Badge3 from "../../assets/badges/cyber.png";
import Badge4 from "../../assets/badges/ios.png";
import Badge5 from "../../assets/badges/iosaccredited.png";
import Badge6 from "../../assets/badges/fr.png";
import Badge7 from "../../assets/badges/gdpr.png";
import Badge8 from "../../assets/badges/hipaa.png";
import Badge9 from "../../assets/badges/sdvosb.png";
import Badge10 from "../../assets/badges/minority.png";
import Badge11 from "../../assets/badges/cyberwinnwe.png";
import Badge12 from "../../assets/badges/pao.png";

interface FooterMenu {
    title: string;
    links: string[];
}

interface SocialIcon {
    src: StaticImageData;
    alt: string;
}

export default function Footer(): React.ReactElement {
    const leftMenu: FooterMenu[] = [
        {
            title: "Frameworks",
            links: ["FedRAMP", "CMMC", "ISO 27001", "NIST SP 800-171", "HIPAA", "HITRUST", "All Frameworks"]
        },
        {
            title: "Resources",
            links: ["All", "Pricing", "Blog", "Customer Stories", "Product Documentation", "Reckless Compliance Podcast", "Emerging Cyber Risk Podcast", "Videos", "Latest STIGs"]
        }
    ];

    const rightMenu: FooterMenu[] = [
        {
            title: "Solutions",
            links: ["DIB", "Healthcare"]
        },
        {
            title: "Platform",
            links: ["Features", "Pricing"]
        },
        {
            title: "Company",
            links: ["About us", "Awards and Certifications", "Careers", "Contact us"]
        }
    ];

    const mainMenu: FooterMenu[] = [
        {
            title: "Frameworks",
            links: ["FedRAMP", "CMMC", "ISO 27001", "NIST SP 800-171", "HIPAA", "HITRUST", "All Frameworks"]
        },
        {
            title: "Solutions",
            links: ["DIB", "Healthcare"]
        },
        {
            title: "Platform",
            links: ["Features", "Pricing"]
        },
        {
            title: "Resources",
            links: ["All", "Pricing", "Blog", "Customer Stories", "Product Documentation", "Reckless Compliance Podcast", "Emerging Cyber Risk Podcast", "Videos", "Latest STIGs"]
        },
        {
            title: "Company",
            links: ["About us", "Awards and Certifications", "Careers", "Contact us"]
        }
    ];

    const socialIcons: SocialIcon[] = [
        { src: TwitterIcon as StaticImageData, alt: "X (Twitter)" },
        { src: FacebookIcon as StaticImageData, alt: "Facebook" },
        { src: GithubIcon as StaticImageData, alt: "GitHub" },
        { src: LinkedinIcon as StaticImageData, alt: "LinkedIn" },
        { src: SpotifyIcon as StaticImageData, alt: "Spotify" },
        { src: AppleIcon as StaticImageData, alt: "Apple" },
        { src: YoutubeIcon as StaticImageData, alt: "YouTube" }
    ];

    const badges: StaticImageData[] = [
        Badge1 as StaticImageData, Badge2 as StaticImageData, Badge3 as StaticImageData, Badge4 as StaticImageData,
        Badge5 as StaticImageData, Badge6 as StaticImageData, Badge7 as StaticImageData, Badge8 as StaticImageData,
        Badge9 as StaticImageData, Badge10 as StaticImageData, Badge11 as StaticImageData, Badge12 as StaticImageData
    ];

    return (
        <footer className="w-full px-2 sm:px-4 lg:px-6 bg-[#333132] text-[#ECEBEC] font-sans pt-12.5 pb-10">
            <div className="max-w-[1620px] mx-auto px-2 xl:px-0">

                <div className="mb-12 xl:mb-12.5">
                    <Image
                        src={Logo}
                        alt="Ignyte Logo"
                        className="w-47 h-14.75 object-contain"
                    />
                </div>

                <div className="grid grid-cols-2 xl:flex xl:flex-row xl:justify-between gap-x-10 gap-y-14 pb-15 border-b border-[#ECEBEC]/10">

                    <div className="flex flex-col gap-14 xl:contents">
                        {leftMenu.map((group) => (
                            <div key={group.title} className="flex flex-col gap-5 w-full min-w-0">
                                <h3 className="text-[#ECEBEC]/50 font-semibold text-[15px] md:text-[16px] tracking-wide">
                                    {group.title}
                                </h3>
                                <ul className="flex flex-col gap-3.5">
                                    {group.links.map((link) => (
                                        <li key={link} className="w-full">
                                            <Link
                                                href={`/${group.title.toLowerCase()}/${link.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="text-[14px] md:text-[15px] text-[#ECEBEC] hover:text-[#F7941D] transition-colors block leading-snug wrap-break-word"
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-14 xl:contents">
                        {rightMenu.map((group) => (
                            <div key={group.title} className="flex flex-col gap-5 w-full min-w-0">
                                <h3 className="text-[#ECEBEC]/50 font-semibold text-[15px] md:text-[16px] tracking-wide">
                                    {group.title}
                                </h3>
                                <ul className="flex flex-col gap-3.5">
                                    {group.links.map((link) => (
                                        <li key={link} className="w-full">
                                            <Link
                                                href={`/${group.title.toLowerCase()}/${link.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="text-[14px] md:text-[15px] text-[#ECEBEC] hover:text-[#F7941D] transition-colors block leading-snug wrap-break-word"
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="pt-8 grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">

                    <div className="xl:col-span-6 flex flex-col gap-10 xl:max-w-111.25">
                        <p className="text-[15px] leading-[150%] text-[#ECEBEC]/80">
                            Bridging cyber assurance gaps with a transformative integrated risk management engine.
                        </p>

                        <div className="flex flex-wrap gap-5.25 ">
                            {socialIcons.map((icon, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="w-11.25 h-11.25 hover:scale-110 transition-transform duration-200"
                                >
                                    <Image
                                        src={icon.src}
                                        alt={icon.alt}
                                        className="w-11.25 h-11.25 object-contain"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="xl:col-span-6 xl:justify-self-end w-full max-w-149.75">
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 justify-items-start sm:justify-items-end">
                            {badges.map((badge, idx) => (
                                <div key={idx} className="w-20 h-20 sm:w-23.25 sm:h-23.25 flex items-center justify-center">
                                    <Image
                                        src={badge}
                                        alt={`Certification Badge ${idx + 1}`}
                                        className="w-full h-full object-contain  transition-all"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col pt-10 lg:pt-0 gap-4 text-[14px] text-[#ECEBEC]/60">
                    <p className="w-full leading-relaxed">
                        Ignyte © {new Date().getFullYear()} All rights reserved. Ignyte Assurance Platform
                    </p>
                    <div className="flex flex-row justify-between sm:justify-start sm:gap-6 w-full">
                        <Link href="/privacy-policy" className="hover:underline hover:text-[#F7941D]">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:underline hover:text-[#F7941D]">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}