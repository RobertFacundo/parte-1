import ArrowButton from "../../shared/components/ArrowButton";
import { motion } from "framer-motion";

type Props = {
    item: { text: string };
};

const CaseStudyCardMobile = ({ item }: Props) => {
    return (
        <motion.div className="
            min-w-[280px]
            bg-[#191A23]
            rounded-[45px]
            p-6
            flex flex-col gap-6
            snap-start
        "
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
        >
            <p className="text-[18px] text-white">
                {item.text}
            </p>

            <div className="flex items-center gap-[15px] cursor-pointer">

                <span className="relative text-[#B9FF66] text-[20px]
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                    after:w-0 after:bg-[#B9FF66] after:transition-all hover:after:w-full">
                    Learn more
                </span>

                <ArrowButton bg="bg-transparent" stroke="#B9FF66" />
            </div>
        </motion.div>
    );
};

export default CaseStudyCardMobile;