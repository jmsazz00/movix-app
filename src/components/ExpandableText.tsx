import { Alert, Button, Collapse } from "@mui/material";
import { useRef, useState } from "react";

interface Props {
  text: string;
  limit: number;
}

const ExpandableText = ({ text, limit }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  if (textRef.current && textRef.current.clientHeight <= limit)
    return (
      <div ref={textRef} style={{ whiteSpace: "pre-wrap" }}>
        {text}
      </div>
    );

  if (!text) return <Alert severity="error">Not currently available</Alert>;

  return (
    <div>
      <Collapse in={expanded} collapsedSize={`${limit}px`}>
        <div ref={textRef} style={{ whiteSpace: "pre-wrap" }}>
          {text}
        </div>
      </Collapse>

      <Button
        aria-expanded={expanded}
        aria-controls="expandable-text"
        size="small"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </div>
  );
};

export default ExpandableText;
