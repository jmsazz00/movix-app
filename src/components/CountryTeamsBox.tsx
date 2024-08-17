import { Alert } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import countries from "../utilities/countries";
import useTeamQueryStore from "../store/TeamQueryStore";
import CountryTeams from "./CountryTeams";
import MainHeading from "./MainHeading";

const CountryTeamsBox = () => {
  const { country } = useParams();
  const onSelectCountry = useTeamQueryStore((t) => t.setCountryName);

  useEffect(() => {
    onSelectCountry(country);
  }, [country]);

  const isValidCountry = useMemo(
    () => countries.some((option) => option.fullName === country),
    [country]
  );

  if (!isValidCountry)
    return <Alert severity="error">Sorry, this is not a valid country.</Alert>;

  return (
    <>
      <MainHeading
        title={`${country}'${country!.endsWith("s") ? "" : "s"} teams`}
      />
      <CountryTeams selectedCountry={country!} />
    </>
  );
};

export default CountryTeamsBox;
