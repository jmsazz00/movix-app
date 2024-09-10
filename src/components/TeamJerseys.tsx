import { Box, CircularProgress } from "@mui/material";
import useJerseys from "../hooks/useJerseys";

interface Props {
  teamId: string;
}

const TeamJerseys = ({ teamId }: Props) => {
  const { data: jerseys, isLoading, error } = useJerseys(teamId);

  if (isLoading) return <CircularProgress sx={{ m: 2 }} />;

  if (error || !jerseys || !jerseys.equipment || jerseys.equipment.length === 0)
    return null;

  return <Box mt={4}>{jerseys.equipment[0].strType}</Box>;
};

export default TeamJerseys;
