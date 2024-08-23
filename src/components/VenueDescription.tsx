import { Box, Typography } from "@mui/material";
import ExpandableText from "./ExpandableText";

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

    <ExpandableText
      limit={500}
      text={description}
      style={{
        lineHeight: "1.6",
        fontSize: "1.1rem",
        textAlign: "justify",
        color: (theme: {
          palette: { mode: string; grey: any[]; text: { secondary: any } };
        }) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[400]
            : theme.palette.text.secondary,
      }}
    />
  </Box>
);

export default VenueDescription;
