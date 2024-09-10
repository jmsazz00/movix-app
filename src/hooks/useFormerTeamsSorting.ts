import { useMemo } from "react";
import { FormerTeam } from "../entities/FormerTeams";

const useSortedFormerTeams = (formerTeams: FormerTeam[] | undefined) => {
  return useMemo(() => {
    if (!formerTeams) return [];

    return formerTeams
      .slice()
      .sort((a, b) => parseInt(b.strDeparted) - parseInt(a.strDeparted));
  }, [formerTeams]);
};

export default useSortedFormerTeams;
