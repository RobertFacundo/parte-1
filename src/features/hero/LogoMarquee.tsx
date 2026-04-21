import type { Logo } from "./types";

type Props = {
    logos: Logo[];
};

const LogoMarquee = ({ logos }: Props) => {
    return (
        <div className="md:hidden overflow-hidden w-full mt-12 space-y-6">
            <div className="flex w-max items-center animate-marquee-left gap-16">
                {[...logos, ...logos].map((logo, i) => (
                    <img
                        key={`left-${i}`}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-[48px] w-auto"
                    />
                ))}
            </div>

            <div className="flex w-max items-center animate-marquee-right gap-16">
                {[...logos, ...logos].map((logo, i) => (
                    <img
                        key={`right-${i}`}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-[48px] w-auto"
                    />
                ))}
            </div>

        </div>
    );
};

export default LogoMarquee;