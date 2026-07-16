"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import backgrounds from "../../assets/background/navbar-bg.png";
import Logo from "../../assets/logo/logo.png";
import TwitterIcon from "../../assets/icons/X.png";
import FacebookIcon from "../../assets/icons/FB.png";
import GithubIcon from "../../assets/icons/Git.png";
import LinkedinIcon from "../../assets/icons/LinkedinIcon.png";
import SpotifyIcon from "../../assets/icons/Spotify.png";
import AppleIcon from "../../assets/icons/Apple.png";
import YoutubeIcon from "../../assets/icons/YT.png";

interface MenuItem {
    name: string;
    href: string;
    badgeColor: string;
    links: string[];
}

interface SocialItem {
    src: StaticImageData;
    alt: string;
    href: string;
}

export default function Navbar(): React.ReactElement {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const menuItems: MenuItem[] = [
        {
            name: "Frameworks",
            href: "/frameworks",
            badgeColor: "bg-[#4F91CE] text-[#ECEBEC]",
            links: ["FedRAMP", "CMMC", "ISO 27001", "HIPAA", "HITRUST", "All Frameworks"]
        },
        {
            name: "Solutions",
            href: "/solutions",
            badgeColor: "bg-[#F7941D] text-[#ECEBEC]",
            links: ["DIB", "Healthcare"]
        },
        {
            name: "Platform",
            href: "/platform",
            badgeColor: "bg-[#333132] text-[#ECEBEC]",
            links: ["Features", "Pricing"]
        },
        {
            name: "Company",
            href: "/company",
            badgeColor: "text-[#1E374F] border border-black/90",
            links: ["About us", "Awards and Certifications", "Careers", "Contact us"]
        },
        {
            name: "Resources",
            href: "/resources",
            badgeColor: "bg-[#FFB703] text-[#333132]",
            links: ["All", "Blog", "Product Documentation", "Reckless Compliance", "Emerging Cyber Risk", "Videos", "Latest STIGs"]
        },
    ];

    const socialMedia: SocialItem[] = [
        { src: TwitterIcon as StaticImageData, alt: "X (Twitter)", href: "#" },
        { src: FacebookIcon as StaticImageData, alt: "Facebook", href: "#" },
        { src: GithubIcon as StaticImageData, alt: "GitHub", href: "#" },
        { src: LinkedinIcon as StaticImageData, alt: "LinkedIn", href: "#" },
        { src: SpotifyIcon as StaticImageData, alt: "Spotify", href: "#" },
        { src: AppleIcon as StaticImageData, alt: "Apple", href: "#" },
        { src: YoutubeIcon as StaticImageData, alt: "YouTube", href: "#" },
    ];

    return (
        <section className="relative w-full">
            <header className="absolute top-9.75 left-0 w-full px-4 sm:px-6 lg:px-7 z-40 bg-transparent">
                <div className="max-w-[1620px] mx-auto h-20.5 bg-white rounded-[50px] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.07)] flex items-center relative px-6 pl-3">

                    <div className="flex items-center shrink-0">
                        <Link href="/" className="block">
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={160}
                                height={50}
                                className="w-19 h-6 md:w-40 md:h-12.5 object-contain opacity-100 rotate-0"
                                priority
                            />
                        </Link>
                    </div>
                    <nav className="hidden lg:flex items-center gap-[9.6%] ml-[5.1%] h-full">
                        {menuItems.map((item) => (
                            <div key={item.name} className="relative group flex items-center h-full">
                                <Link
                                    href={item.href}
                                    className="font-['Inter',sans-serif] font-normal text-[18px] leading-[100%] text-[#1E374F] tracking-[0%] flex items-center gap-2.5 transition-colors duration-200 hover:text-[#F7941D]"
                                >
                                    {item.name}
                                    <svg className="w-2.5 h-1.25 text-[#1E374F] transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 10 5">
                                        <path d="M1 1L5 4L9 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>

                                <div className="absolute top-18.75 left-0 w-max max-w-none opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                                    <div className="bg-white shadow-[0px_10px_30px_0px_rgba(0,0,0,0.07)] flex flex-col w-full rounded-xl overflow-hidden border border-slate-50">
                                        {item.links.map((subLink) => (
                                            <Link
                                                key={subLink}
                                                href={`${item.href}/${subLink.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="font-['Inter',sans-serif] font-medium text-[14px] text-[#1E374F] hover:text-white hover:bg-[#F7941D] px-6 py-3 w-full block transition-colors duration-150"
                                            >
                                                {subLink}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav>

                    <div className="hidden lg:flex ml-auto -mr-2 items-center">
                        <PrimaryButton href="/get-started" text="Get Started" />
                    </div>

                    <div className="lg:hidden ml-auto">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="p-2 text-[#1E374F] hover:text-[#F7941D] focus:outline-none transition-colors"
                            type="button"
                            aria-label="Open menu"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-50 transition-all duration-500 lg:hidden overflow-y-auto w-full h-full shadow-2xl ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
                    }`}
            >

                <div
                    className="p-6 min-h-screen flex flex-col justify-between max-w-125 mx-auto md:max-w-full"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${backgrounds.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div>
                        <div className="flex items-center justify-between">
                            <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                <Image src={Logo} alt="Logo" className="w-19 h-6" />
                            </Link>
                            <div className="flex items-center max-w-44.25 max-h-13 ">
                                <PrimaryButton href="/get-started" text="Get Started" />
                            </div>
                        </div>

                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-1.5 text-[#1E374F] hover:text-[#F7941D] transition-colors focus:outline-none"
                                type="button"
                                aria-label="Close menu"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-8 flex flex-col gap-10">
                            {menuItems.map((cat) => (
                                <div key={cat.name} className="flex flex-col gap-4">
                                    <div>
                                        <span className={`inline-block text-[11px] font-bold font-Inter px-3.75 py-1.25 rounded-[100px] tracking-wider scale-95 origin-left ${cat.badgeColor}`}>
                                            {cat.name}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-4 pl-1">
                                        {cat.links.map((link) => (
                                            <Link
                                                key={link}
                                                href={`${cat.href}/${link.toLowerCase().replace(/\s+/g, "-")}`}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="font-Inter font-semibold text-[24px] sm:text-[24px] leading-[115%] tracking-tight text-[#1E374F] hover:text-[#F7941D] transition-colors"
                                            >
                                                {link}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-25.5 pb-4">
                        <div className="flex flex-wrap gap-18.75 gap-y-6.25">
                            {[
                                { src: TwitterIcon, alt: "X (Twitter)", href: "#" },
                                { src: FacebookIcon, alt: "Facebook", href: "#" },
                                { src: GithubIcon, alt: "GitHub", href: "#" },
                                { src: LinkedinIcon, alt: "LinkedIn", href: "#" },
                                { src: SpotifyIcon, alt: "Spotify", href: "#" },
                                { src: AppleIcon, alt: "Apple", href: "#" },
                                { src: YoutubeIcon, alt: "YouTube", href: "#" },
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="hover:scale-105 transition-transform duration-200 shrink-0 block"
                                >
                                    <Image
                                        src={social.src}
                                        alt={social.alt}
                                        className="w-8.75 h-8.75 object-contain"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}