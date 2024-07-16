import useTeam from "../hooks/useTeam";
import TeamCard from "./TeamCard";
import TeamCardSkeleton from "./TeamCardSkeleton";

interface Props {
  teamName: string;
}

const HighlightedTeam = ({ teamName }: Props) => {
  const { data: team, isLoading, error } = useTeam(teamName);

  if (!isLoading && !team) return null;

  if (error) return <>{error}</>;

  return isLoading ? (
    <TeamCardSkeleton />
  ) : (
    <TeamCard teamData={team.teams[0]} />
  );
};

export default HighlightedTeam;
