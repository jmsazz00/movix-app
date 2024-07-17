import { Alert, Button, Collapse } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  text: string;
  limit: number;
  parentId: string;
}

const ExpandableText = ({ text, limit, parentId }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (!expanded && !initialRender) {
      const element = document.getElementById(parentId);
      setTimeout(() => {
        if (expanded)
          window.scroll({ top: element?.offsetTop, behavior: "smooth" });
      }, 450);
    }
  }, [expanded, initialRender]);

  if (!text) return <Alert severity="error">Not currently available</Alert>;

  if (text.length <= limit) return <div>{text}</div>;

  return (
    <div>
      <Collapse in={expanded} collapsedSize={limit}>
        <div>{text}</div>
      </Collapse>
      <Button
        size="small"
        onClick={() => {
          setExpanded(!expanded);
          if (initialRender) setInitialRender(false);
        }}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </div>
  );
};

export default ExpandableText;
