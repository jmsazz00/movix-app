import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  placeholder?: string;
  maxWidth?: string | number;
}

const Input = ({
  value,
  onChange,
  onSubmit,
  placeholder = "Search...",
  maxWidth = "400px",
}: InputProps) => {
  const theme = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: maxWidth,
        display: "flex",
        alignItems: "center",
        mx: 2,
        flexGrow: 1,
      }}
    >
      <TextField
        fullWidth
        size="small"
        placeholder={placeholder}
        variant="outlined"
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#e9e9e9",
            px: 1,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.mode === "dark" ? "#555" : "#b0b0b0",
          },
          "& .MuiInputBase-placeholder": {
            color:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.5)"
                : "#757575",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Input;
