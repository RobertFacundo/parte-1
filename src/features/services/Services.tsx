import { services } from "./data";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { serviceGrid } from "../../shared/animations/serviceCards";
import { fadeUp } from "../../shared/animations";

const Services = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">

                <motion.div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-10 text-center md:text-left items-center md:items-start"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.h2
                        className="bg-[#B9FF66] px-2 py-1 rounded-md text-[40px] font-bold w-fit"
                        variants={fadeUp}
                        transition={{ delay: 0 }}
                    >
                        Services
                    </motion.h2>

                    <motion.p
                        className="text-[18px] font-normal leading-[100%] text-[#191A23] max-w-[500px]"
                        variants={fadeUp}
                        transition={{ delay: 0.15 }}
                    >
                        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                    </motion.p>
                </motion.div>

                <motion.div className="grid md:grid-cols-2 gap-6"
                    variants={serviceGrid}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                        />
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default Services;