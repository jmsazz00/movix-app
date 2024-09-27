import { Box, Typography } from "@mui/material";
import CollapsableText from "../common/CollapsableText";

interface Props {
  venueName: string;
  description: string;
}

const VenueDescription = ({ venueName, description }: Props) => (
  <Box
    sx={{
      padding: "24px",
      backgroundColor: (theme) =>
        theme.palette.mode === "dark" ? "#212121" : "#f5f5f5",
      borderRadius: "8px",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      m: 3,
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
        position: "relative",
        "&::after": {
          content: '""',
          display: "block",
          width: "60px",
          height: "3px",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.primary.light
              : theme.palette.primary.dark,
          margin: "8px auto 0",
        },
      }}
    >
      About {venueName}
    </Typography>
    <CollapsableText description={description} />
  </Box>
);

export default VenueDescription;
