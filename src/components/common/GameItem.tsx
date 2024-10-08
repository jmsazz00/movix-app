import { Box, Typography } from "@mui/material";
import Result from "../../entities/GameResult";
import useResponsive from "../../hooks/useResponsive";
import TeamScoreBadge from "../teams/TeamScoreBadge";
import Score from "./Score";
import TimelineItem from "./TimeLineItem";

interface GameItemProps {
  game: Result;
  index: number;
  totalGames: number;
}

const GameItem = ({ game, index, totalGames }: GameItemProps) => {
  const { isMobile } = useResponsive();

  const homeScore = parseInt(game.intHomeScore);
  const awayScore = parseInt(game.intAwayScore);
  const isDraw = homeScore === awayScore;

  return (
    <TimelineItem index={index} totalItems={totalGames}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexGrow: 1,
          justifyContent: isMobile ? "flex-start" : "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            textAlign: isMobile ? "left" : "inherit",
            mb: isMobile ? 0.66 : 0,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            {game.strHomeTeam} vs {game.strAwayTeam}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {new Date(game.dateEvent).toLocaleDateString()}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: isMobile ? "center" : "flex-start",
            alignItems: "center",
            width: isMobile ? "100%" : "auto",
          }}
        >
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
      </Box>
    </TimelineItem>
  );
};

export default GameItem;
