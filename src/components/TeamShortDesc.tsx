import { Alert, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  teamName: string;
  desc: string;
  limit: number;
}

const TeamShortDesc = ({ teamName, desc, limit }: Props) => {
  const navigate = useNavigate();

  if (!desc)
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        No description available
      </Alert>
    );

  const isLongDesc = desc.length > limit;

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      mt={2}
      textAlign={"justify"}
    >
      {!isLongDesc ? desc : desc.slice(0, limit) + "..."}
      <Button
        size="small"
        onClick={() => {
          navigate(`/team/${teamName}`);
        }}
      >
        Learn More
      </Button>
    </Typography>
  );
};

export default TeamShortDesc;
