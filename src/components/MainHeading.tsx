import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { ElementType } from "react";

interface Props {
  title: string;
  Icon: ElementType;
}

const MainHeading = ({ title, Icon }: Props) => {
  const theme = useTheme();
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
      <Icon
        style={{
          fontSize: 64,
          color: theme.palette.mode === "dark" ? "#ffa726" : "#ff9800",
          marginRight: 5,
        }}
      ></Icon>
      <Typography
        variant="h3"
        style={{
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default MainHeading;
