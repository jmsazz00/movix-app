import { Box, Divider, ListItem, Typography } from "@mui/material";
import Score from "./Score";
import TeamScoreBadge from "./TeamScoreBadge";
import Result from "../entities/Result";

interface GameItemProps {
  game: Result;
  index: number;
  totalGames: number;
}

const GameItem = ({ game, index, totalGames }: GameItemProps) => {
  const homeScore = parseInt(game.intHomeScore);
  const awayScore = parseInt(game.intAwayScore);
  const isDraw = homeScore === awayScore;

  return (
    <ListItem sx={{ alignItems: "center", padding: "16px 0" }}>
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

      {index < totalGames - 1 && (
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

      <Box sx={{ display: "flex", alignItems: "center", width: "100%", ml: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>
            {game.strHomeTeam} vs {game.strAwayTeam}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {new Date(game.dateEvent).toLocaleDateString()}
          </Typography>
        </Box>

        <TeamScoreBadge
          teamName={game.strHomeTeam}
          badgeUrl={game.strHomeTeamBadge}
        />

        <Score
          value={homeScore}
          isHighlight={homeScore > awayScore}
          isDraw={isDraw}
        />
        <Score
          value={awayScore}
          isHighlight={awayScore > homeScore}
          isDraw={isDraw}
        />

        <TeamScoreBadge
          teamName={game.strAwayTeam}
          badgeUrl={game.strAwayTeamBadge}
        />
      </Box>
    </ListItem>
  );
};

export default GameItem;
