import { useEffect, useState } from "react";

const useSelectedSeason = (seasons: string[]) => {
  const [selectedSeason, setSelectedSeason] = useState<string>("");

  useEffect(() => {
    if (seasons.length > 0 && !selectedSeason) {
      setSelectedSeason(seasons[0]);
    }
  }, [seasons, selectedSeason]);

  return [selectedSeason, setSelectedSeason] as const;
};

export default useSelectedSeason;
