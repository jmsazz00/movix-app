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
import { Team } from "../hooks/useTeams";

interface Props {
  teamData: Team;
}

const TeamCard = ({ teamData }: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as string);
  };

  return (
    <Card
      sx={{
        width: 400,
        height: "100%",
        display: "flex",
        flexDirection: "column",
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
            {/* Add more languages as needed */}
          </Select>
        </FormControl>
        <Typography
          variant="body2"
          color="text.secondary"
          mt={2}
          textAlign={"justify"}
        >
          {teamData[`strDescription${selectedLanguage}` as keyof Team]}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
