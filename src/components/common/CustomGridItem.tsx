import React from "react";
import Grid, { GridProps } from "@mui/material/Grid";
import Paper, { PaperProps } from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";

interface CustomGridItemProps {
  children: React.ReactNode;
  gridProps?: GridProps;
  paperProps?: PaperProps;
}

const CustomGridItem: React.FC<CustomGridItemProps> = ({
  children,
  gridProps,
  paperProps,
}) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={6} md={4} {...gridProps}>
      <Paper
        sx={{
          p: 2,
          minHeight: "400px",
          mx: { xs: 1, sm: 0 },
          bgcolor: theme.palette.mode === "dark" ? "#000000cc" : "#e3f2fd",
        }}
        {...paperProps}
      >
        {children}
      </Paper>
    </Grid>
  );
};

export default CustomGridItem;
