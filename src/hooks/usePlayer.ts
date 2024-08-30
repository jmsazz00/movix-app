import { useQuery } from "react-query";
import playerService from "../services/PlayerService";

const usePlayer = (playerName: string) => {
  return useQuery({
    queryKey: ["player", playerName],
    queryFn: () => playerService.getPlayer(playerName),
  });
};

export default usePlayer;
