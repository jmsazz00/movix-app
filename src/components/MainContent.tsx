import StarBorderPurple500TwoToneIcon from "@mui/icons-material/StarBorderPurple500TwoTone";
import MainHeading from "./MainHeading";
import HighlightedTeams from "./HighlightedTeams";
import CountryTeams from "./CountryTeams";
import useTeamQueryStore from "../store/TeamQueryStore";

const MainContent = () => {
  const selectedCountry = useTeamQueryStore((t) => t.teamQuery.countryName);

  return selectedCountry ? (
    <>
      <MainHeading
        title={`${selectedCountry}'${
          selectedCountry.endsWith("s") ? "" : "s"
        } teams`}
        Icon={StarBorderPurple500TwoToneIcon}
      />
      <CountryTeams />
    </>
  ) : (
    <>
      <MainHeading title="top teams" Icon={StarBorderPurple500TwoToneIcon} />
      <HighlightedTeams />
    </>
  );
};

export default MainContent;
