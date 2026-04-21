import { logos } from "./data";

const Hero = () => {
    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

                {/* Left */}
                <div className="flex flex-col gap-[24px] items-start max-w-[520px]">
                    <h1 className="text-[60px] font-bold leading-tight">
                        Navigating the digital landscape for success
                    </h1>

                    <p className="text-[20px] text-black max-w-[500px]">
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </p>

                    <button className="bg-[#191A23] text-white px-[35px] py-[20px] rounded-[14px] text-[20px] font-medium transition-all duration-300 hover:-translate-y-[2px] cursor-pointer">
                        Book a consultation
                    </button>
                </div>

                {/* Right */}
                <div className="flex justify-center">
                    <img
                        src="/hero.png"
                        alt="Hero illustration"
                        className="max-w-[515px]"
                    />
                </div>

            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-[100px] mt-16 flex flex-wrap items-center justify-between gap-6">
                {logos.map((logo) => (
                    <img
                        key={logo.alt}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-[48px] w-auto transition"
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;