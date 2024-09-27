import { CircularProgress } from "@mui/material";
import { FormerTeam } from "../../entities/FormerTeams";
import usePlayerFormerTeams from "../../hooks/usePlayerFormerTeams";
import useFormerTeamsSorting from "../../hooks/useFormerTeamsSorting";
import PlayerFormerTeamItem from "./PlayerFormerTeamItem";
import TimeLineList from "../common/TimeLineList";

interface Props {
  playerId: string;
}

const PlayerFormerTeams = ({ playerId }: Props) => {
  const {
    data: formerTeams,
    isLoading,
    error,
  } = usePlayerFormerTeams(playerId);
  const sortedTeams = useFormerTeamsSorting(formerTeams?.formerteams);

  if (isLoading) return <CircularProgress />;

  if (error || sortedTeams.length === 0) return null;

  return (
    <TimeLineList title="Former Teams">
      {sortedTeams.map((team: FormerTeam, index: number) => (
        <PlayerFormerTeamItem
          key={team.id}
          team={team}
          index={index}
          totalTeams={sortedTeams.length}
        />
      ))}
    </TimeLineList>
  );
};

export default PlayerFormerTeams;
