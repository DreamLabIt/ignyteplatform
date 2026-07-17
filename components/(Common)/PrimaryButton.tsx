import Link from "next/link";

interface PrimaryButtonProps {
    text?: string;
    href?: string;
    onClick?: () => void;
    minWidth?: string; 
}

export default function PrimaryButton({
    text = "Get Started",
    href,
    onClick,
    minWidth = "min-w-44.25"
}: PrimaryButtonProps) {
    const content = (
        <>
            <span className="font-Inter font-semibold text-[14px] lg:text-[20px] leading-[100%] tracking-[0%] text-white select-none whitespace-nowrap">
                {text}
            </span>
            <div className="w-8.5 h-8.5 shrink-0 rounded-full bg-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <svg
                    className="w-4 h-4 text-[#1E374F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                </svg>
            </div>
        </>
    );

    const className = `group inline-flex items-center justify-between ${minWidth} w-auto h-11 md:h-13 bg-[#F7941D] hover:bg-[#e08316] rounded-[100px] py-1.75 md:py-3.75 pl-4 pr-2.25 transition-all duration-200 active:scale-[0.98]`;

    if (href) {
        return (
            <Link href={href} className={className}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={className} type="button">
            {content}
        </button>
    );
}