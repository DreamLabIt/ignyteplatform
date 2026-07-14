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
import Badge6 from "../../assets/badges/FedRampBadge.png";
import Badge7 from "../../assets/badges/gdpr.png";
import Badge8 from "../../assets/badges/hipaa.png";
import Badge9 from "../../assets/badges/sdvosb.png";
import Badge10 from "../../assets/badges/minority.png";
import Badge11 from "../../assets/badges/cyberwinnwe.png";
import Badge12 from "../../assets/badges/pao.png";

interface FooterLink {
    text: string;
    href: string;
}

interface FooterMenu {
    title: string;
    links: FooterLink[];
}

interface SocialIcon {
    src: StaticImageData;
    alt: string;
    href: string;
}

interface FooterBadge {
    src: StaticImageData;
    alt: string;
    href?: string;
}

export default function Footer() {

    const footerMenus: FooterMenu[] = [
        {
            title: "Frameworks",
            links: [
                { text: "FedRAMP", href: "/fedramp/" },
                { text: "CMMC", href: "/cmmc/" },
                { text: "ISO 27001", href: "/iso-27001/" },
                { text: "NIST SP 800-171", href: "/nist/" },
                { text: "HIPAA", href: "/hipaa-compliance-solutions/" },
                { text: "HITRUST", href: "/hitrust-compliance-solutions/" },
                { text: "All Frameworks", href: "/cybersecurity-frameworks-guide-ignyte/" },
            ]
        },
        {
            title: "Solutions",
            links: [
                { text: "DIB", href: "/defense-industrial-base-cybersecurity/" },
                { text: "Healthcare", href: "/healthcare-cybersecurity/" },
            ]
        },
        {
            title: "Platform",
            links: [
                { text: "Features", href: "/integrated-risk-management-platform/" },
                { text: "Pricing", href: "/customized-grc-pricing/" },
            ]
        },
        {
            title: "Resources",
            links: [
                { text: "All", href: "/resources-hub/" },
                { text: "Pricing", href: "/customized-grc-pricing/" },
                { text: "Blog", href: "/blog/" },
                { text: "Customer Stories", href: "/customer/" },
                { text: "Product Documentation", href: "/support/solutions" },
                { text: "Reckless Compliance Podcast", href: "/reckless-compliance/" },
                { text: "Emerging Cyber Risk Podcast", href: "https://www.ignyteplatform.com/reckless-compliance-podcast/" },
                { text: "Videos", href: "https://www.youtube.com/@IgnyteAssurancePlatform/videos" },
                { text: "Latest STIGs", href: "/stigs/" },
            ]
        },
        {
            title: "Company",
            links: [
                { text: "About us", href: "/cybersecurity-compliance-platform/" },
                { text: "Awards and Certifications", href: "/cybersecurity-awards-and-certifications/" },
                { text: "Careers", href: "/cybersecurity-careers/" },
                { text: "Contact us", href: "https://www.ignyteplatform.com/contact/" },
            ]
        },
    ];

    const socialIcons: SocialIcon[] = [
        { src: TwitterIcon, alt: "X (Twitter)", href: "https://x.com/ignyteplatform?lang=en" },
        { src: FacebookIcon, alt: "Facebook", href: "https://www.facebook.com/IgnytePlatform" },
        { src: GithubIcon, alt: "GitHub", href: "https://github.com/Ignyte-Assurance-Platform" },
        { src: LinkedinIcon, alt: "LinkedIn", href: "https://www.linkedin.com/company/ignyte-platform/" },
        { src: SpotifyIcon, alt: "Spotify", href: "https://open.spotify.com/show/22F9rGMJNTbqTQ2ROqBaBo" },
        { src: AppleIcon, alt: "Apple Podcasts", href: "https://podcasts.apple.com/us/podcast/recklesss-compliance/id1688560532" },
        { src: YoutubeIcon, alt: "YouTube", href: "https://www.youtube.com/c/IgnyteAssurancePlatform" },
    ];

    const badges: FooterBadge[] = [
        { src: Badge1, alt: "3PAO Certification", href: "https://cyberab.org/Catalog#!/c/s/Results/Format/list/Page/1/Size/9/Sort/NameAscending?term=ignyte" },
        { src: Badge2, alt: "CyberAB Registered Organization", href: "https://cyberab.org/Catalog#!/c/s/Results/Format/list/Page/1/Size/9/Sort/NameAscending?term=ignyte" },
        { src: Badge3, alt: "Registered Practitioner" },
        { src: Badge4, alt: "ISO Certificate", href: "https://www.ignyteplatform.com/wp-content/uploads/2023/12/Ignyte-Platform_616546_Certificate_Final_Issue-4_2023.pdf" },
        { src: Badge5, alt: "ISO Certificate", href: "https://www.ignyteplatform.com/wp-content/uploads/2023/12/Ignyte-Platform_616546_Certificate_Final_Issue-4_2023.pdf" },
        { src: Badge6, alt: "A2LA Accreditation", href: "https://customer.a2la.org/index.cfm?event=directory.detail&labPID=666D9226-426E-4968-828F-F7BFFDA92056" },
        { src: Badge7, alt: "Certification Badge" },
        { src: Badge8, alt: "Certification Badge" },
        { src: Badge9, alt: "Certification Badge" },
        { src: Badge10, alt: "Certification Badge" },
        { src: Badge11, alt: "Certification Badge" },
        { src: Badge12, alt: "Certification Badge" },
    ];

    const leftMenu = [footerMenus[0], footerMenus[3]];
    const rightMenu = [footerMenus[1], footerMenus[2], footerMenus[4]];

    return (
        <footer className="w-full px-2 sm:px-4 lg:px-6 bg-[#333132] text-[#ECEBEC] font-sans pt-12 pb-10">
            <div className="max-w-[1620px] mx-auto px-2 xl:px-0 relative">

                <div className="mb-10 xl:mb-12">
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="Ignyte Logo"
                            className="w-47 h-14.75 object-contain"
                        />
                    </Link>
                </div>

                <div className="hidden xl:flex xl:flex-row xl:justify-start gap-[81.5px] pb-12 border-b border-[#ECEBEC]">
                    {footerMenus.map((group) => (
                        <div key={group.title} className="flex flex-col gap-20.5 min-w-64.75">
                            <div className="flex justify-start">
                                <h3 className="text-[#ECEBEC59] font-semibold text-[24px] tracking-wide max-w-64.75">
                                    {group.title}
                                </h3>
                            </div>
                            <ul className="flex flex-col gap-[13.5px] -mt-16">
                                {group.links.map((link) => (
                                    <li key={link.text} className="w-full">
                                        <Link
                                            href={link.href}
                                            className="text-[18px] text-[#ECEBEC] hover:text-[#F7941D] transition-colors block leading-snug whitespace-nowrap"
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 xl:hidden gap-x-10 gap-y-14 pb-15 border-b border-[#ECEBEC]">
                    <div className="flex flex-col gap-14">
                        {leftMenu.map((group) => (
                            <div key={group.title} className="flex flex-col gap-5 w-full min-w-0">
                                <h3 className="text-[#ECEBEC]/50 font-semibold text-[15px] tracking-wide">
                                    {group.title}
                                </h3>
                                <ul className="flex flex-col gap-3.5">
                                    {group.links.map((link) => (
                                        <li key={link.text} className="w-full">
                                            <Link
                                                href={link.href}
                                                className="text-[14px] text-[#ECEBEC] hover:text-[#F7941D] transition-colors block leading-snug wrap-break-word"
                                            >
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-14">
                        {rightMenu.map((group) => (
                            <div key={group.title} className="flex flex-col gap-5 w-full min-w-0">
                                <h3 className="text-[#ECEBEC]/50 font-semibold text-[15px] tracking-wide">
                                    {group.title}
                                </h3>
                                <ul className="flex flex-col gap-3.5">
                                    {group.links.map((link) => (
                                        <li key={link.text} className="w-full">
                                            <Link
                                                href={link.href}
                                                className="text-[14px] text-[#ECEBEC] hover:text-[#F7941D] transition-colors block leading-snug wrap-break-word"
                                            >
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-13 grid grid-cols-1 xl:grid-cols-12 gap-10 items-start pb-8 lg:pb-0">

                    <div className="xl:col-span-6 flex flex-col gap-10 xl:max-w-131.25">
                        <p className="text-[14px] lg:text-[18px] w-full max-w-130 font-normal font-Inter text-[#ECEBEC] tracking-[-0.01em] leading-[115%]">
                            Bridging cyber assurance gaps with a transformative integrated risk management engine.
                        </p>

                        <div className="flex flex-wrap gap-8.75 pt-2">
                            {socialIcons.map((icon) => (
                                <Link
                                    key={icon.alt}
                                    href={icon.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 sm:gap-x-18 gap-y-18.5 justify-items-start sm:justify-items-end">
                            {badges.map((badge, idx) => {
                                const badgeImage = (
                                    <Image
                                        src={badge.src}
                                        alt={badge.alt}
                                        className="w-full h-full object-contain transition-all"
                                    />
                                );
                                return (
                                    <div key={idx} className="w-20 h-20 sm:w-23.25 sm:h-23.25 flex items-center justify-center">
                                        {badge.href ? (
                                            <Link href={badge.href} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                                                {badgeImage}
                                            </Link>
                                        ) : (
                                            badgeImage
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>

                <div className="flex flex-col lg:absolute lg:-bottom-1 lg:-left-0.6 gap-4 text-[14px] text-[#ECEBEC] ">
                    <p className="text-[14px] lg:text-[18px] font-normal font-Inter text-[#ECEBEC] leading-[125%] tracking-normal w-full max-w-154.25">
                        Ignyte © {new Date().getFullYear()} All rights reserved. Ignyte Assurance Platform
                    </p>
                    <div className="flex flex-row justify-between sm:justify-start sm:gap-11.75 w-full text-[18px] mt-4">
                        <Link
                            href="/privacy-policy"
                            className="text-[14px] lg:text-[18px] font-normal font-Inter text-[#ECEBEC] hover:text-[#F7941D] underline decoration-solid underline-offset-auto leading-[125%] transition-colors whitespace-nowrap"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms-of-service"
                            className="text-[14px] lg:text-[18px] font-normal font-Inter text-[#ECEBEC] hover:text-[#F7941D] underline decoration-solid underline-offset-auto leading-[125%] transition-colors whitespace-nowrap"
                        >
                            Terms of Serviceform
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
