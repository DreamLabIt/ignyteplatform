"use client";

import { useState } from "react";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            name: "Frameworks",
            href: "/frameworks",
            links: ["FedRAMP", "CMMC", "ISO 27001", "HIPAA", "HITRUST", "All Frameworks"]
        },
        {
            name: "Solutions",
            href: "/solutions",
            links: ["DIB", "Healthcare"]
        },
        {
            name: "Platform",
            href: "/platform",
            links: ["Features", "Pricing"]
        },
        {
            name: "Company",
            href: "/company",
            links: ["About us", "Awards and Certifications", "Careers", "Contact us"]
        },
        {
            name: "Resources",
            href: "/resources",
            links: ["All", "Blog", "Product Documentation", "Reckless Compliance", "Emerging Cyber Risk", "Videos", "Latest STIGs"]
        },
    ];

    return (
        <>
            <header className="w-full px-4 sm:px-6 lg:px-8 pt-4 sticky top-0 z-40 bg-transparent">
                <div className="max-w-[1620px] mx-auto h-[82px] bg-white rounded-[50px] shadow-sm border border-slate-100/50 flex items-center justify-between px-6 lg:px-10">

                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <span className="text-2xl font-black tracking-tight text-[#1E374F]">
                            ignyte<span className="text-[#F7941D]">.</span>
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-[50px]">
                        {menuItems.map((item) => (
                            <div key={item.name} className="relative group py-4">
                                <Link
                                    href={item.href}
                                    className="font-sans font-normal text-[18px] leading-[100%] text-[#1E374F] group-hover:text-[#F7941D] flex items-center gap-[10px] transition-colors duration-200"
                                >
                                    {item.name}
                                    <svg className="w-[10px] h-[5px] text-[#1E374F] group-hover:text-[#F7941D] shrink-0 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 10 5">
                                        <path d="M1 1L5 4L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>

                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[220px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 flex flex-col gap-1">
                                        {item.links.map((subLink) => (
                                            <Link
                                                key={subLink}
                                                href={`${item.href}/${subLink.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="font-sans font-medium text-[15px] text-[#1E374F] hover:text-[#F7941D] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
                                            >
                                                {subLink}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <PrimaryButton href="/get-started" text="Get Started" />
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden p-2 text-[#1E374F] hover:text-[#F7941D] focus:outline-none transition-colors"
                        type="button"
                        aria-label="Open menu"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden overflow-y-auto w-full h-full max-w-[375px] ml-auto shadow-2xl ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
                    }`}
                style={{

                    backgroundImage: "linear-gradient(to bottom, rgba(255, 245, 233, 0.95), rgba(255, 255, 255, 0.98), rgba(240, 247, 25xFF, 0.95)), url('/your-bg-image-path.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="p-6 min-h-full flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-[#1E374F]">
                                ignyte<span className="text-[#F7941D]">.</span>
                            </Link>
                            <div className="flex items-center gap-3">
                                <PrimaryButton href="/get-started" text="Get Started" />
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-1.5 text-[#1E374F] hover:text-red-500 transition-colors"
                                    type="button"
                                    aria-label="Close menu"
                                >
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col gap-10">
                            {menuItems.map((cat) => (
                                <div key={cat.name} className="flex flex-col gap-4">
                                    <div>
                                        <span className="inline-block text-[12px] font-medium font-sans px-3 py-1 bg-slate-200/60 rounded-[100px] text-[#1E374F] opacity-80 uppercase tracking-wider">
                                            {cat.name}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-4 pl-1">
                                        {cat.links.map((link) => (
                                            <Link
                                                key={link}
                                                href={`${cat.href}/${link.toLowerCase().replace(/\s+/g, "-")}`}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="font-sans font-semibold text-[24px] leading-[115%] tracking-[-1%] text-[#1E374F] hover:text-[#F7941D] transition-colors"
                                            >
                                                {link}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 pt-6 border-t border-amber-200/30 flex flex-wrap gap-5 justify-center text-[#1E374F]/80">
                        <Link href="#" className="text-sm font-medium hover:text-[#F7941D]">X.com</Link>
                        <Link href="#" className="text-sm font-medium hover:text-[#F7941D]">Facebook</Link>
                        <Link href="#" className="text-sm font-medium hover:text-[#F7941D]">GitHub</Link>
                        <Link href="#" className="text-sm font-medium hover:text-[#F7941D]">LinkedIn</Link>
                        <Link href="#" className="text-sm font-medium hover:text-[#F7941D]">Spotify</Link>
                    </div>
                </div>
            </div>
        </>
    );
}