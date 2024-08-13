import { useQuery } from "react-query";
import allTeamsService from "../services/AllTeamsService";

const useTeams = (country: string) => {
  return useQuery({
    queryKey: ["teams", country],
    queryFn: () => allTeamsService.getTeams(country),
  });
};

export default useTeams;
