import { useMemo } from "react";
import { JerseyList } from "../entities/Jersey";

const useSeasons = (jerseys?: JerseyList) => {
  return useMemo(() => {
    if (!jerseys || !jerseys.equipment) return [];
    const uniqueSeasons = Array.from(
      new Set(jerseys.equipment.map((j) => j.strSeason))
    );
    return uniqueSeasons.sort((a, b) => b.localeCompare(a)); // Sort seasons in descending order (latest first)
  }, [jerseys]);
};

export default useSeasons;
