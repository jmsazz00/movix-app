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
import LanguageSelector from "../components/LanguageSelector";
import TeamBadge from "../components/TeamBadge";
import TeamDescription from "../components/TeamDescription";
import TeamDetails from "../components/TeamDetails";
import TeamSocialMedia from "../components/TeamSocialMedia";
import LnOpts from "../entities/LanguageType";
import useTeam from "../hooks/useTeam";

const TeamDetailPage = () => {
  const { name } = useParams();
  const { data: teams, isLoading, error } = useTeam(name!);

  if (!isLoading && (!teams || !teams.teams || teams.teams.length === 0))
    return <Alert severity="error">Couldn't retrieve team.</Alert>;

  if (error)
    return <Alert severity="error">An unexpected error occured.</Alert>;

  const team = teams?.teams[0]!;

  const [language, setLanguage] = useState<LnOpts>("EN");

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as LnOpts);
  };

  return isLoading ? (
    <CircularProgress sx={{ m: 4 }} />
  ) : (
    <Box p={4}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TeamBadge badgeUrl={team.strBadge} teamName={team.strTeam} />
          <TeamDetails
            country={team.strCountry}
            sport={team.strSport}
            leagues={[team.strLeague, team.strLeague2].filter(Boolean)}
            stadium={team.strStadium}
          />
          <TeamSocialMedia
            facebook={team.strFacebook}
            twitter={team.strTwitter}
            instagram={team.strInstagram}
          />
        </Grid>

        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Divider orientation="vertical" flexItem sx={{ mr: 4 }} />
        </Grid>

        <Grid item xs={12} sm={7} md={8}>
          <LanguageSelector value={language} onChange={handleLanguageChange} />
          <TeamDescription description={team[`strDescription${language}`]} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TeamDetailPage;
