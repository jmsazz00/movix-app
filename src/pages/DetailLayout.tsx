import { Box, Divider, Grid } from "@mui/material";
import useResponsive from "../hooks/useResponsive";

interface DetailLayoutProps {
  leftContent: JSX.Element;
  rightContent: JSX.Element;
}

const DetailLayout = ({ leftContent, rightContent }: DetailLayoutProps) => {
  const { isMobile } = useResponsive();

  return (
    <Box p={{ xs: 1.75, md: 3.5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}>
          {leftContent}
        </Grid>

        <Grid
          item
          xs={12}
          md="auto"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Divider
            orientation={isMobile ? "horizontal" : "vertical"}
            flexItem
            sx={{
              width: isMobile ? "75%" : "auto",
              height: isMobile ? "auto" : "100%",
              mr: { md: 2 },
              mb: { xs: 0.8, md: 0 },
              bgcolor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.12)"
                  : "rgba(0, 0, 0, 0.1)",
              opacity: 0.75,
              borderRadius: 1,
              borderBottomWidth: isMobile ? 2 : 0,
              borderRightWidth: !isMobile ? 2 : 0,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={7} md={8}>
          {rightContent}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailLayout;
