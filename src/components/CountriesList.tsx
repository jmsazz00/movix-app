import {
  Box,
  CircularProgress,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import useCountries from "../hooks/useCountries";
import options from "../options/countries";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import useTeamQueryStore from "../store/TeamQueryStore";
import { useCallback } from "react";

const CountriesList = () => {
  const { data: list, isLoading, error } = useCountries();

  const selectedCountry = useTeamQueryStore((t) => t.teamQuery.countryName);
  const onSelectCountry = useTeamQueryStore((t) => t.setCountryName);

  const theme = useTheme();

  const handleSelectCountry = useCallback(
    (fullName: string) => {
      onSelectCountry(fullName);
      window.scroll({ top: 0, behavior: "smooth" });
    },
    [onSelectCountry]
  );

  if (isLoading)
    return (
      <Box textAlign={"center"}>
        <CircularProgress />
      </Box>
    );
  if (error) return <ErrorOutlineIcon color="error" fontSize="large" />;

  const styles = {
    width: "30px",
    height: "auto",
    borderRadius: "12px",
    marginRight: "10px",
  };

  const selectedCountries = list?.countries
    ?.filter((c) => options.some((opt) => opt.fullName === c.name_en))
    .map((country) => {
      const option = options.find((opt) => opt.fullName === country.name_en);
      return {
        name_en: option?.code,
        flag_32_url: country.flag_url_32,
        fullName: country.name_en,
      };
    });

  return (
    <Stack spacing={1} divider={<Divider flexItem />}>
      {selectedCountries?.map((c) => {
        const isActive = selectedCountry === c.fullName;

        return (
          <Box
            onClick={() => handleSelectCountry(c.fullName)}
            key={c.name_en}
            sx={{
              cursor: "pointer",
              display: "flex",
              pl: 3,
              py: 0.75,
              transition: "background-color 0.3s ease",
              borderRadius: "2px",
              backgroundColor: isActive
                ? theme.palette.mode === "light"
                  ? "#e3f2fd"
                  : "#2b333e"
                : "transparent",
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light" ? "#e3f2fd" : "#2b333e",
              },
            }}
          >
            <img src={c.flag_32_url} style={styles} />
            <Typography
              sx={{
                alignSelf: "center",
                fontWeight: isActive ? "bold" : "normal",
              }}
            >
              {c.name_en}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
};

export default CountriesList;
