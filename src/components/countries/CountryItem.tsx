import { Box, Typography, useTheme } from "@mui/material";
import { Country } from "../../entities/Country";

interface Props {
  country: Country;
  isActive: boolean;
  onClick: () => void;
}

const CountryItem = ({ country, isActive, onClick }: Props) => {
  const theme = useTheme();
  const styles = {
    width: "30px",
    height: "auto",
    borderRadius: "12px",
    marginRight: "10px",
  };

  return (
    <Box
      onClick={onClick}
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
      <img src={country.flag_32_url} style={styles} />
      <Typography
        sx={{
          alignSelf: "center",
          fontWeight: isActive ? "bold" : "normal",
        }}
      >
        {country.name_en}
      </Typography>
    </Box>
  );
};

export default CountryItem;
