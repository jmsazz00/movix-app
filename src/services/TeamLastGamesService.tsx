import ApiClient from "./ApiClient";
import { ResultList } from "../entities/GameResult";

class TeamLastGamesService extends ApiClient<ResultList> {
  getLastGames = async (teamId: string) => {
    const res = await this.apiClient.get<ResultList>(this.endpoint, {
      params: { id: teamId },
    });
    return res.data;
  };
}

export default new TeamLastGamesService("/eventslast.php");
