import { Alert, Box, Grid } from "@mui/material";
import useTeams from "../hooks/useTeams";
import useTeamSorting from "../hooks/useTeamSorting";
import useTeamQueryStore from "../store/TeamQueryStore";
import CustomGridItem from "./CustomGridItem";
import SortingOptions from "./SortingOptions";
import TeamCard from "./TeamCard";
import TeamCardSkeleton from "./TeamCardSkeleton";

interface Props {
  selectedCountry: string;
}

const CountryTeams = ({ selectedCountry }: Props) => {
  const sortBy = useTeamQueryStore((t) => t.teamQuery.sortBy);
  const setSortBy = useTeamQueryStore((t) => t.setSortBy);

  const { data: teams, isLoading, error } = useTeams(selectedCountry);
  const skeletonCount = Array.from({ length: 25 }, (v, k) => k + 1);

  if (error) return <Alert severity="error">An unexpected error occured</Alert>;

  if (!isLoading && (!teams || !teams.teams || teams.teams.length === 0))
    return <Alert severity="error">Couldn't retrieve teams.</Alert>;

  const sortedTeams = useTeamSorting(sortBy, teams?.teams!);

  return (
    <Box>
      <SortingOptions value={sortBy} onChange={setSortBy} />
      <Grid container spacing={3}>
        {isLoading ? (
          <>
            {skeletonCount.map((sk) => (
              <CustomGridItem key={sk}>
                <TeamCardSkeleton />
              </CustomGridItem>
            ))}
          </>
        ) : (
          <>
            {sortedTeams.map((team) => (
              <CustomGridItem key={team.idTeam}>
                <TeamCard teamData={team} />
              </CustomGridItem>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default CountryTeams;
