import StarBorderPurple500TwoToneIcon from "@mui/icons-material/StarBorderPurple500TwoTone";
import MainHeading from "./MainHeading";
import HighlightedTeams from "./HighlightedTeams";
import CountryTeams from "./CountryTeams";
import SortOption from "../entities/SortOption";

interface Props {
  selectedCountry: string;
  sortBy: SortOption;
  setSortBy: (sortBy: SortOption) => void;
}

const MainContent = ({ selectedCountry, sortBy, setSortBy }: Props) => {
  return selectedCountry ? (
    <>
      <MainHeading
        title={`${selectedCountry}'${
          selectedCountry.endsWith("s") ? "" : "s"
        } teams`}
        Icon={StarBorderPurple500TwoToneIcon}
      />
      <CountryTeams
        sortBy={sortBy}
        setSortBy={setSortBy}
        countryName={selectedCountry}
      />
    </>
  ) : (
    <>
      <MainHeading title="top teams" Icon={StarBorderPurple500TwoToneIcon} />
      <HighlightedTeams />
    </>
  );
};

export default MainContent;
