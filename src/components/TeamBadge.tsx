import { Box, Typography } from "@mui/material";

interface TeamBadgeProps {
  badgeUrl: string;
  teamName: string;
}

const TeamBadge = ({ badgeUrl, teamName }: TeamBadgeProps) => (
  <Box>
    <img
      src={badgeUrl + "/small"}
      alt={`${teamName} badge`}
      style={{ width: "200px", borderRadius: 8 }}
    />
    <Typography mt={1} fontWeight={"bold"} variant="h5" textAlign={"center"}>
      {teamName}
    </Typography>
  </Box>
);

export default TeamBadge;
