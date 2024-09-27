import { Alert, Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/common/Badge";
import DefaultDescription from "../components/common/DefaultDescription";
import LazyLoad from "../components/common/LazyLoad";
import SocialMedia from "../components/common/SocialMedia";
import PlayerDetails from "../components/players/PlayerDetails";
import PlayerGallery from "../components/players/PlayerGallery";
import { leftContentBoxStyles } from "../css/styles";
import usePlayer from "../hooks/usePlayer";
import DetailLayout from "./DetailLayout";

const PlayerFormerTeams = lazy(
  () => import("../components/players/PlayerFormerTeams")
);

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

  const {
    strCutout,
    strPlayer,
    strTeam,
    dateBorn,
    strNationality,
    strSport,
    strPosition,
    strHeight,
    strFacebook,
    strTwitter,
    strInstagram,
    idPlayer,
    strDescriptionEN,
    strFanart1,
    strFanart2,
    strFanart3,
    strFanart4,
  } = players.player[0];

  return (
    <DetailLayout
      leftContent={
        <Box sx={leftContentBoxStyles}>
          <Badge badgeUrl={strCutout} name={strPlayer} />
          <PlayerDetails
            team={strTeam}
            birthdate={dateBorn}
            nationality={strNationality}
            sport={strSport}
            position={strPosition}
            height={strHeight}
          />
          <SocialMedia
            facebook={strFacebook}
            twitter={strTwitter}
            instagram={strInstagram}
          />
        </Box>
      }
      rightContent={
        <>
          <DefaultDescription description={strDescriptionEN} />
          <PlayerGallery
            images={[strFanart1, strFanart2, strFanart3, strFanart4]}
          />
          <Suspense fallback={<CircularProgress />}>
            <LazyLoad>
              <PlayerFormerTeams playerId={idPlayer} />
            </LazyLoad>
          </Suspense>
        </>
      }
    />
  );
};

export default PlayerDetailPage;
