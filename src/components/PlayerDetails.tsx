import calculateAge from "../utilities/calculateAge";
import DetailsGrid from "./DetailsGrid";

interface PlayerDetailsProps {
  team: string;
  nationality: string;
  sport: string;
  position: string;
  height: string;
  birthdate: string;
}

const PlayerDetails = ({
  team,
  nationality,
  sport,
  position,
  height,
  birthdate,
}: PlayerDetailsProps) => {
  const age = calculateAge(birthdate);

  const playerData = [
    {
      label: "Team",
      value: team,
      isLink: true,
      linkPath: `/t/${encodeURIComponent(team)}`,
    },
    { label: "Country", value: nationality },
    { label: "Sport", value: sport },
    { label: "Position", value: position },
    { label: "Age", value: `${age} years` },
    { label: "Height", value: height },
  ];

  return <DetailsGrid data={playerData} />;
};

export default PlayerDetails;
