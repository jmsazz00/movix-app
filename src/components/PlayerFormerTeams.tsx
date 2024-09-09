import { CircularProgress } from "@mui/material";
import { FormerTeam } from "../entities/FormerTeams";
import usePlayerFormerTeams from "../hooks/usePlayerFormerTeams";
import PlayerFormerTeamItem from "./FormerTeamItem";
import TimeLineList from "./TimeLineList";

interface Props {
  playerId: string;
}

const PlayerFormerTeams = ({ playerId }: Props) => {
  const {
    data: formerTeams,
    isLoading,
    error,
  } = usePlayerFormerTeams(playerId);

  if (isLoading) return <CircularProgress />;

  if (
    error ||
    !formerTeams ||
    !formerTeams.formerteams ||
    formerTeams.formerteams.length === 0
  )
    return null;

  return (
    <TimeLineList title="Former Teams">
      {formerTeams.formerteams.map((team: FormerTeam, index: number) => (
        <PlayerFormerTeamItem
          key={team.idFormerTeam}
          team={team}
          index={index}
          totalTeams={formerTeams.formerteams.length}
        />
      ))}
    </TimeLineList>
  );
};

export default PlayerFormerTeams;
