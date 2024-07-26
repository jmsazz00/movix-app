import ApiClient from "./ApiClient";
import Team from "../entities/Team";

export interface TeamList {
  teams: Team[];
}

class TeamService extends ApiClient<TeamList> {
  getTeam = (id?: number | string) => {
    return this.apiClient
      .get<TeamList>(this.endpoint, { params: { t: id } })
      .then((res) => res.data);
  };
}

export default new TeamService("/searchteams.php");
