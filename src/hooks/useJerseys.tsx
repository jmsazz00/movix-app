import { useQuery } from "react-query";
import jerseysService from "../services/JerseysService";

const useJerseys = (teamId: string) => {
  return useQuery({
    queryKey: ["jerseys", teamId],
    queryFn: () => jerseysService.getJerseys(teamId),
  });
};

export default useJerseys;
