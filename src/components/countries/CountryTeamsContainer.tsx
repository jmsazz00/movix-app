import { Alert } from "@mui/material";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import countries from "../../utilities/countries";
import CountryTeams from "./CountryTeams";
import MainHeading from "../common/MainHeading";

const CountryTeamsContainer = () => {
  const { country } = useParams();

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

export default CountryTeamsContainer;
