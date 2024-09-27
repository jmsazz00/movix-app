import { Typography } from "@mui/material";

interface ScoreProps {
  value: number;
  isHighlight: boolean;
  isDraw: boolean;
}

const Score = ({ value, isHighlight, isDraw }: ScoreProps) => (
  <Typography
    sx={{
      fontWeight: "bold",
      fontSize: "1.25rem",
      mx: 2,
      color: isDraw
        ? "text.secondary"
        : isHighlight
        ? "text.primary"
        : "text.secondary",
    }}
  >
    {value !== null && value !== undefined ? value : "?"}
  </Typography>
);

export default Score;
