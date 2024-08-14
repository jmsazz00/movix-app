import StarBorderPurple500TwoToneIcon from "@mui/icons-material/StarBorderPurple500TwoTone";
import { Box, Divider, Typography } from "@mui/material";

interface Props {
  title: string;
}

const MainHeading = ({ title }: Props) => {
  const styles = {
    fontSize: 64,
    color: "#ffc107",
  };

  return (
    <Box mb={{ xs: 2, md: 0.5 }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        padding={1}
        borderRadius={1}
      >
        <StarBorderPurple500TwoToneIcon style={styles} />
        <Typography
          variant="h3"
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            margin: "0 5px",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <StarBorderPurple500TwoToneIcon style={styles} />
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
