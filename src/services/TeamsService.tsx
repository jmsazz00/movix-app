import ApiClient from "./ApiClient";
import { TeamList } from "../entities/Team";

class TeamService extends ApiClient<TeamList> {
  getTeams = async (country: string) => {
    const res = await this.apiClient.get<TeamList>(this.endpoint, {
      params: { s: "Soccer", c: country },
    });
    return res.data;
  };
}

export default new TeamService("/search_all_teams.php");
