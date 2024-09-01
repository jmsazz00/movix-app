import { Box, Divider, Grid } from "@mui/material";

interface DetailLayoutProps {
  leftContent: JSX.Element;
  rightContent: JSX.Element;
}

const DetailLayout = ({
  leftContent,
  rightContent,
}: DetailLayoutProps) => {

  return (
    <Box p={3.5}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}>
          {leftContent}
        </Grid>

        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Divider orientation="vertical" flexItem sx={{ mr: 4 }} />
        </Grid>

        <Grid item xs={12} sm={7} md={8}>
          {rightContent}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailLayout;
