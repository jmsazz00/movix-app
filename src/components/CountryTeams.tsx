import { Alert, Box, Grid } from "@mui/material";
import useTeams from "../hooks/useTeams";
import TeamCard from "./TeamCard";
import TeamCardSkeleton from "./TeamCardSkeleton";
import CustomGridItem from "./CustomGridItem";
import SortingOptions, { SortOption } from "./SortingOptions";
import { useTeamSorting } from "../hooks/useTeamSorting";

interface Props {
  countryName: string;
  sortBy: SortOption;
  setSortBy: (sortBy: SortOption) => void;
}

const CountryTeams = ({ countryName, sortBy, setSortBy }: Props) => {
  const { data: teams, isLoading, error } = useTeams(countryName);
  const skeletonCount = [1, 2, 3, 4, 5, 6];

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
