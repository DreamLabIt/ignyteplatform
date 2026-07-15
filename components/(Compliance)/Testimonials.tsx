import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import TestimonialBg from "../../assets/background/testimonials.jpg";
import JaymeImg from "../../assets/people/jayme.png";
import JeffImg from "../../assets/people/jeff.png";
import TravisImg from "../../assets/people/travis.png";
import BretImg from "../../assets/people/bret.png";

interface TestimonialItem {
    name: string;
    title: string;
    quote: string;
    image: StaticImageData;
    link: string;
}

const testimonialsData: TestimonialItem[] = [
    {
        name: "Jayme Rahz",
        title: "CEO, Midway Swiss Turn, Inc.",
        quote: "With Ignyte, we’ve streamlined our cybersecurity efforts, reaching efficiency, which was not otherwise achievable with our limited resources.",
        image: JaymeImg,
        link: "/success-stories/jayme"
    },
    {
        name: "Jeff Kovacich",
        title: "CVP, Information Technology, Haltec Corporation, Inc.",
        quote: "The Ignyte delivery team exhibits customer service skills that are second to none. Their expert knowledge helped us make the right decisions for our organization in adopting new policies, procedures, and technology. I would say this collaboration saved us a significant amount of time.",
        image: JeffImg,
        link: "/success-stories/jeff"
    },
    {
        name: "Travis Moore",
        title: "CEO, Jemco Components & Fabrication, Inc",
        quote: "Ignyte stood out based on their knowledge and experience in cybersecurity, and ability to scale and grow with us. The technology that they've built enables them to have the best product... In combination with their level of service, it really made for a perfect partnership.",
        image: TravisImg,
        link: "/success-stories/travis"
    },
    {
        name: "Bret Joslyn",
        title: "COO, Joslyn",
        quote: "It was an eye-opener on opportunities that would be out there for us, once we get to the Level 2 of CMMC. From the very beginning, I was impressed with the Ignyte team’s knowledge and experience.",
        image: BretImg,
        link: "/success-stories/bret"
    }
];

export default function Testimonials() {
    return (
        <section
            className="w-full min-h-222.25 py-20 lg:py-25 flex items-center select-none overflow-hidden px-5"
            style={{
                backgroundImage: `url(${TestimonialBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="max-w-[1620px] mx-auto  w-full flex flex-col">

                <h2 className="max-w-222.5 font-Inter font-semibold text-[32px] sm:text-[36px] md:text-[40px] leading-[125%] text-[#ECEBEC] mb-11.25 lg:mb-15 tracking-[1%^]">
                    Hear From Your Fellow <br className="hidden sm:inline" /> DoD Contractors
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center lg:justify-items-stretch">
                    {testimonialsData.map((item, index) => (
                        <div
                            key={index}
                            className="w-full max-w-96.25 rounded-[20px] p-6.25 flex flex-col justify-between relative shadow-sm overflow-hidden"
                            style={{
                                background: "linear-gradient(24.15deg, rgba(146, 181, 215, 0) 5.42%, rgba(146, 181, 215, 0.7) 92.97%), linear-gradient(0deg, #F1F1F1, #F1F1F1)"
                            }}
                        >
                            <div>
                                <div className="flex items-start gap-5 mb-12">
                                    <div className="w-26 h-26 rounded-full overflow-hidden shrink-0 relative">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h3 className="font-Inter font-medium text-[18px] leading-[125%] text-[#1E374F] mt-2 mb-1">
                                            {item.name}
                                        </h3>
                                        <p className="font-Inter font-medium text-[14px] leading-[135%] text-[#1E374F80] max-w-52.75">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>

                                <p className="font-Inter font-semibold text-[16px] xl:text-[20px] leading-[125%] text-[#1E374F] tracking-normal line-clamp-12">
                                    “{item.quote}”
                                </p>
                            </div>

                            <div className="mt-6 pt-5 ">
                                <Link
                                    href={item.link}
                                    className="inline-flex items-center justify-between w-full font-Inter font-semibold text-[16px] md:text-[20px] text-[#4F91CE] hover:text-[#3b7cb7] transition-colors border-b border-[#4F91CE] pb-1"
                                >
                                    <span>Read the Success Story</span>
                                    <span className="text-[20px] leading-none select-none">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}