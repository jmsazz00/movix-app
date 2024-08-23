import { Box } from "@mui/material";
import VenueDetailsCard from "./VenueDetailsCard";

export interface Detail {
  label: string;
  value: string;
}

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
      <VenueDetailsCard key={index} detail={detail} />
    ))}
  </Box>
);

export default VenueDetailsSection;
