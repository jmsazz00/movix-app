import { Alert } from "@mui/material";
import useTeam from "../hooks/useTeam";
import TeamCard from "./TeamCard";
import TeamCardSkeleton from "./TeamCardSkeleton";

interface Props {
  teamName: string;
}

const HighlightedTeam = ({ teamName }: Props) => {
  const { data: team, isLoading, error } = useTeam(teamName);

  if (!isLoading && (!team || !team.teams))
    return <Alert severity="error">Couldn't retrieve team.</Alert>;

  if (error) return <>{error}</>;

  return isLoading ? (
    <TeamCardSkeleton />
  ) : (
    <TeamCard teamData={team.teams[0]} />
  );
};

export default HighlightedTeam;
