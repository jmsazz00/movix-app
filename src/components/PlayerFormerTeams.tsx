import { Box, CircularProgress } from "@mui/material";
import usePlayerFormerTeams from "../hooks/usePlayerFormerTeams";

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

  return <Box></Box>;
};

export default PlayerFormerTeams;
