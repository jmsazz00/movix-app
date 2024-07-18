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
} from "@mui/material";
import { useState } from "react";
import { Team } from "../services/TeamService";
import ExpandableText from "./ExpandableText";

interface Props {
  teamData: Team;
}

const TeamCard = ({ teamData }: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const theme = useTheme();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as string);
  };

  const descriptionLimitPx = 100;

  return (
    <div id={teamData.idTeam}>
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
          image={teamData.strBadge + "/small"}
          sx={{ objectFit: "contain", paddingTop: 2 }}
          alt={teamData.strTeam}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {teamData.strTeam}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            <strong>Country:</strong> {teamData.strCountry}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>League:</strong> {teamData.strLeague}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Stadium:</strong> {teamData.strStadium}
          </Typography>
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
              text={teamData[`strDescription${selectedLanguage}` as keyof Team]}
              limit={descriptionLimitPx}
              parentId={teamData.idTeam}
            />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamCard;
