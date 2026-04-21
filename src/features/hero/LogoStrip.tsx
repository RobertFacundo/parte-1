import type { Logo } from "./types";
import { motion } from "framer-motion";
import { logoContainer, logoItem } from "../../shared/animations/logoStagger";

type Props = {
    logos: Logo[];
};

const LogoStrip = ({ logos }: Props) => {
    return (
        <motion.div className="max-w-[1440px] mx-auto px-4 md:px-[100px] mt-23 flex flex-wrap items-center justify-between gap-6"
            variants={logoContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            {logos.map((logo) => (
                <motion.img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-[48px] w-auto"
                    variants={logoItem}
                />
            ))}
        </motion.div>
    );
};

export default LogoStrip;