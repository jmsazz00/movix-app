import { Box } from "@mui/material";

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
  </Box>
);

export default TeamBadge;
