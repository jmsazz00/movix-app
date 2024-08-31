import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import calculateAge from "../utilities/calculateAge";

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
  const theme = useTheme();
  const age = calculateAge(birthdate);

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
            Team
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {team || "N/A"}
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
            Country
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {nationality || "N/A"}
          </Typography>
        </Grid>
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
            Sport
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {sport || "N/A"}
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
            Position
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {position || "N/A"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            borderRight: `1px solid ${theme.palette.divider}`,
            p: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            color="textSecondary"
            fontWeight="bold"
          >
            Age
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {age} years
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ p: 2 }}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            fontWeight="bold"
          >
            Height
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {height || "N/A"}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlayerDetails;
