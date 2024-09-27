import { CircularProgress } from "@mui/material";
import useTeamLastGames from "../../hooks/useTeamLastGames";
import GameItem from "../common/GameItem";
import TimeLineList from "../common/TimeLineList";

interface Props {
  teamId: string;
}

const TeamLastGames = ({ teamId }: Props) => {
  const { data: games, isLoading, error } = useTeamLastGames(teamId);

  if (isLoading) return <CircularProgress sx={{ m: 2, mb: "400px" }} />;

  if (error || !games || !games.results || games.results.length === 0)
    return null;

  return (
    <TimeLineList title="Last Games">
      {games.results.map((game, index) => (
        <GameItem
          game={game}
          index={index}
          totalGames={games.results.length}
          key={game.idEvent}
        />
      ))}
    </TimeLineList>
  );
};

export default TeamLastGames;
