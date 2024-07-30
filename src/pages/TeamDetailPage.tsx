import { useParams } from "react-router-dom";

const TeamDetailPage = () => {
  const { id } = useParams();
  return <div>TeamDetailPage: {id}</div>;
};

export default TeamDetailPage;
