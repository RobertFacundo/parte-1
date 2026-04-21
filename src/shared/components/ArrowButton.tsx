type Props = {
  bg: string;
  stroke: string;
  size?: number;
};

const ArrowButton = ({ bg, stroke, size = 33 }: Props) => {
  return (
    <div
      className={`w-[41px] h-[41px] flex items-center justify-center rounded-full ${bg}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7 17L17 7M17 7H9M17 7V15"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowButton;