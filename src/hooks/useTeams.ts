import { useQuery } from "react-query";
import teamsService from "../services/TeamsService";

const useTeams = (country: string) => {
  return useQuery({
    queryKey: ["teams", country],
    queryFn: () => teamsService.getTeams(country),
  });
};

export default useTeams;
