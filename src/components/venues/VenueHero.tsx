import { Box, Typography } from "@mui/material";

interface Props {
  imageUrl: string;
  venueName: string;
  alternateName: string;
}

const VenueHero = ({ imageUrl, venueName, alternateName }: Props) => (
  <Box
    sx={{
      height: "400px",
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      mb: 3,
    }}
  >
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    />
    <Typography
      variant="h2"
      component="h2"
      sx={{
        color: "white",
        padding: "16px",
        position: "relative",
        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
        borderRadius: "4px",
        maxWidth: "70%",
        margin: "16px",
        fontSize: {
          xs: "2.25rem",
          sm: "2.75rem",
          md: "3.25rem",
          lg: "3.75rem",
        },
        transition: "background-color 0.3s ease-in-out",
        ...(theme) =>
          theme.palette.mode === "light" && {
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            color: "#333",
          },
      }}
    >
      {alternateName || venueName}
    </Typography>
  </Box>
);

export default VenueHero;
