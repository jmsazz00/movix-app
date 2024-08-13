import { useQuery } from "react-query";
import teamLastGamesService from "../services/TeamLastGamesService";

const useTeamLastGames = (teamId: string) => {
  return useQuery({
    queryKey: ["lastGames", teamId],
    queryFn: () => teamLastGamesService.getLastGames(teamId),
  });
};

export default useTeamLastGames;
