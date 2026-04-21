export const logoContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export const logoItem = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as any,
        },
    },
};