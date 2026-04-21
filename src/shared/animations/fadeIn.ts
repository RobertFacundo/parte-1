export const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 0.8,
      ease:  [0.25, 0.1, 0.25, 1] as any,
    },
  }),
};