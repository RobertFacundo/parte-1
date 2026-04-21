import ArrowButton from "../../shared/components/ArrowButton";
import { serviceVariants } from "./services.styles";
import { motion } from "framer-motion";
import { serviceCard } from "../../shared/animations/serviceCards";

type Props = {
    service: {
        id: string;
        title: string[];
        image: string;
    };
    index: number;
};

const ServiceCard = ({ service, index }: Props) => {
    const variant = serviceVariants[index % serviceVariants.length];

    return (
        <motion.div
            className={` 
                w-full md:w-[600px]
                h-auto md:h-[310px]
                p-[24px] md:p-[50px]
                rounded-[45px]
                border border-[#191A23]
                shadow-[0px_5px_0px_0px_#191A23]
                flex flex-row justify-between items-start md:items-center
                ${variant.bg}`}
            variants={serviceCard}
            whileHover={{ y: -4, scale: 1.01 }}
        >
            <div className="flex flex-col justify-between h-full w-full gap-6 md:gap-0">

                <div className="flex flex-col gap-0">
                    {service.title.map((line, i) => (
                        <span
                            key={i}
                            className={`inline-flex w-fit px-[7px] py-[1px] rounded-[7px] 
                                        font-bold text-[30px] leading-tight ${variant.badge}`
                            }
                        >
                            {line}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-[15px] cursor-pointer">
                    <ArrowButton
                        bg={variant.arrowBg}
                        stroke={variant.arrowStroke}
                    />
                    <span
                        className={`relative text-[20px] leading-[28px] font-normal 
                                    ${variant.text} after:absolute after:left-0 after:-bottom-1 
                                    after:h-[2px] after:w-0 ${variant.hoverLine} 
                                    after:transition-all hover:after:w-full`
                        }
                    >
                        Learn more
                    </span>

                </div>
            </div>

            <img
                src={service.image}
                className="w-full max-w-[210px] h-auto mt-6 md:mt-0 mx-auto md:mx-0"
            />
        </motion.div>
    );
};

export default ServiceCard;