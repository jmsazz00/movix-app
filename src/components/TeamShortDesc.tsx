import { Alert, Button, Typography } from "@mui/material";

interface Props {
  idTeam: string;
  desc: string;
  limit: number;
}

const TeamShortDesc = ({ idTeam, desc, limit }: Props) => {
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
      <Button size="small" onClick={() => {}}>
        Learn More
      </Button>
    </Typography>
  );
};

export default TeamShortDesc;
