import { useQuery } from "react-query";
import venueService from "../services/VenueService";

const useVenue = (venueID: string) => {
  return useQuery({
    queryKey: ["venues", venueID],
    queryFn: () => venueService.getVenue(venueID),
  });
};

export default useVenue;
