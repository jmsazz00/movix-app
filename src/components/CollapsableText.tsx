import { Alert, Box, Button, Collapse, Typography } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  description: string;
}

const CollapsableText = ({ description }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [expanded, setExpanded] = useState(false);
  const [isContentLong, setIsContentLong] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      const DESC_LIMIT = 100;
      const contentHeight = contentRef.current.scrollHeight;
      setIsContentLong(contentHeight > DESC_LIMIT);
    }
  }, [description, expanded]);

  const handleExpandClick = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  return (
    <Box>
      <Collapse
        in={expanded}
        collapsedSize={75}
        timeout="auto"
        sx={{ mt: 0.5 }}
      >
        <Box ref={contentRef}>
          <Typography variant="body1" component={"div"} textAlign={"justify"}>
            {description || (
              <Alert severity="error">No description is available.</Alert>
            )}
          </Typography>
        </Box>
      </Collapse>
      {isContentLong && (
        <Button
          variant="outlined"
          size="small"
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </Box>
  );
};

export default CollapsableText;
