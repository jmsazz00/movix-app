import { Box, Typography } from "@mui/material";

interface BadgeProps {
  badgeUrl: string;
  name: string;
}

const Badge = ({ badgeUrl, name }: BadgeProps) => (
  <Box>
    <img
      src={badgeUrl + "/small"}
      alt={`${name} badge`}
      style={{
        objectFit: "contain",
        height: 185,
      }}
    />
    <Typography mt={1} fontWeight={"bold"} variant="h5" textAlign={"center"}>
      {name}
    </Typography>
  </Box>
);

export default Badge;
