import { Alert, Box, CircularProgress, Divider, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Badge from "../components/Badge";
import DefaultDescription from "../components/DefaultDescription";
import PlayerDetails from "../components/PlayerDetails";
import PlayerGallery from "../components/PlayerGallery";
import SocialMedia from "../components/SocialMedia";
import usePlayer from "../hooks/usePlayer";
import navHeight from "../utilities/navHeight";

const PlayerDetailPage = () => {
  const { player } = useParams();
  const { data: players, isLoading, error } = usePlayer(player!);

  if (isLoading) return <CircularProgress sx={{ m: 4 }} />;

  if (error || !players || !players.player || players.player.length === 0)
    return (
      <Alert severity="error" sx={{ m: 3 }}>
        Player details currently not available.
      </Alert>
    );

  const playerData = players.player[0];

  return (
    <Box p={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "sticky",
              top: `${navHeight}px`,
            }}
          >
            <Badge
              badgeUrl={playerData.strCutout}
              name={playerData.strPlayer}
            />
            <PlayerDetails
              team={playerData.strTeam}
              birthdate={playerData.dateBorn}
              nationality={playerData.strNationality}
              sport={playerData.strSport}
              position={playerData.strPosition}
              height={playerData.strHeight}
            />
            <SocialMedia
              facebook={playerData.strFacebook}
              twitter={playerData.strTwitter}
              instagram={playerData.strInstagram}
            />
          </Box>
        </Grid>

        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Divider orientation="vertical" flexItem sx={{ mr: 4 }} />
        </Grid>

        <Grid item xs={12} sm={7} md={8}>
          <DefaultDescription description={playerData.strDescriptionEN} />
          <PlayerGallery
            images={[
              playerData.strFanart1,
              playerData.strFanart2,
              playerData.strFanart3,
              playerData.strFanart4,
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlayerDetailPage;
