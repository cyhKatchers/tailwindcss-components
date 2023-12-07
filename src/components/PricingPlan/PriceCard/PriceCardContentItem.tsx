interface PriceCardContentItemProps {
  content: string;
}

const PriceCardContentItem: React.FC<PriceCardContentItemProps> = ({
  content,
}) => {
  return (
    <li className="flex items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-[24px] w-[20px] stroke-indigo-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
      <span className="text-sm text-zinc-500">{content}</span>
    </li>
  );
};

export default PriceCardContentItem;
