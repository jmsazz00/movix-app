import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  useTheme,
  Rating,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Team } from "../services/TeamService";
import ExpandableText from "./ExpandableText";
import calculateRating from "../options/calculateRating";

interface Props {
  teamData: Team;
}

const TeamCard = ({ teamData }: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const theme = useTheme();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as string);
  };

  const {
    idTeam,
    intLoved,
    strBadge,
    strTeam,
    strCountry,
    strLeague,
    strStadium,
  } = teamData;

  const descriptionLimitPx = 100;

  return (
    <div id={idTeam}>
      <Card
        sx={{
          maxWidth: 400,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          m: "0 auto",
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
          <FormControl sx={{ mt: 2, minWidth: 120 }}>
            <InputLabel id="language-label">Language</InputLabel>
            <Select
              labelId="language-label"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <MenuItem value="EN">English</MenuItem>
              <MenuItem value="ES">Spanish</MenuItem>
              <MenuItem value="FR">French</MenuItem>
            </Select>
          </FormControl>
          <Typography
            variant="body2"
            color="text.secondary"
            mt={2}
            textAlign={"justify"}
            component={"div"}
          >
            <ExpandableText
              text={
                teamData[
                  `strDescription${selectedLanguage}` as keyof Team
                ] as string
              }
              limit={descriptionLimitPx}
            />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamCard;
