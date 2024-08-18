import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const StadiumPage = () => {
  const { stadium } = useParams();

  return <Box p={4}>{stadium}</Box>;
};

export default StadiumPage;
