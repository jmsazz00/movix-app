import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, CircularProgress, Divider, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useFilteredCountries from "../hooks/useFilteredCountries";
import useScrollToTop from "../hooks/useScrollToTop";
import CountryInput from "./CountryInput";
import CountryItem from "./CountryItem";

const CountryList = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const scrollToTop = useScrollToTop(true);

  const { filteredCountries, isLoading, error, searchQuery, setSearchQuery } =
    useFilteredCountries();

  const handleSelectCountry = (fullName: string) => {
    navigate(`/c/${encodeURIComponent(fullName)}`);
    scrollToTop();
  };

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
