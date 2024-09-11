import {
  Box,
  Card,
  CardMedia,
  CircularProgress,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import useJerseys from "../hooks/useJerseys";
import DetailHeading from "./DetailHeading";

interface Props {
  teamId: string;
}

const TeamJerseys = ({ teamId }: Props) => {
  const { data: jerseys, isLoading, error } = useJerseys(teamId);
  const [selectedSeason, setSelectedSeason] = useState<string>("");

  // Extract unique seasons from jerseys data
  const seasons = useMemo(() => {
    if (!jerseys || !jerseys.equipment) return [];
    const uniqueSeasons = Array.from(
      new Set(jerseys.equipment.map((j) => j.strSeason))
    );
    return uniqueSeasons.sort((a, b) => b.localeCompare(a)); // Sort seasons in descending order (latest first)
  }, [jerseys]);

  // Set the default season to the latest
  useEffect(() => {
    if (seasons.length > 0 && !selectedSeason) {
      setSelectedSeason(seasons[0]);
    }
  }, [seasons, selectedSeason]);

  // Filter and sort jerseys based on selected season and type order
  const filteredJerseys = useMemo(() => {
    if (!selectedSeason) return jerseys?.equipment || [];
    return jerseys?.equipment
      .filter((jersey) => jersey.strSeason === selectedSeason)
      .sort((a, b) => {
        const typeOrder = ["1st", "2nd", "3rd", "4th", "5th"]; // Define the preferred order of types
        return typeOrder.indexOf(a.strType) - typeOrder.indexOf(b.strType);
      });
  }, [jerseys, selectedSeason]);

  if (isLoading) return <CircularProgress sx={{ m: 2 }} />;

  if (error || !jerseys || !jerseys.equipment || jerseys.equipment.length === 0)
    return null;

  return (
    <Box mt={5}>
      <DetailHeading title="Jerseys" />
      <Divider />
      <Box mt={3} textAlign={"center"}>
        <FormControl size="small" sx={{ minWidth: 200, mb: 2 }}>
          <InputLabel>Season</InputLabel>
          <Select
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            label="Season"
            sx={{ textAlign: "left" }}
          >
            {seasons.map((season) => (
              <MenuItem key={season} value={season}>
                {season}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ display: "flex", overflowX: "auto", gap: 2, p: 1, pb: 2 }}>
          {filteredJerseys?.map((jersey) => (
            <Card
              key={jersey.idEquipment}
              sx={{
                minWidth: 220,
                boxShadow: 3,
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
                position: "relative",
                overflow: "visible",
              }}
            >
              {/* Ribbon for jersey type */}
              <Box
                sx={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  zIndex: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "primary.dark"
                      : "primary.light",
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                {jersey.strType}
              </Box>

              <Box
                sx={{
                  p: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 200,
                }}
              >
                <CardMedia
                  component="img"
                  image={jersey.strEquipment + "/small"}
                  alt={`Jersey for season ${jersey.strSeason}`}
                  sx={{
                    objectFit: "contain",
                    maxHeight: "160px",
                    width: "auto",
                  }}
                />
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamJerseys;
