import { useQuery } from "react-query";
import teamService from "../services/TeamService";

const useTeam = (teamName: string) => {
  return useQuery({
    queryKey: ["team", teamName],
    queryFn: () => teamService.getTeam(teamName),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
  });
};

export default useTeam;
