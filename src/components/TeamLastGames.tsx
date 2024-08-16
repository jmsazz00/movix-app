import { CircularProgress } from "@mui/material";
import useTeamLastGames from "../hooks/useTeamLastGames";
import GameList from "./GameList";

interface Props {
  teamId: string;
}

const TeamLastGames = ({ teamId }: Props) => {
  const { data: games, isLoading, error } = useTeamLastGames(teamId);

  if (isLoading) return <CircularProgress sx={{ m: 2 }} />;

  if (error || !games || !games.results || games.results.length === 0)
    return null;

  return <GameList title="Last Games" games={games.results} />;
};

export default TeamLastGames;
