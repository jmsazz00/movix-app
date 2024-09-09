import { Typography } from "@mui/material";

interface Props {
  title: string;
}
const DetailHeading = ({ title }: Props) => {
  return (
    <Typography fontWeight={"bold"} variant="h6" color={"textSecondary"}>
      {title}
    </Typography>
  );
};

export default DetailHeading;
