import { Alert, Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import usePlayer from "../hooks/usePlayer";

const PlayerDetailPage = () => {
  const { player } = useParams();
  const { data: players, isLoading, error } = usePlayer(player!);

  if (isLoading) return <CircularProgress sx={{ m: 3 }} />;

  if (error || !players || !players.player || players.player.length === 0)
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        Player details currently not available.
      </Alert>
    );
  return <Box p={3}>{players?.player[0].strDescriptionEN}</Box>;
};

export default PlayerDetailPage;
