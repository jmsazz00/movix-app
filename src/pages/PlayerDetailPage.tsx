import { Alert, Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import Badge from "../components/Badge";
import DefaultDescription from "../components/DefaultDescription";
import PlayerDetails from "../components/PlayerDetails";
import PlayerGallery from "../components/PlayerGallery";
import SocialMedia from "../components/SocialMedia";
import usePlayer from "../hooks/usePlayer";
import DetailLayout from "./DetailLayout";
import { leftContentBoxStyles } from "../css/styles";

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
    <DetailLayout
      leftContent={
        <Box sx={leftContentBoxStyles}>
          <Badge badgeUrl={playerData.strCutout} name={playerData.strPlayer} />
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
      }
      rightContent={
        <>
          <DefaultDescription description={playerData.strDescriptionEN} />
          <PlayerGallery
            images={[
              playerData.strFanart1,
              playerData.strFanart2,
              playerData.strFanart3,
              playerData.strFanart4,
            ]}
          />
        </>
      }
    />
  );
};

export default PlayerDetailPage;
