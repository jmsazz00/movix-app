import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import {
  Box,
  CircularProgress,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useCountries from "../hooks/useCountries";
import options from "../utilities/countries";
import useTeamQueryStore from "../store/TeamQueryStore";
import useScrollToTop from "../hooks/useScrollToTop";
import { useMemo } from "react";

const CountriesList = () => {
  const { data: list, isLoading, error } = useCountries();

  const selectedCountry = useTeamQueryStore((t) => t.teamQuery.countryName);

  const theme = useTheme();
  const navigate = useNavigate();
  const scrollToTop = useScrollToTop(true);

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

  const styles = {
    width: "30px",
    height: "auto",
    borderRadius: "12px",
    marginRight: "10px",
  };

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
