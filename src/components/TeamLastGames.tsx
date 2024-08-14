import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import useTeamLastGames from "../hooks/useTeamLastGames";

interface Props {
  teamId: string;
}

const TeamLastGames = ({ teamId }: Props) => {
  const { data: games, isLoading, error } = useTeamLastGames(teamId);

  if (isLoading) return <CircularProgress sx={{ m: 2 }} />;

  if (error || !games || !games.results || games.results.length === 0)
    return null;

  return (
    <Box>
      <Typography fontWeight={"bold"} variant="h6" color={"textSecondary"}>
        Last Games
      </Typography>
      <Divider />
      <List sx={{ position: "relative", py: 0 }}>
        {games.results.map((game, index) => {
          const homeScore = parseInt(game.intHomeScore);
          const awayScore = parseInt(game.intAwayScore);
          const isDraw = homeScore === awayScore;
          const homeScoreColor = isDraw
            ? "text.secondary"
            : homeScore > awayScore
            ? "text.primary"
            : "text.secondary";
          const awayScoreColor = isDraw
            ? "text.secondary"
            : awayScore > homeScore
            ? "text.primary"
            : "text.secondary";

          return (
            <ListItem
              key={game.idEvent}
              sx={{ alignItems: "center", padding: "16px 0" }}
            >
              {/* Bullet Point */}
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "secondary.main",
                  borderRadius: "50%",
                }}
              />

              {/* Vertical Line */}
              {index < games.results.length - 1 && (
                <Divider
                  orientation="vertical"
                  sx={{
                    position: "absolute",
                    left: "4px",
                    top: "50%",
                    height: "calc(100% + 32px)",
                    backgroundColor: "secondary.main",
                  }}
                />
              )}

              {/* Home and Away Team Details */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  ml: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    {game.strHomeTeam} vs {game.strAwayTeam}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {new Date(game.dateEvent).toLocaleDateString()}
                  </Typography>
                </Box>

                {/* Home Team Badge */}
                <Avatar
                  alt={game.strHomeTeam}
                  src={game.strHomeTeamBadge?.concat("/tiny")}
                  variant="square"
                  sx={{ mx: 1 }}
                >
                  {!game.strHomeTeamBadge && game.strHomeTeam.charAt(0)}
                </Avatar>

                {/* Scores */}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                    mx: 2,
                    color: homeScoreColor,
                  }}
                >
                  {game.intHomeScore}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                    mx: 2,
                    color: awayScoreColor,
                  }}
                >
                  {game.intAwayScore}
                </Typography>

                {/* Away Team Badge */}
                <Avatar
                  alt={game.strAwayTeam}
                  src={game.strAwayTeamBadge?.concat("/tiny")}
                  variant="square"
                  sx={{ mx: 1 }}
                >
                  {!game.strAwayTeamBadge && game.strAwayTeam.charAt(0)}
                </Avatar>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default TeamLastGames;
