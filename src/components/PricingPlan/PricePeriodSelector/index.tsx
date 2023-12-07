import { twMerge } from "tailwind-merge";
import { PricePeriodType } from "./PricePeriodSelector.types";

interface PricePeriodSelectorProps {
  selectedPricePeriod: PricePeriodType;
  pricePeriodData: ReadonlyArray<PricePeriodType>;
  onClickPricePeriod: (pricePeriod: PricePeriodType) => void;
}

const PricePeriodSelector: React.FC<PricePeriodSelectorProps> = ({
  selectedPricePeriod,
  pricePeriodData,
  onClickPricePeriod,
}) => {
  const handleClickPricePeriod = (pricePeriod: PricePeriodType) => () => {
    onClickPricePeriod(pricePeriod);
  };

  return (
    <div className="mx-auto flex w-fit items-center gap-1 rounded-full border border-zinc-200 p-1">
      {pricePeriodData.map((pricePeriod) => (
        <button
          key={pricePeriod}
          className={twMerge(
            "rounded-full px-[10px] py-[4px] text-xs font-semibold text-zinc-500",
            pricePeriod === selectedPricePeriod && "bg-indigo-600 text-white"
          )}
          onClick={handleClickPricePeriod(pricePeriod)}
        >
          {pricePeriod}
        </button>
      ))}
    </div>
  );
};

export default PricePeriodSelector;
