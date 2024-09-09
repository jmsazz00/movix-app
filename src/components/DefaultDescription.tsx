import { Box } from "@mui/material";
import CollapsableText from "./CollapsableText";
import DetailHeading from "./DetailHeading";

interface Props {
  description: string;
}

const DefaultDescription = ({ description }: Props) => {
  return (
    <Box mt={2} mb={4}>
      <DetailHeading title={"Overview"} />
      <CollapsableText description={description} />
    </Box>
  );
};

export default DefaultDescription;
