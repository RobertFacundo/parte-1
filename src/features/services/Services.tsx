import { services } from "./data";

const variants = [
    {
        bg: "bg-[#F3F3F3]",
        badge: "bg-[#B9FF66] text-black",
        arrowBg: "bg-[#191A23]",
        arrowText: "text-[#B9FF66]",
        text: "text-black",
    },
    {
        bg: "bg-[#B9FF66]",
        badge: "bg-white text-black",
        arrowBg: "bg-[#191A23]",
        arrowText: "text-[#B9FF66]",
        text: "text-black",
    },
    {
        bg: "bg-[#191A23]",
        badge: "bg-white text-black",
        arrowBg: "bg-white",
        arrowText: "text-black",
        text: "text-white",
    },
];

const Services = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* header */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-10">

                    <h2 className="bg-[#B9FF66] px-2 py-1 rounded-md text-[40px] font-bold w-fit">
                        Services
                    </h2>

                    <p className="text-[18px] font-normal leading-[100%] text-[#191A23] max-w-[500px]">
                        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                    </p>

                </div>

                {/* grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => {
                        const variant = variants[index % variants.length];

                        return (
                            <div
                                key={service.id}
                                className={`w-[600px] h-[310px] p-[50px] rounded-[45px] border border-[#191A23] shadow-[0px_5px_0px_0px_#191A23] flex justify-between items-center ${variant.bg}`}
                            >

                                <div className="flex flex-col justify-between h-full">

                                    <div className="flex flex-col gap-2">
                                        {service.title.map((line, i) => (
                                            <span
                                                key={i}
                                                className={`inline-flex w-fit px-[7px] py-[4px] rounded-[7px] font-bold text-[30px] leading-tight ${variant.badge}`}
                                            >
                                                {line}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-[15px] cursor-pointer">
                                        <div className={`w-[41px] h-[41px] flex items-center justify-center rounded-full ${variant.arrowBg}`}>
                                            <svg
                                                width="33"
                                                height="33"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className={`${variant.arrowText}`}
                                            >
                                                <path
                                                    d="M7 17L17 7M17 7H9M17 7V15"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>

                                        <span className={`text-[20px] leading-[28px] font-normal ${variant.text}`}>
                                            Learn more
                                        </span>
                                    </div>

                                </div>

                                {/* RIGHT */}
                                <img
                                    src={service.image}
                                    className="max-w-[210px] w-full h-auto object-contain"
                                />
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    )
}

export default Services;