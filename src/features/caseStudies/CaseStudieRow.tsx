import ArrowButton from "../../shared/components/ArrowButton";
import { motion } from 'framer-motion'

type Props = {
    item: { text: string };
    isLast: boolean;
};

const CaseStudyRow = ({ item, isLast }: Props) => {
    return (
        <motion.div className="flex items-center"
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
            }}
        >

            <div className="flex flex-col gap-6 max-w-[300px]">

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
            </div>

            {!isLast && (
                <div className="w-px h-[186px] bg-white/20 mx-[32px]" />
            )}

        </motion.div>
    );
};

export default CaseStudyRow;