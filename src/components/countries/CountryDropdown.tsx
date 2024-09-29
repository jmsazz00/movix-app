import {
  Box,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useFilteredCountries from "../../hooks/useFilteredCountries";

const CountryDropdown = () => {
  const { country } = useParams();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const { filteredCountries } = useFilteredCountries();

  const handleSelectCountry = (event: any) => {
    const selectedCountry = event.target.value;
    navigate(`/c/${encodeURIComponent(selectedCountry)}`);
  };

  return (
    <>
      {isSmallScreen && (
        <Box mb={2}>
          <Select
            fullWidth
            displayEmpty
            value={country}
            onChange={handleSelectCountry}
            renderValue={(value) => (value ? value : "Select a country")}
            sx={{
              ".MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                padding: { xs: "9px 12px", md: "12px 16px" },
              },
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            {filteredCountries?.map((option) => (
              <MenuItem
                key={option.fullName}
                value={option.fullName}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: { xs: "8px 12px", md: "10px 15px" }, 
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <img
                  src={option.flag_32_url}
                  alt={option.fullName}
                  style={{ width: 24, height: 16, marginRight: 10 }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
                  {option.fullName}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}
    </>
  );
};

export default CountryDropdown;
