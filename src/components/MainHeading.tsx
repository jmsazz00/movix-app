import { Box, Divider, Typography } from "@mui/material";
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
    <Box marginBottom={4}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        padding={1}
        borderRadius={1}
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
      <Divider
        sx={{
          width: "175px",
          borderBottomWidth: 3,
          borderColor: "#ffc107",
          margin: "0 auto",
          borderRadius: "5px",
        }}
      />
    </Box>
  );
};

export default MainHeading;
