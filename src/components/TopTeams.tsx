import { useEffect } from "react";
import useTeamQueryStore from "../store/TeamQueryStore";
import HighlightedTeams from "./HighlightedTeams";
import MainHeading from "./MainHeading";

const TopTeams = () => {
  const onSelectCountry = useTeamQueryStore((t) => t.setCountryName);

  useEffect(() => {
    onSelectCountry("");
    window.scroll({ top: 0 });
  }, []);

  return (
    <>
      <MainHeading title="top teams" />
      <HighlightedTeams />
    </>
  );
};

export default TopTeams;
