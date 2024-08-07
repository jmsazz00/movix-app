import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Collapse, Typography, Alert } from "@mui/material";

interface TeamDescriptionProps {
  description: string;
}

const TeamDescription: React.FC<TeamDescriptionProps> = ({ description }) => {
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box mt={2}>
      <Typography variant="h6" color={"textSecondary"}>
        Overview
      </Typography>
      <Collapse
        in={expanded}
        collapsedSize={100}
        timeout="auto"
        sx={{ my: 0.5 }}
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
        <Button variant="outlined" onClick={handleExpandClick}>
          {expanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </Box>
  );
};

export default TeamDescription;
