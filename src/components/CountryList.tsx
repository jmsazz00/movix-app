import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, CircularProgress, Divider, Stack } from "@mui/material";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCountries from "../hooks/useCountries";
import useScrollToTop from "../hooks/useScrollToTop";
import options from "../utilities/countries";
import CountryInput from "./CountryInput";
import CountryItem from "./CountryItem";

const CountryList = () => {
  const { data: list, isLoading, error } = useCountries();
  const { country } = useParams();

  const navigate = useNavigate();
  const scrollToTop = useScrollToTop(true);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectCountry = (fullName: string) => {
    navigate(`/c/${encodeURIComponent(fullName)}`);
    scrollToTop();
  };

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

  if (isLoading)
    return (
      <Box textAlign="center">
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box textAlign="center">
        <ErrorOutlineIcon color="error" fontSize="large" />
      </Box>
    );

  return (
    <Box>
      <Box mb={1}>
        <CountryInput
          searchQuery={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      <Stack spacing={1} divider={<Divider flexItem />}>
        {filteredCountries?.map((c) => (
          <CountryItem
            key={c.name_en}
            country={c}
            isActive={country === c.fullName}
            onClick={() => handleSelectCountry(c.fullName)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default CountryList;
