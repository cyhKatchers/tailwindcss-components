import { useState } from "react";

import PricePeriodSelector from "./PricePeriodSelector";
import {
  DEFAULT_PRICE_PERIOD,
  PRICE_PERIODS,
} from "./PricePeriodSelector/PricePeriodSelector.constants";
import { PricePeriodType } from "./PricePeriodSelector/PricePeriodSelector.types";
import PricingList from "./PricingList";

const PricingPlan = () => {
  const [selectedPricePeriod, setSelectedPricePeriod] =
    useState<PricePeriodType>(DEFAULT_PRICE_PERIOD);

  const handleClickPricePeriod = (pricePeriod: PricePeriodType) => {
    if (pricePeriod === selectedPricePeriod) {
      return;
    }

    setSelectedPricePeriod(pricePeriod);
  };
  return (
    <div>
      <header className="mt-16">
        <PricePeriodSelector
          selectedPricePeriod={selectedPricePeriod}
          pricePeriodData={PRICE_PERIODS}
          onClickPricePeriod={handleClickPricePeriod}
        />
      </header>
      <PricingList selectedPricePeriod={selectedPricePeriod} />
    </div>
  );
};

export default PricingPlan;
