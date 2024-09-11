import { Box, CircularProgress, Divider } from "@mui/material";
import useJerseys from "../hooks/useJerseys";
import DetailHeading from "./DetailHeading";
import GenericSelector from "./GenericSelector";
import JerseyCard from "./JerseyCard";
import useSeasons from "../hooks/useSeasons";
import useSelectedSeason from "../hooks/useSelectedSeason";
import useFilteredJerseys from "../hooks/useFilteredJerseys";

interface Props {
  teamId: string;
}

const TeamJerseys = ({ teamId }: Props) => {
  const { data: jerseys, isLoading, error } = useJerseys(teamId);
  const seasons = useSeasons(jerseys);
  const [selectedSeason, setSelectedSeason] = useSelectedSeason(seasons);
  const filteredJerseys = useFilteredJerseys(jerseys, selectedSeason);

  if (isLoading) return <CircularProgress sx={{ m: 2 }} />;

  if (error || !jerseys || !jerseys.equipment || jerseys.equipment.length === 0)
    return null;

  return (
    <Box mt={5}>
      <DetailHeading title="Jerseys" />
      <Divider />
      <Box mt={3} textAlign={"center"}>
        <Box mb={2}>
          <GenericSelector
            label="Season"
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            options={seasons.map((season) => ({
              value: season,
              label: season,
            }))}
            fullWidth={false}
            size="small"
          />
        </Box>

        <Box sx={{ display: "flex", overflowX: "auto", gap: 2, p: 1, pb: 2 }}>
          {filteredJerseys?.map((jersey) => (
            <JerseyCard
              key={jersey.idEquipment}
              image={jersey.strEquipment}
              type={jersey.strType}
              season={jersey.strSeason}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamJerseys;
