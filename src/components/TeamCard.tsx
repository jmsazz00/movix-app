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
import { Team } from "../entities/Team";
import calculateRating from "../options/calculateRating";
import TeamBadge from "./TeamBadge";
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
        <CardMedia sx={{ pt: 2 }}>
          <TeamBadge badgeUrl={strBadge} teamName={strTeam} />
        </CardMedia>
        <CardContent sx={{ py: 1 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Country:</strong> {strCountry}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>League:</strong>{" "}
            {!strLeague || strLeague.startsWith("_No League")
              ? "N/A"
              : strLeague}
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
            teamName={strTeam}
            desc={strDescriptionEN}
            limit={descriptionLimit}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamCard;
