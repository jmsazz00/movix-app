import StarBorderPurple500TwoToneIcon from "@mui/icons-material/StarBorderPurple500TwoTone";
import { Box, Divider, Typography } from "@mui/material";

interface Props {
  title: string;
}

const MainHeading = ({ title }: Props) => {
  const styles = {
    fontSize: { xs: 32, md: 64 },
    color: "#ffc107",
  };

  return (
    <Box mb={{ xs: 1, md: 0.5 }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        padding={1}
        borderRadius={1}
      >
        <StarBorderPurple500TwoToneIcon sx={styles} />
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            margin: "0 5px",
            textAlign: "center",
            fontSize: { xs: "1.75rem", md: "3rem" },
          }}
        >
          {title}
        </Typography>
        <StarBorderPurple500TwoToneIcon sx={styles} />
      </Box>
      <Divider
        sx={{
          width: { xs: "120px", md: "175px" },
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
