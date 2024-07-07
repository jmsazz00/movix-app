import StarBorderPurple500TwoToneIcon from "@mui/icons-material/StarBorderPurple500TwoTone";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import MainHeading from "./MainHeading";
import HighlightedTeams from "./HighlightedTeams";

const MainContent = () => {
  return (
    <>
      <MainHeading title="top teams" Icon={SportsSoccerIcon} />
      <HighlightedTeams />
      <MainHeading title="top leagues" Icon={StarBorderPurple500TwoToneIcon} />
    </>
  );
};

export default MainContent;
