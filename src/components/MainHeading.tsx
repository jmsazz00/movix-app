import { Box, Typography } from "@mui/material";
import { ElementType } from "react";

interface Props {
  title: string;
  Icon: ElementType;
}

const MainHeading = ({ title, Icon }: Props) => {
  const styles = {
    fontSize: 64,
    color: "#ffc107",
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      padding={2}
      borderRadius={1}
      marginBottom={2}
    >
      <Icon style={styles}></Icon>
      <Typography
        variant="h3"
        style={{
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "1px",
          margin: "0 5px",
        }}
      >
        {title}
      </Typography>
      <Icon style={styles}></Icon>
    </Box>
  );
};

export default MainHeading;
