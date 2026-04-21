import { logos } from "./data";
import LogoStrip from "./LogoStrip";
import LogoMarquee from "./LogoMarquee";
import { motion } from 'framer-motion';
import { fadeUp, fadeIn, staggerContainer } from '../../shared/animations/index';

const Hero = () => {
    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <motion.div className="flex flex-col gap-[24px] items-start max-w-[520px]"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >
                    <motion.h1 className="text-[60px] font-bold leading-tight order-1"
                        variants={fadeUp}
                        custom={0.1}
                    >
                        Navigating the digital landscape for success
                    </motion.h1>

                    <motion.div className="md:hidden order-2 flex justify-center w-full"
                        variants={fadeIn}
                        custom={0.2}
                    >
                        <img
                            src="/hero.png"
                            alt="Hero illustration"
                            className="max-w-[400px] w-full"
                        />
                    </motion.div>

                    <motion.p className="text-[20px] text-black max-w-[500px] order-3"
                        variants={fadeUp}
                        custom={0.3}
                    >
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </motion.p>

                    <motion.button className="bg-[#191A23] text-white w-full md:w-[264px] px-[35px] py-[20px] rounded-[14px] text-[20px] font-medium transition-all duration-300 hover:-translate-y-[2px] cursor-pointer order-4"
                        variants={fadeUp}
                        custom={0.4}
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Book a consultation
                    </motion.button>
                </motion.div>

                <motion.div className="hidden md:flex justify-center"
                     variants={fadeIn}
                    initial="hidden"
                    animate="show"
                    custom={0.2}
                >
                    <img
                        src="/hero.png"
                        alt="Hero illustration"
                        className="max-w-[515px]"
                    />
                </motion.div>

            </div>

            <div className="hidden md:block">
                <LogoStrip logos={logos} />
            </div>

            <div className="md:hidden">
                <LogoMarquee logos={logos} />
            </div>
        </section>
    );
};

export default Hero;