import { Alert } from "@mui/material";
import { useParams } from "react-router-dom";
import countries from "../options/countries";
import CountryTeams from "./CountryTeams";
import MainHeading from "./MainHeading";
import { useEffect } from "react";
import useTeamQueryStore from "../store/TeamQueryStore";

const CountryTeamsBox = () => {
  const { country } = useParams();
  const onSelectCountry = useTeamQueryStore((t) => t.setCountryName);

  useEffect(() => {
    onSelectCountry(country);
  }, [country]);

  const isValidCountry = countries.some(
    (option) => option.fullName === country
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
