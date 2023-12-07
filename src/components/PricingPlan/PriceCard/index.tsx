import { twMerge } from "tailwind-merge";
import PriceCardContentItem from "./PriceCardContentItem";

interface PriceCardProps {
  title: string;
  description: string;
  price: number;
  pricePeriod: string;
  contents: string[];
  isSelected?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  description,
  price,
  pricePeriod,
  contents,
  isSelected = false,
}) => {
  return (
    <div
      className={twMerge(
        "rounded-3xl border border-zinc-200 p-8",
        isSelected && "border-2 border-indigo-500"
      )}
    >
      <section>
        <span className="sr-only">제목</span>
        <h2
          className={twMerge(
            "line-clamp-1 break-all text-lg font-semibold text-black",
            isSelected && "text-indigo-600"
          )}
        >
          {title}
        </h2>
      </section>
      <section>
        <span className="sr-only">설명</span>
        <p className="mt-4 text-sm text-zinc-500">{description}</p>
      </section>
      <section>
        <span className="sr-only">가격</span>
        <p className="mt-[24px] break-words text-black">
          <span className="text-4xl font-bold">${price.toLocaleString()}</span>
          <span className="text-sm font-semibold">/{pricePeriod}</span>
        </p>
      </section>
      <section>
        <span className="sr-only">구매 버튼</span>
        <button className="mt-6 w-full rounded-md border border-indigo-300 px-3 py-2 text-sm font-semibold text-indigo-500 hover:border-indigo-400">
          Buy plan
        </button>
      </section>
      <section>
        <span className="sr-only">컨텐츠</span>
        <ul className="mt-8 space-y-3">
          {contents.map((content) => (
            <PriceCardContentItem key={content} content={content} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PriceCard;
