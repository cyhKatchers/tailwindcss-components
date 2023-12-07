import { PricePeriodType } from "./PricePeriodSelector.types";

export const PRICE_PERIODS = ["month", "year"] as const;

export const DEFAULT_PRICE_PERIOD: PricePeriodType = "month";
