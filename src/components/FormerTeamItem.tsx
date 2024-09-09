import { Box, Typography, Avatar } from "@mui/material";
import { FormerTeam } from "../entities/FormerTeams";
import TimelineItem from "./TimeLineItem";

interface FormerTeamItemProps {
  team: FormerTeam;
  index: number;
  totalTeams: number;
}

const FormerTeamItem = ({ team, index, totalTeams }: FormerTeamItemProps) => {
  return (
    <TimelineItem index={index} totalItems={totalTeams}>
      <Avatar src={team.strBadge} alt={team.strFormerTeam} sx={{ width: 40, height: 40, mr: 2 }} />
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Typography sx={{ fontWeight: "bold" }}>{team.strFormerTeam}</Typography>
        <Typography variant="body2" color="textSecondary">
          {team.strMoveType} | Joined: {new Date(team.strJoined).toLocaleDateString()} - Departed: {new Date(team.strDeparted).toLocaleDateString()}
        </Typography>
      </Box>
    </TimelineItem>
  );
};

export default FormerTeamItem;
