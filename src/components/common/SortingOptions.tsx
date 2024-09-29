import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import SortOption from "../../entities/SortType";

interface SortingOptionsProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortingOptions = ({ onChange, value }: SortingOptionsProps) => {
  const handleSelectChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as SortOption;
    onChange(selectedValue);
  };

  const styles = {
    fontSize: { xs: "0.825rem", md: "1rem" },
  };

  return (
    <Box display="flex" justifyContent="right">
      <FormControl variant="standard" size="small" sx={{ mb: 1.5, mr: 1 }}>
        <Select value={value} onChange={handleSelectChange} sx={styles}>
          <MenuItem value="name_asc" sx={styles}>
            Sort A-Z
          </MenuItem>
          <MenuItem value="name_desc" sx={styles}>
            Sort Z-A
          </MenuItem>
          <MenuItem value="rating" sx={styles}>
            Sort by: Rating
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortingOptions;
