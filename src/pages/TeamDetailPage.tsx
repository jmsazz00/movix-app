import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Collapse,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useTeam from "../hooks/useTeam";

const TeamDetailPage = () => {
  const { name } = useParams();
  const { data: teams, isLoading, error } = useTeam(name!);

  if (!isLoading && (!teams || !teams.teams || teams.teams.length === 0))
    return <Alert severity="error">Couldn't retrieve team.</Alert>;

  if (error)
    return <Alert severity="error">An unexpected error occured.</Alert>;

  type LnOpts = "EN" | "FR" | "ES";

  const [expanded, setExpanded] = useState(false);
  const [language, setLanguage] = useState<LnOpts>("EN");
  const [isContentLong, setIsContentLong] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const team = teams?.teams[0]!;
  const DESC_LIMIT = 100;

  useEffect(() => {
    if (contentRef.current) {
      setIsContentLong(contentRef.current.scrollHeight > DESC_LIMIT); // Compare with collapsedSize (e.g., 100px)
    }
  }, [team, language, expanded]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as LnOpts);
  };

  return isLoading ? (
    <CircularProgress sx={{ m: 4 }} />
  ) : (
    <Box p={4}>
      <Grid container spacing={3}>
        {/* Left Side: Badge and Main Details */}
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <img
              src={team.strBadge + "/small"}
              alt={`${team.strTeam} badge`}
              style={{ width: "200px", borderRadius: 8 }}
            />
          </Box>
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
                  {team.strCountry || "N/A"}
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
                  {team.strSport || "N/A"}
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
                  League
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {team.strLeague || "N/A"}
                </Typography>
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
                  {team.strStadium || "N/A"}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box mt={2}>
            <IconButton
              color="primary"
              href={team.strFacebook}
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook />
            </IconButton>
            <IconButton
              color="primary"
              href={team.strTwitter}
              target="_blank"
              aria-label="Twitter"
            >
              <Twitter />
            </IconButton>
            <IconButton
              color="primary"
              href={team.strInstagram}
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram />
            </IconButton>
          </Box>
        </Grid>

        {/* Vertical Divider */}
        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Divider orientation="vertical" flexItem sx={{ mr: 4 }} />
        </Grid>

        {/* Right Side: Description and Language Selector */}
        <Grid item xs={12} sm={7} md={8}>
          <Box>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select
                value={language}
                onChange={handleLanguageChange}
                label="Language"
              >
                <MenuItem value="EN">English</MenuItem>
                <MenuItem value="ES">Spanish</MenuItem>
                <MenuItem value="FR">French</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mt={2}>
            <Typography variant="h6" color={"textSecondary"}>
              Overview
            </Typography>
            <Collapse
              in={expanded}
              collapsedSize={DESC_LIMIT}
              timeout="auto"
              sx={{ my: 0.5 }}
            >
              <Box ref={contentRef}>
                <Typography
                  variant="body1"
                  component={"div"}
                  textAlign={"justify"}
                >
                  {team[`strDescription${language}`] || (
                    <Alert severity="error">No description is available.</Alert>
                  )}
                </Typography>
              </Box>
            </Collapse>
            {isContentLong && (
              <Button variant="outlined" onClick={handleExpandClick}>
                {expanded ? "Show Less" : "Show More"}
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TeamDetailPage;
