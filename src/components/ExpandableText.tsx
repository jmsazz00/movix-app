import { Typography, Button } from "@mui/material";
import { useState } from "react";

interface Props {
  text: string;
  limit: number;
  style: object;
}

const ExpandableText = ({ text, limit, style }: Props) => {
  if (!text) return null;
  if (text.length <= limit) return <Typography>{text}</Typography>;

  const [isExpanded, setExpanded] = useState(false);
  const summary = isExpanded ? text : text.slice(0, limit) + "...";

  return (
    <Typography variant="body1" component="p" sx={style}>
      {summary}
      <Button
        onClick={() => setExpanded(!isExpanded)}
        size="small"
        sx={{ fontWeight: "bold", ml: 1 }}
      >
        Show {isExpanded ? "Less" : "More"}
      </Button>
    </Typography>
  );
};

export default ExpandableText;
