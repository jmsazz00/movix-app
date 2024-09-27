import { useMemo, useState } from "react";
import useCountries from "../hooks/useCountries";
import options from "../utilities/countries";

const useFilteredCountries = () => {
  const { data: list, isLoading, error } = useCountries();
  const [searchQuery, setSearchQuery] = useState("");

  const selectedCountries = useMemo(() => {
    return list?.countries
      ?.filter((c) => options.some((opt) => opt.fullName === c.name_en))
      .map((country) => {
        const option = options.find((opt) => opt.fullName === country.name_en);
        return {
          name_en: option?.code,
          flag_32_url: country.flag_url_32,
          fullName: country.name_en,
        };
      });
  }, [list?.countries]);

  const filteredCountries = useMemo(() => {
    return selectedCountries?.filter((country) =>
      country.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, selectedCountries]);

  return { filteredCountries, isLoading, error, searchQuery, setSearchQuery };
};

export default useFilteredCountries;
