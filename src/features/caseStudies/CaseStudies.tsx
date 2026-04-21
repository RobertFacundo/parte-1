import { caseStudies } from "./data"
import CaseStudyRow from "./CaseStudieRow";
import CaseStudyCardMobile from "./CaseStudyCardMobile";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../shared/animations";

const CaseStudies = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">

                <motion.div
                    className="flex flex-col md:flex-row md:items-center gap-4 mb-10 text-center md:text-left items-center md:items-start"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2 className="bg-[#B9FF66] px-2 py-[4px] rounded-[7px] text-[40px] font-bold w-fit" variants={fadeUp}>
                        Case Studies
                    </motion.h2>

                    <motion.p className="text-[18px] text-[#191A23] max-w-[580px]" variants={fadeUp}>
                        Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                    </motion.p>
                </motion.div>

                <motion.div
                    className="hidden md:flex bg-[#191A23] rounded-[45px] px-[60px] py-[70px] items-center justify-between gap-[64px]"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {caseStudies.map((item, index) => (
                        <CaseStudyRow
                            key={index}
                            item={item}
                            isLast={index === caseStudies.length - 1}
                        />
                    ))}
                </motion.div>

                <motion.div
                    className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 no-scrollbar"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {caseStudies.map((item, index) => (
                        <CaseStudyCardMobile
                            key={index}
                            item={item}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudies