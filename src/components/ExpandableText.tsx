import { Alert, Button } from "@mui/material";
import { useState } from "react";

interface Props {
  text: string;
  limit: number;
}

const ExpandableText = ({ text, limit }: Props) => {
  if (!text) return <Alert severity="error">Not currently available</Alert>;

  if (text.length <= limit) return text;

  const [expanded, setExpanded] = useState(false);
  const trimmed = text.slice(0, limit) + "...";

  return (
    <>
      {expanded ? text : trimmed}
      <Button size="small" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </>
  );
};

export default ExpandableText;
