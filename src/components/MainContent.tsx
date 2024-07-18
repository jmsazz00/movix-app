import StarBorderPurple500TwoToneIcon from "@mui/icons-material/StarBorderPurple500TwoTone";
import MainHeading from "./MainHeading";
import HighlightedTeams from "./HighlightedTeams";
import CountryTeams from "./CountryTeams";

interface Props {
  selectedCountry: string;
}

const MainContent = ({ selectedCountry }: Props) => {
  return selectedCountry ? (
    <>
      <MainHeading
        title={`${selectedCountry}'${
          selectedCountry.endsWith("s") ? "" : "s"
        } teams`}
        Icon={StarBorderPurple500TwoToneIcon}
      />
      <CountryTeams countryName={selectedCountry} />
    </>
  ) : (
    <>
      <MainHeading title="top teams" Icon={StarBorderPurple500TwoToneIcon} />
      <HighlightedTeams />
    </>
  );
};

export default MainContent;
