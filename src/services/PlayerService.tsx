import ApiClient from "./ApiClient";
import { PlayerInfo } from "../entities/Player";

class PlayerService extends ApiClient<PlayerInfo> {
  getPlayer = async (name: string) => {
    const res = await this.apiClient.get<PlayerInfo>(this.endpoint, {
      params: { p: name },
    });
    return res.data;
  };
}

export default new PlayerService("/searchplayers.php");
