import { Alert, Box, CircularProgress, SelectChangeEvent } from "@mui/material";
import { lazy, Suspense, useState } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/common/Badge";
import DefaultDescription from "../components/common/DefaultDescription";
import GenericSelector from "../components/common/GenericSelector";
import LazyLoad from "../components/common/LazyLoad";
import SocialMedia from "../components/common/SocialMedia";
import TeamDetails from "../components/teams/TeamDetails";
import TeamJerseyModal from "../components/teams/TeamJerseyModal";
import TeamLastGames from "../components/teams/TeamLastGames";
import { leftContentBoxStyles } from "../css/styles";
import LnOpts from "../entities/LanguageType";
import useTeam from "../hooks/useTeam";
import DetailLayout from "./DetailLayout";

const TeamJerseys = lazy(() => import("../components/teams/TeamJerseys"));

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

  const lnOpts = [
    { label: "English", value: "EN" },
    { label: "Spanish", value: "ES" },
    { label: "French", value: "FR" },
  ];

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
          <GenericSelector
            value={language}
            onChange={handleLanguageChange}
            label="Language"
            options={lnOpts}
          />
          <DefaultDescription description={team[`strDescription${language}`]} />
          <TeamLastGames teamId={team.idTeam} />
          <Suspense fallback={<CircularProgress />}>
            <LazyLoad>
              <TeamJerseys teamId={team.idTeam} />
            </LazyLoad>
          </Suspense>
          <TeamJerseyModal />
        </>
      }
    />
  );
};

export default TeamDetailPage;
