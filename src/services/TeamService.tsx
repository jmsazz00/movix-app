import ApiClient from "./ApiClient";
import { TeamList } from "../entities/Team";

class TeamService extends ApiClient<TeamList> {
  getTeam = async (id: string) => {
    const res = await this.apiClient.get<TeamList>(this.endpoint, {
      params: { t: id },
    });
    return res.data;
  };
}

export default new TeamService("/searchteams.php");
