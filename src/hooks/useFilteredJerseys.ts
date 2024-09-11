import { useMemo } from "react";
import { JerseyList } from "../entities/Jersey";

const useFilteredJerseys = (jerseys?: JerseyList, selectedSeason?: string) => {
  return useMemo(() => {
    if (!selectedSeason) return jerseys?.equipment || [];
    return jerseys?.equipment
      .filter((jersey) => jersey.strSeason === selectedSeason)
      .sort((a, b) => {
        const typeOrder = ["1st", "2nd", "3rd", "4th", "5th"];
        return typeOrder.indexOf(a.strType) - typeOrder.indexOf(b.strType);
      });
  }, [jerseys, selectedSeason]);
};

export default useFilteredJerseys;
