import { Box, CircularProgress, Typography } from "@mui/material";
import useTeamLastGames from "../hooks/useTeamLastGames";

interface Props {
  teamId: string;
}

const TeamLastGames = ({ teamId }: Props) => {
  const { data: games, isLoading, error } = useTeamLastGames(teamId);

  if (isLoading) return <CircularProgress sx={{ m: 2 }} />;

  if (error || !games || !games.results || games.results.length === 0)
    return null;

  return (
    <Box>
      <Typography fontWeight={"bold"} variant="h6" color={"textSecondary"}>
        Last Games
      </Typography>
    </Box>
  );
};

export default TeamLastGames;
