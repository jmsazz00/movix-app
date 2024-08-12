import { Alert } from "@mui/material";
import { useParams } from "react-router-dom";
import countries from "../options/countries";
import CountryTeams from "./CountryTeams";
import MainHeading from "./MainHeading";

const CountryTeamsBox = () => {
  const { country } = useParams();

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
