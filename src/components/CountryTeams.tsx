import { Alert, Box, Grid, Paper, useTheme } from "@mui/material";
import useTeams from "../hooks/useTeams";
import TeamCard from "./TeamCard";
import TeamCardSkeleton from "./TeamCardSkeleton";

interface Props {
  countryName: string;
}

const CountryTeams = ({ countryName }: Props) => {
  const { data: teams, isLoading, error } = useTeams(countryName);
  console.log(teams);
  const theme = useTheme();
  const skeletonCount = [1, 2, 3, 4, 5, 6];

  if (error) return <Alert severity="error">An unexpected error occured</Alert>;

  if (!isLoading && (!teams || !teams.teams || teams.teams.length === 0))
    return <Alert severity="error">Couldn't retrieve teams.</Alert>;

  return (
    <Box>
      <Grid container spacing={3}>
        {isLoading ? (
          <>
            {skeletonCount.map((sk) => (
              <Grid item xs={12} sm={6} md={4} key={sk}>
                <Paper
                  sx={{
                    p: 2,
                    minHeight: "400px",
                    bgcolor:
                      theme.palette.mode === "dark" ? "#000000cc" : "#e3f2fd",
                  }}
                >
                  <TeamCardSkeleton />
                </Paper>
              </Grid>
            ))}
          </>
        ) : (
          <>
            {teams?.teams.map((team) => (
              <Grid item xs={12} sm={6} md={4} key={team.idTeam}>
                <Paper
                  sx={{
                    p: 2,
                    minHeight: "400px",
                    bgcolor:
                      theme.palette.mode === "dark" ? "#000000cc" : "#e3f2fd",
                  }}
                >
                  <TeamCard teamData={team} />
                </Paper>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default CountryTeams;
