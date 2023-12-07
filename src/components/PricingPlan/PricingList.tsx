import PriceCard from "./PriceCard";
import { PricePeriodType } from "./PricePeriodSelector/PricePeriodSelector.types";

interface PricingListProps {
  selectedPricePeriod: PricePeriodType;
}

const PricingList: React.FC<PricingListProps> = ({ selectedPricePeriod }) => {
  return (
    <ul className="mt-10 grid grid-cols-1 gap-8">
      <li>
        <PriceCard
          title="Title"
          description="this is description"
          price={100}
          pricePeriod={selectedPricePeriod}
          contents={["hello", "world", "!!"]}
          isSelected
        />
      </li>
      <li>
        <PriceCard
          title="Title"
          description="this is description"
          price={100}
          pricePeriod={selectedPricePeriod}
          contents={["hello", "world", "!!"]}
        />
      </li>
      <li>
        <PriceCard
          title="Title"
          description="this is description"
          price={100}
          pricePeriod={selectedPricePeriod}
          contents={["hello", "world", "!!"]}
          isSelected
        />
      </li>
      <li>
        <PriceCard
          title="Title"
          description="this is description"
          price={100}
          pricePeriod={selectedPricePeriod}
          contents={["hello", "world", "!!", "a", "b", "c", "d"]}
        />
      </li>
    </ul>
  );
};

export default PricingList;
