import { Box, Typography } from "@mui/material";
import CollapsableText from "./CollapsableText";

interface Props {
  description: string;
}

const DefaultDescription = ({ description }: Props) => {
  return (
    <Box mt={2} mb={4}>
      <Typography variant="h6" color={"textSecondary"} fontWeight={"bold"}>
        Overview
      </Typography>
      <CollapsableText description={description} />
    </Box>
  );
};

export default DefaultDescription;
