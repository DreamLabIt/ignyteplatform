import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CustomerImg1 from "../../assets/fontend/CustomerImg1.png";
import CustomerImg2 from "../../assets/fontend/CustomerImg2.png";
import CustomerImg3 from "../../assets/fontend/CustomerImg3.png";

interface StoryItem {
    quote: string;
    author: string;
    role: string;
    image: StaticImageData;
    imageAlt: string;
    badgeTopRight: string;
    badgeBottomLeft: string;
    isReversed?: boolean;
}

const stories: StoryItem[] = [
    {
        quote:
            "“Serving in the Air Force taught me that cybersecurity isn't just about technology, it's about trust. After more than 15 years in cyber defense, I saw how complex and fragmented the FedRAMP process was for vendors trying to serve federal agencies. That challenge is exactly why I founded Ignyte. Our mission is to make compliance faster, clearer, and achievable for every organization that wants to work with the government.”",
        author: "Max Aulkh",
        role: "CEO, Ignyte",
        image: CustomerImg1,
        imageAlt: "Max Aulkh, CEO of Ignyte",
        badgeTopRight: "Air Force Veteran",
        badgeBottomLeft: "15+ years of cybersecurity experience",
        isReversed: false,
    },
    {
        quote:
            "“Ignyte has been instrumental in helping us bridge the gap between our innovative solutions and the security requirements needed to scale within the federal space. Their deep understanding of the audit process, combined with a flexible and collaborative audit approach, has positioned us for long-term success.”",
        author: "Jacob Ablowitz",
        role: "Chief Operating Officer and Chief Technology Officer, Valid Eval",
        image: CustomerImg2,
        imageAlt: "Jacob Ablowitz, COO and CTO of Valid Eval",
        badgeTopRight: "300+ Hours Saved",
        badgeBottomLeft: "2X Revenue",
        isReversed: true,
    },
    {
        quote:
            "“Almost everyone we've talked to in the private sector and in the government... what they actually know about cybersecurity [is] only skin deep. The Ignyte team is able to talk with authority and confidence about what is known and what is out there. Because of your background and experience, you've all been able to take everything we've done and paint... an accurate story of where we are at currently in the process and to help us explain where we're at to the government entities that we're trying to work with.”",
        author: "Ahmed Qureshi",
        role: "President and COO, BILT",
        image: CustomerImg3,
        imageAlt: "Ahmed Qureshi with a colleague reviewing documents at a conference",
        badgeTopRight: "100% Visibility",
        badgeBottomLeft: "Air Force & Navy Contracts Secured",
        isReversed: false,
    },

];

function StoryRow({ story }: { story: StoryItem }) {
    return (
        <div
            className={`flex flex-col  items-center ${story.isReversed ? "md:flex-row-reverse justify-between gap-10 md:gap-0" : "md:flex-row gap-10 md:gap-30"
                }`}
        >
            <div className="relative w-full md:w-1/2 max-w-192.75 px-4 md:px-0">
                <div className="relative aspect-786/468 w-full rounded-2xl">
                    <Image
                        src={story.image}
                        alt={story.imageAlt}
                        fill
                        sizes="(max-width: 741px) 100vw, 50vw"
                        className=" w-full h-auto object-cover"
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-6 sm:gap-7.75 px-2 md:px-0 max-w-182.75 pt-1">
                <p className="font-inter font-semibold max-w-172.75 text-lg sm:text-[22px] lg:text-[24px] leading-[125%] tracking-[0%] text-[#1E374F] ">
                    {story.quote}
                </p>

                <div className="flex flex-col gap-1.5">
                    <span className="font-inter font-medium text-[14px] sm:text-[18px] text-[#1E374F]">
                        {story.author}
                    </span>
                    <span className="font-inter font-medium text-[14px] md:text-[18px] text-[#1E374F80]">
                        {story.role}
                    </span>
                </div>

                <Link
                    href="#"
                    className="inline-flex w-fit items-center gap-2 font-inter font-semibold text-[16px] sm:text-[20px] text-[#4F91CE] hover:text-[#3b72a6] transition-colors group"
                >
                    Read More Customer Stories
                    <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </Link>
            </div>
        </div>
    );
}

export default function CustomerStories(): React.ReactElement {
    return (
        <section className="w-full pt-16 pb-35 px-5">
            <div className="mx-auto w-full max-w-[1620px]  flex flex-col gap-14 sm:gap-10">
                <h2 className="font-inter font-semibold text-2xl sm:text-[28px] lg:text-[40px] text-[#1E374F] tracking-[-0.5%] leading-31.25">
                    The Nation&apos;s Federal Sector Loves Ignyte
                </h2>

                <div className="flex flex-col gap-35 ">
                    {stories.map((story) => (
                        <StoryRow key={story.author} story={story} />
                    ))}
                </div>
            </div>
        </section>
    );
}