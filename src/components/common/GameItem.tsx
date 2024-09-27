import { Box, Typography } from "@mui/material";
import Score from "./Score";
import TeamScoreBadge from "../teams/TeamScoreBadge";
import Result from "../../entities/GameResult";
import TimelineItem from "./TimeLineItem";

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
    <TimelineItem index={index} totalItems={totalGames}>
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
    </TimelineItem>
  );
};

export default GameItem;
