import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Detail from "../../entities/Detail";

interface DetailsGridProps {
  data: Detail[];
}

const DetailsGrid = ({ data }: DetailsGridProps) => {
  const theme = useTheme();

  return (
    <Box my={3.5}>
      <Grid container spacing={0} sx={{ textAlign: "center" }}>
        {data.map((item, index) => (
          <Grid
            item
            xs={6}
            key={index}
            sx={{
              borderRight:
                index % 2 === 0 ? `1px solid ${theme.palette.divider}` : "none",
              borderBottom:
                index < data.length - 2
                  ? `1px solid ${theme.palette.divider}`
                  : "none",
              p: 2,
            }}
          >
            <Typography
              variant="subtitle1"
              color="textSecondary"
              fontWeight="bold"
            >
              {item.label}
            </Typography>
            {item.isLink ? (
              <Link
                to={item.linkPath || "#"}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ "&:hover": { textDecoration: "underline" } }}
                >
                  {item.value || "N/A"}
                </Typography>
              </Link>
            ) : (
              <Typography component={"div"} variant="body1" fontWeight="bold">
                {item.value || "N/A"}
              </Typography>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DetailsGrid;
