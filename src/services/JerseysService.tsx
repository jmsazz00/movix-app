import ApiClient from "./ApiClient";
import { JerseyList } from "../entities/Jersey";

class JerseysService extends ApiClient<JerseyList> {
  getJerseys = async (teamId: string) => {
    const res = await this.apiClient.get<JerseyList>(this.endpoint, {
      params: { id: teamId },
    });
    return res.data;
  };
}

export default new JerseysService("/lookupequipment.php");
