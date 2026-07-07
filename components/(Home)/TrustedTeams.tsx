import Image from "next/image";
import Link from "next/link";
import InkitLogo from "../../assets/logo/inkit.png";
import GovEagleLogo from "../../assets/logo/goveagle.png";
import RiverainLogo from "../../assets/logo/riverain.png";
import GenetesisLogo from "../../assets/logo/genetesis.png";
import AreteLogo from "../../assets/logo/arete.png";
import ValidEvalLogo from "../../assets/logo/valid.png";
import AllinaHealthLogo from "../../assets/logo/allian.png";
import EpirusLogo from "../../assets/logo/epirus.png";
import SealLogo from "../../assets/logo/asserts.png";

export default function TrustedTeams() {
    const logos = [
        { id: 1, src: InkitLogo, alt: "Inkit Logo" },
        { id: 2, src: SealLogo, alt: "Government Seal Logo" },
        { id: 3, src: GovEagleLogo, alt: "GovEagle Logo" },
        { id: 4, src: RiverainLogo, alt: "Riverain Technologies Logo" },
        { id: 5, src: GenetesisLogo, alt: "Genetesis Logo" },
        { id: 6, src: AreteLogo, alt: "Arete Logo" },
        { id: 7, src: ValidEvalLogo, alt: "Valid Eval Logo" },
        { id: 8, src: AllinaHealthLogo, alt: "Allina Health Logo" },
        { id: 9, src: EpirusLogo, alt: "Epirus Logo" },
    ];

    return (
        <section className="w-full bg-[#F8F9FA] pt-2 pb-12 overflow-hidden select-none">

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes customInfiniteScroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
                .auto-scroll-wrapper {
                    animation: customInfiniteScroll 25s linear infinite;
                }
            `}} />

            <div className="w-full max-w-[1955px] mx-auto flex flex-col items-center">

                <h2 className="font-Inter font-semibold text-[26px] sm:text-[32px] md:text-[40px] leading-[125%] text-[#1E374F] text-center max-w-222.5 px-4 mb-11.5">
                    Mission-Critical Teams Trust Ignyte
                </h2>

                <div className="w-full inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)] mb-8">

                    <div className="auto-scroll-wrapper flex items-center justify-center gap-4 min-w-full shrink-0 pr-4">
                        {logos.map((logo) => (
                            <div
                                key={`loop-1-${logo.id}`}
                                className="h-19 w-40 sm:w-45 md:w-47.5 shrink-0 bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center p-4 transition-transform hover:scale-105 duration-200"
                            >
                                <div className="relative w-full h-full max-h-11.25 flex items-center justify-center">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="object-contain max-w-full max-h-11.25 w-auto h-auto"
                                        priority
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="auto-scroll-wrapper flex items-center justify-center gap-4 min-w-full shrink-0 pr-4" aria-hidden="true">
                        {logos.map((logo) => (
                            <div
                                key={`loop-2-${logo.id}`}
                                className="h-19 w-40 sm:w-45 md:w-47.5 shrink-0 bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center p-4 transition-transform hover:scale-105 duration-200"
                            >
                                <div className="relative w-full h-full max-h-11.25 flex items-center justify-center">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="object-contain max-w-full max-h-11.25 w-auto h-auto"
                                        priority
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <Link
                        href="/customers"
                        className="group flex items-center gap-2 font-Inter font-semibold text-[16px] text-[#1E374F] transition-all pb-1 border-b-2 border-[#1E374F]/20 hover:border-[#1E374F]"
                    >
                        Hear From Our Customers
                        <span className="transition-transform group-hover:translate-x-1 duration-200 text-[18px]">
                            &rarr;
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}