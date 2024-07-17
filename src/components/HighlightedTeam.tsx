import { Alert } from "@mui/material";
import useTeam from "../hooks/useTeam";
import TeamCard from "./TeamCard";
import TeamCardSkeleton from "./TeamCardSkeleton";

interface Props {
  teamName: string;
}

const HighlightedTeam = ({ teamName }: Props) => {
  const { data: team, isLoading, error } = useTeam(teamName);

  if (!isLoading && (!team || !team.teams || team.teams.length === 0))
    return <Alert severity="error">Couldn't retrieve team.</Alert>;

  if (error)
    return <Alert severity="error">An unexpected error occured.</Alert>;

  return isLoading ? (
    <TeamCardSkeleton />
  ) : (
    <TeamCard teamData={team.teams[0]} />
  );
};

export default HighlightedTeam;
