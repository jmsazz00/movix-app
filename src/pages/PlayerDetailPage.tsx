import { useParams } from "react-router-dom";

const PlayerDetailPage = () => {
  const { player } = useParams();

  return <div>{player}</div>;
};

export default PlayerDetailPage;
