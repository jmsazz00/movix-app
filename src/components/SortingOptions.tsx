import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import SortOption from "../entities/SortType";

interface SortingOptionsProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortingOptions = ({ onChange, value }: SortingOptionsProps) => {
  const handleSelectChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as SortOption;
    onChange(selectedValue);
  };

  return (
    <Box display={"flex"} justifyContent={{ xs: "center", md: "flex-end" }}>
      <FormControl size="small" sx={{ mb: 1.5, mr: 1 }}>
        <Select value={value} onChange={handleSelectChange}>
          <MenuItem value="name_asc">Sort A-Z</MenuItem>
          <MenuItem value="name_desc">Sort Z-A</MenuItem>
          <MenuItem value="rating">Sort by Rating</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortingOptions;
