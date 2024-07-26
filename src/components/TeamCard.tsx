import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import calculateRating from "../options/calculateRating";
import Team from "../entities/Team";
import TeamShortDesc from "./TeamShortDesc";

interface Props {
  teamData: Team;
}

const TeamCard = ({ teamData }: Props) => {
  const theme = useTheme();

  const {
    idTeam,
    intLoved,
    strBadge,
    strTeam,
    strCountry,
    strLeague,
    strStadium,
    strDescriptionEN,
  } = teamData;

  const descriptionLimit = 180;

  return (
    <div id={idTeam}>
      <Card
        sx={{
          maxWidth: 400,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          m: "0 auto",
          textAlign: "center",
          bgcolor:
            theme.palette.mode === "light"
              ? "#fafafa"
              : theme.palette.background.default,
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={strBadge + "/small"}
          sx={{ objectFit: "contain", paddingTop: 2 }}
          alt={strTeam}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {strTeam}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            <strong>Country:</strong> {strCountry}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>League:</strong> {strLeague}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Stadium:</strong> {strStadium}
          </Typography>
          <Box>
            <Rating
              value={calculateRating(intLoved)}
              precision={0.1}
              readOnly
              sx={{ m: 1 }}
            />
          </Box>
          <Divider sx={{ width: "200px", m: "5px auto" }} />
          <TeamShortDesc
            idTeam={idTeam}
            desc={strDescriptionEN}
            limit={descriptionLimit}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamCard;
