import { Box, Divider, List } from "@mui/material";
import DetailHeading from "./DetailHeading";

interface TimeLineListProps {
  title: string;
  children: React.ReactNode;
}

const TimeLineList = ({ title, children }: TimeLineListProps) => (
  <Box mt={4}>
    <DetailHeading title={title} />
    <Divider />
    <List sx={{ position: "relative", py: 0 }}>{children}</List>
  </Box>
);

export default TimeLineList;
