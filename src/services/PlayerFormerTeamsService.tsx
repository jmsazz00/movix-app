import ApiClient from "./ApiClient";
import { FormerTeams } from "../entities/FormerTeams";

class PlayerFormerTeamsService extends ApiClient<FormerTeams> {
  getFormerTeams = async (playerId: string) => {
    const res = await this.apiClient.get<FormerTeams>(this.endpoint, {
      params: { id: playerId },
    });
    return res.data;
  };
}

export default new PlayerFormerTeamsService("/lookupformerteams.php");
