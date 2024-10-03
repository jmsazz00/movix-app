import { Box, Typography } from "@mui/material";

interface BadgeProps {
  badgeUrl: string;
  name: string;
}

const Badge = ({ badgeUrl, name }: BadgeProps) => (
  <Box>
    <Box
      component="img"
      src={`${badgeUrl}/small`}
      alt={`${name} badge`}
      sx={{
        objectFit: "contain",
        width: "100%",
        maxHeight: {
          xs: "135px",
          sm: "185px",
        },
      }}
    />
    <Typography mt={1} fontWeight={"bold"} variant="h5" textAlign={"center"}>
      {name}
    </Typography>
  </Box>
);

export default Badge;
