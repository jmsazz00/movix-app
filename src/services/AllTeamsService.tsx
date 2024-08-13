import ApiClient from "./ApiClient";
import Team from "../entities/Team";

class TeamService extends ApiClient<Team[]> {
  getTeams = async (country: string) => {
    const res = await this.apiClient.get<Team[]>(this.endpoint, {
      params: { s: "Soccer", c: country },
    });
    return res.data;
  };
}

export default new TeamService("/search_all_teams.php");
