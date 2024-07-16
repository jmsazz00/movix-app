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
} from "@mui/material";
import { useState } from "react";
import { Team } from "../services/TeamService";
import ExpandableText from "./ExpandableText";

interface Props {
  teamData: Team;
}

const TeamCard = ({ teamData }: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as string);
  };

  const descriptionLimit = 250;

  return (
    <Card
      sx={{
        width: 400,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        m: "0 auto",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={teamData.strBadge}
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
            limit={descriptionLimit}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
