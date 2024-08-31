import {
  Alert,
  Box,
  CircularProgress,
  Divider,
  Grid,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/Badge";
import DefaultDescription from "../components/DefaultDescription";
import LanguageSelector from "../components/LanguageSelector";
import SocialMedia from "../components/SocialMedia";
import TeamDetails from "../components/TeamDetails";
import TeamLastGames from "../components/TeamLastGames";
import LnOpts from "../entities/LanguageType";
import useTeam from "../hooks/useTeam";
import navHeight from "../utilities/navHeight";

const TeamDetailPage = () => {
  const { name } = useParams();
  const { data: teams, isLoading, error } = useTeam(name!);

  const [language, setLanguage] = useState<LnOpts>("EN");

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as LnOpts);
  };

  if (isLoading) return <CircularProgress sx={{ m: 4 }} />;

  if (error)
    return (
      <Alert severity="error" sx={{ m: 3 }}>
        An unexpected error occurred.
      </Alert>
    );

  if (!teams || !teams.teams || teams.teams.length === 0)
    return (
      <Alert severity="error" sx={{ m: 3 }}>
        Couldn't retrieve team: please check for typos.
      </Alert>
    );

  const team = teams.teams[0];

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
            <Badge badgeUrl={team.strBadge} name={team.strTeam} />
            <TeamDetails
              country={team.strCountry}
              sport={team.strSport}
              leagues={[team.strLeague, team.strLeague2].filter(Boolean)}
              stadium={team.strStadium}
            />
            <SocialMedia
              facebook={team.strFacebook}
              twitter={team.strTwitter}
              instagram={team.strInstagram}
            />
          </Box>
        </Grid>

        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Divider orientation="vertical" flexItem sx={{ mr: 4 }} />
        </Grid>

        <Grid item xs={12} sm={7} md={8}>
          <LanguageSelector value={language} onChange={handleLanguageChange} />
          <DefaultDescription description={team[`strDescription${language}`]} />
          <TeamLastGames teamId={team.idTeam} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TeamDetailPage;
