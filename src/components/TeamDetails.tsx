import DetailsGrid from "./DetailsGrid";

interface TeamDetailsProps {
  country: string;
  sport: string;
  leagues: string[];
  stadium: string;
}

const TeamDetails = ({
  country,
  sport,
  leagues,
  stadium,
}: TeamDetailsProps) => {
  const teamData = [
    { label: "Country", value: country },
    { label: "Sport", value: sport },
    {
      label: "League(s)",
      value: (
        <>
          {leagues.map((league) =>
            league.startsWith("_No League") ? (
              "N/A"
            ) : (
              <div>&#8226; {league}</div>
            )
          )}
        </>
      ),
    },
    {
      label: "Stadium",
      value: stadium,
      isLink: true,
      linkPath: `/v/${encodeURIComponent(stadium)}`,
    },
  ];

  return <DetailsGrid data={teamData} />;
};

export default TeamDetails;
