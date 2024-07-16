import StarBorderPurple500TwoToneIcon from "@mui/icons-material/StarBorderPurple500TwoTone";
import MainHeading from "./MainHeading";
import HighlightedTeams from "./HighlightedTeams";

const MainContent = () => {
  return (
    <>
      <MainHeading title="top teams" Icon={StarBorderPurple500TwoToneIcon} />
      <HighlightedTeams />
    </>
  );
};

export default MainContent;
