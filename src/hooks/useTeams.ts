import { useQuery } from "react-query";
import ApiClient from "../services/ApiClient";
import { TeamList } from "../services/TeamService";

const useTeams = (country: string) => {
  const apiClient = new ApiClient<TeamList>("/search_all_teams.php");
  return useQuery({
    queryKey: ["teams", country],
    queryFn: () => apiClient.getAll({ params: { s: "Soccer", c: country } }),
  });
};

export default useTeams;
