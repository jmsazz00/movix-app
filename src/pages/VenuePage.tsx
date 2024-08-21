import { Alert, Box, Card, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useVenue from "../hooks/useVenue";

const VenuePage = () => {
  const { venue } = useParams();
  const { data: venues, isLoading, error } = useVenue(venue!);

  if (isLoading) return <CircularProgress sx={{ m: 3 }} />;

  if (error || !venues || !venues.venues || venues.venues.length === 0)
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        Venue details currently not available.
      </Alert>
    );

  const stadium = venues?.venues[0]!;

  return (
    <>
      <Box
        sx={{
          height: "400px",
          backgroundImage: `url(${stadium.strThumb || stadium.strFanart1})`,
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
            transition: "background-color 0.3s ease-in-out",
            ...(theme) =>
              theme.palette.mode === "light" && {
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                color: "#333",
              },
          }}
        >
          {stadium.strVenueAlternate || stadium.strVenue}
        </Typography>
      </Box>

      {/* Stadium Details Section */}
      <Box
        sx={{
          padding: "24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
          mb: 3,
        }}
      >
        {[
          { label: "Country", value: stadium.strCountry },
          { label: "Location", value: stadium.strLocation },
          { label: "Capacity", value: stadium.intCapacity },
          { label: "Cost", value: stadium.strCost },
          { label: "Formed Year", value: stadium.intFormedYear },
        ].map((detail, index) => (
          <Card
            key={index}
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(255, 255, 255, 0.6)",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              borderRadius: "12px",
              borderLeft: "4px solid",
              borderLeftColor: (theme) =>
                theme.palette.mode === "dark"
                  ? theme.palette.primary.light
                  : theme.palette.primary.main,
              padding: "16px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
                color: (theme) =>
                  theme.palette.mode === "dark"
                    ? theme.palette.common.white
                    : theme.palette.text.primary,
              }}
            >
              {detail.label}
            </Typography>
            <Typography variant="body1">{detail.value || "-"}</Typography>
          </Card>
        ))}
      </Box>

      {/* Description Section */}
      <Box
        sx={{
          padding: "24px",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#212121" : "#f5f5f5",
          borderRadius: "8px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          mb: 3,
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
            mb: 2,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          About {stadium.strVenue}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            lineHeight: "1.6",
            fontSize: "1.1rem",
            textAlign: "justify",
            color: (theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.grey[400]
                : theme.palette.text.secondary,
          }}
        >
          {stadium.strDescriptionEN}
        </Typography>
      </Box>

      {/* Image Gallery */}
      <Box
        sx={{
          padding: "24px",
          display: "flex",
          justifyContent: "space-around",
          gap: "16px",
          mb: 3,
        }}
      >
        {[stadium.strFanart2, stadium.strFanart3, stadium.strFanart4].map(
          (image, index) => (
            <Box
              key={index}
              sx={{
                width: "30%",
                height: "200px",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                position: "relative",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  "&::after": {
                    opacity: 0,
                  },
                },
                "&:not(:hover)": {
                  transition: "transform 0.3s ease-in-out",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  transition: "opacity 0.3s ease-in-out",
                },
              }}
            />
          )
        )}
      </Box>
    </>
  );
};

export default VenuePage;
