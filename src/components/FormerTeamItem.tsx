import { Box, Typography, Avatar, Stack, Chip } from "@mui/material";
import { FormerTeam } from "../entities/FormerTeams";
import TimelineItem from "./TimeLineItem";
import { AccessTime, SwapHoriz } from "@mui/icons-material";

interface FormerTeamItemProps {
  team: FormerTeam;
  index: number;
  totalTeams: number;
}

const FormerTeamItem = ({ team, index, totalTeams }: FormerTeamItemProps) => {
  return (
    <TimelineItem index={index} totalItems={totalTeams}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ flexGrow: 1, alignItems: "center" }}
      >
        <Avatar
          variant="square"
          src={team.strBadge}
          alt={team.strFormerTeam}
          sx={{ width: 40, height: 40 }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ flexWrap: "wrap" }}
          >
            <Typography sx={{ fontWeight: "bold", flexGrow: 1 }}>
              {team.strFormerTeam}
            </Typography>

            <Chip
              icon={<SwapHoriz />}
              label={team.strMoveType}
              size="small"
              color="secondary"
              sx={{ fontWeight: 600 }}
            />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{ mt: 0.5 }}
          >
            <AccessTime fontSize="small" color="primary" />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                opacity: 0.8,
              }}
            >
              Joined: {new Date(team.strJoined).toLocaleDateString()} -
              Departed: {new Date(team.strDeparted).toLocaleDateString()}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </TimelineItem>
  );
};

export default FormerTeamItem;
