import { useParams } from "react-router-dom";
import useTeam from "../hooks/useTeam";
import {
  Alert,
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

const TeamDetailPage = () => {
  const { name } = useParams();
  const { data: team, isLoading, error } = useTeam(name!);

  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as string);
  };

  if (!isLoading && (!team || !team.teams || team.teams.length === 0))
    return <Alert severity="error">Couldn't retrieve team.</Alert>;

  if (error)
    return <Alert severity="error">An unexpected error occured.</Alert>;

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Box>
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
      TeamDetailPage: {name}
    </Box>
  );
};

export default TeamDetailPage;
