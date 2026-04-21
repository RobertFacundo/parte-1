import proposalImage from './assets/proposal.png'
import { motion } from 'framer-motion';
import { fadeUp} from '../../shared/animations/index';

const Proposal = () => {
    return (
        <section className="py-5">
            <div className="max-w-7xl mx-auto px-4">

                <motion.div className="
                    bg-[#F3F3F3]
                    w-full max-w-[1240px]
                    rounded-[45px]
                    px-[24px] md:px-[60px]
                    py-[40px] md:py-0
                    flex flex-col md:flex-row
                    items-start md:items-center
                    justify-between
                    gap-10 md:gap-[275px]
                    overflow-visible
                "
                    initial="hidden"
                    whileInView="show"
                    viewport={{  amount: 0.3 }}
                >

                    <motion.div className="flex flex-col gap-6 w-full md:max-w-[500px] text-left"
                        variants={fadeUp}
                    >

                        <motion.h2 className="text-[32px] md:text-[40px] font-bold leading-tight" variants={fadeUp}>
                            Let’s make things happen
                        </motion.h2>

                        <motion.p className="text-[16px] md:text-[18px] text-[#191A23]" variants={fadeUp}>
                            Contact us today to learn more about how our digital marketing services can help your business grow.
                        </motion.p>

                        <motion.button className="
                            bg-[#191A23]
                            text-white
                            w-full md:w-auto
                            px-[35px] py-[20px]
                            rounded-[14px]
                            text-[18px] md:text-[20px]
                            font-medium
                            transition-all duration-300
                            hover:-translate-y-[2px]
                            cursor-pointer
                        "
                            variants={fadeUp}
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get your free proposal
                        </motion.button>

                    </motion.div>

                    <motion.img
                        src={proposalImage}
                        className="
                            hidden md:block
                            w-[494px]
                            h-[394px]
                            object-contain
                            shrink-0
                        "
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />

                </motion.div>

            </div>
        </section>
    );
};

export default Proposal;