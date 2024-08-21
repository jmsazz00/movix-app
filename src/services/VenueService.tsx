import ApiClient from "./ApiClient";
import { VenueList } from "../entities/Venue";

class VenueService extends ApiClient<VenueList> {
  getVenue = async (id: string) => {
    const res = await this.apiClient.get<VenueList>(this.endpoint, {
      params: { t: id },
    });
    return res.data;
  };
}

export default new VenueService("/searchvenues.php");
