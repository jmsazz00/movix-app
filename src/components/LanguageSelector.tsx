import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import LnOpts from "../entities/LanguageType";

interface LanguageSelectorProps {
  value: LnOpts;
  onChange: (event: SelectChangeEvent<LnOpts>) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  value,
  onChange,
}) => (
  <Box>
    <FormControl fullWidth>
      <InputLabel>Language</InputLabel>
      <Select value={value} onChange={onChange} label="Language">
        <MenuItem value="EN">English</MenuItem>
        <MenuItem value="ES">Spanish</MenuItem>
        <MenuItem value="FR">French</MenuItem>
      </Select>
    </FormControl>
  </Box>
);

export default LanguageSelector;
