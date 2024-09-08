import { useQuery } from "react-query";
import playerFormerTeamsService from "../services/PlayerFormerTeamsService";

const usePlayerFormerTeams = (playerId: string) => {
  return useQuery({
    queryKey: ["formerTeams", playerId],
    queryFn: () => playerFormerTeamsService.getFormerTeams(playerId),
  });
};

export default usePlayerFormerTeams;
