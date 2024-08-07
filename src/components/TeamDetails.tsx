import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();

  return (
    <Box my={4}>
      <Grid container spacing={0} sx={{ textAlign: "center" }}>
        <Grid
          item
          xs={6}
          sx={{
            borderRight: `1px solid ${theme.palette.divider}`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            p: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            color="textSecondary"
            fontWeight="bold"
          >
            Country
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {country || "N/A"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            borderBottom: `1px solid ${theme.palette.divider}`,
            p: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            color="textSecondary"
            fontWeight="bold"
          >
            Sport
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {sport || "N/A"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ borderRight: `1px solid ${theme.palette.divider}`, p: 2 }}
        >
          <Typography
            variant="subtitle1"
            color="textSecondary"
            fontWeight="bold"
          >
            League(s)
          </Typography>
          {leagues.map((league, index) => (
            <Typography key={index} variant="body1" fontWeight="bold">
              {league.startsWith("_No League") ? "N/A" : <>&#8226; {league}</>}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={6} sx={{ p: 2 }}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            fontWeight="bold"
          >
            Stadium
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {stadium || "N/A"}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TeamDetails;
