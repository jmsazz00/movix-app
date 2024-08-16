import { Box, Divider, List, Typography } from "@mui/material";
import GameItem from "./GameItem";
import Result from "../entities/Result";

interface GameListProps {
  title: string;
  games: Result[];
}

const GameList = ({ title, games }: GameListProps) => (
  <Box>
    <Typography fontWeight={"bold"} variant="h6" color={"textSecondary"}>
      {title}
    </Typography>
    <Divider />
    <List sx={{ position: "relative", py: 0 }}>
      {games.map((game, index) => (
        <GameItem
          game={game}
          index={index}
          totalGames={games.length}
          key={game.idEvent}
        />
      ))}
    </List>
  </Box>
);

export default GameList;
