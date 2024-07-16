import { useQuery } from "react-query";
import teamService from "../services/TeamService";

const useTeam = (teamName: string) => {
  return useQuery({
    queryKey: ["team", teamName],
    queryFn: () => teamService.getTeam(teamName),
  });
};

export default useTeam;
