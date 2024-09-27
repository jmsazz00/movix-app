import { Avatar } from "@mui/material";

interface TeamScoreBadgeProps {
  teamName: string;
  badgeUrl?: string;
}

const TeamScoreBadge = ({ teamName, badgeUrl }: TeamScoreBadgeProps) => (
  <Avatar
    alt={teamName}
    src={badgeUrl?.concat("/tiny")}
    variant="square"
    sx={{ mx: 1 }}
  >
    {!badgeUrl && teamName.charAt(0)}
  </Avatar>
);

export default TeamScoreBadge;
