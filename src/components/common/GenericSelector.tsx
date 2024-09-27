import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface Option {
  value: string;
  label: string;
}

interface GenericSelectorProps {
  label: string;
  value: string;
  options: Option[];
  onChange: (event: SelectChangeEvent<string>) => void;
  fullWidth?: boolean;
  size?: "small" | "medium";
}

const GenericSelector: React.FC<GenericSelectorProps> = ({
  label,
  value,
  options,
  onChange,
  fullWidth = true,
  size = "medium",
}) => (
  <Box>
    <FormControl fullWidth={fullWidth} size={size} sx={{ minWidth: 180 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label={label}
        sx={{ textAlign: "left" }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Box>
);

export default GenericSelector;
