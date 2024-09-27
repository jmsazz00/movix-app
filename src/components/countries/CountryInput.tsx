import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  searchQuery: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CountryInput = ({ searchQuery, onChange }: Props) => {
  return (
    <TextField
      fullWidth
      value={searchQuery}
      onChange={onChange}
      placeholder="Search"
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
        sx: { fontSize: 14 },
      }}
      InputLabelProps={{
        sx: { fontSize: 14 },
      }}
    />
  );
};

export default CountryInput;
