import { Card, Typography } from "@mui/material";
import Detail from "../entities/Detail";

interface Props {
  detail: Detail;
}

const DetailCard = ({ detail }: Props) => (
  <Card
    sx={{
      backdropFilter: "blur(10px)",
      backgroundColor: (theme) =>
        theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(255, 255, 255, 0.6)",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      borderRadius: "12px",
      borderLeft: "4px solid",
      borderLeftColor: (theme) =>
        theme.palette.mode === "dark"
          ? theme.palette.primary.light
          : theme.palette.primary.main,
      padding: "16px",
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        mb: 1,
        color: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.common.white
            : theme.palette.text.primary,
      }}
    >
      {detail.label}
    </Typography>
    <Typography variant="body1">
      {detail.value && detail.value !== "0" ? detail.value : "-"}
    </Typography>
  </Card>
);

export default DetailCard;
