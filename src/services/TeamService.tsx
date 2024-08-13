import ApiClient from "./ApiClient";
import Team from "../entities/Team";

class TeamService extends ApiClient<Team[]> {
  getTeam = async (id?: number | string) => {
    const res = await this.apiClient
      .get<Team[]>(this.endpoint, { params: { t: id } });
    return res.data;
  };
}

export default new TeamService("/searchteams.php");
