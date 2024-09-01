import { Alert, Box, CircularProgress, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/Badge";
import DefaultDescription from "../components/DefaultDescription";
import LanguageSelector from "../components/LanguageSelector";
import SocialMedia from "../components/SocialMedia";
import TeamDetails from "../components/TeamDetails";
import TeamLastGames from "../components/TeamLastGames";
import { leftContentBoxStyles } from "../css/styles";
import LnOpts from "../entities/LanguageType";
import useTeam from "../hooks/useTeam";
import DetailLayout from "./DetailLayout";

const TeamDetailPage = () => {
  const { name } = useParams();
  const { data: teams, isLoading, error } = useTeam(name!);

  const [language, setLanguage] = useState<LnOpts>("EN");

  if (isLoading) return <CircularProgress sx={{ m: 4 }} />;

  if (error || !teams || !teams.teams || teams.teams.length === 0)
    return (
      <Alert severity="error" sx={{ m: 3 }}>
        Couldn't retrieve team details.
      </Alert>
    );

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as LnOpts);
  };

  const team = teams.teams[0];

  return (
    <DetailLayout
      leftContent={
        <Box sx={leftContentBoxStyles}>
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
      }
      rightContent={
        <>
          <LanguageSelector value={language} onChange={handleLanguageChange} />
          <DefaultDescription description={team[`strDescription${language}`]} />
          <TeamLastGames teamId={team.idTeam} />
        </>
      }
    />
  );
};

export default TeamDetailPage;
