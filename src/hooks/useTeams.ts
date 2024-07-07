import { useQuery } from "react-query";
import ApiClient from "../services/ApiClient";

export interface Team {
  idTeam: string;
  strTeam: string;
  strTeamShort: string;
  strSport: string;
  strLeague: string;
  strStadium: string;
  strDescriptionEN: string;
  strWebsite: string;
  strFacebook: string;
  strTwitter: string;
  strInstagram: string;
  strBadge: string;
  strCountry: string;
}

interface TeamList {
  teams: Team[];
}

const useTeams = () => {
  const apiClient = new ApiClient<TeamList>(
    "/search_all_teams.php?s=Soccer&c=Spain"
  );

  return useQuery({
    queryKey: ["teams"],
    queryFn: apiClient.getAll,
  });
};

export default useTeams;
