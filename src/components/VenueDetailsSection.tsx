import { Box } from "@mui/material";
import Detail from "../entities/Detail";
import DetailCard from "./DetailCard";

interface Props {
  details: Detail[];
}

const VenueDetailsSection = ({ details }: Props) => (
  <Box
    sx={{
      padding: "24px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "16px",
      mb: 3,
    }}
  >
    {details.map((detail, index) => (
      <DetailCard key={index} detail={detail} />
    ))}
  </Box>
);

export default VenueDetailsSection;
