import { useQuery } from "react-query";
import ApiClient from "../services/ApiClient";

interface Country {
  flag_url_32: string;
  name_en: string;
}

interface CountryList {
  countries: Country[];
}

const useCountries = () => {
  const apiClient = new ApiClient<CountryList>("/all_countries.php");
  return useQuery({
    queryKey: ["countries"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 3600 * 1000, // 24h
  });
};

export default useCountries;
