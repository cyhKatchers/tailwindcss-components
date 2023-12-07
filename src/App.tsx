import { useState } from "react";

import PricePeriodSelector from "./components/PricingPlan/PricePeriodSelector";
import PricingList from "./components/PricingPlan/PricingList";
import { PricePeriodType } from "./components/PricingPlan/PricePeriodSelector/PricePeriodSelector.types";
import {
  DEFAULT_PRICE_PERIOD,
  PRICE_PERIODS,
} from "./components/PricingPlan/PricePeriodSelector/PricePeriodSelector.constants";

const App: React.FC = () => {
  const [selectedPricePeriod, setSelectedPricePeriod] =
    useState<PricePeriodType>(DEFAULT_PRICE_PERIOD);

  const handleClickPricePeriod = (pricePeriod: PricePeriodType) => {
    if (pricePeriod === selectedPricePeriod) {
      return;
    }

    setSelectedPricePeriod(pricePeriod);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="px-6 py-16">
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
      </main>
    </div>
  );
};

export default App;
