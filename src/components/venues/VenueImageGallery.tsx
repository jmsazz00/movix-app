import { Box } from "@mui/material";

interface Props {
  imagesSrc: string[];
}

const VenueImageGallery = ({ imagesSrc }: Props) => {
  const validImages = imagesSrc.filter(Boolean);

  if (validImages.length === 0) return null;

  return (
    <Box
      sx={{
        padding: "24px",
        display: "flex",
        justifyContent: "space-around",
        gap: "16px",
        flexDirection: { xs: "column", sm: "row" },
        mb: 3,
      }}
    >
      {validImages.map((image, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: "100%", sm: "30%" },
            height: "200px",
            backgroundImage: `url(${image}/small)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            position: "relative",
            transition: {
              xs: "none",
              sm: "transform 0.3s ease-in-out",
            },
            "&:hover": {
              transform: { xs: "none", sm: "scale(1.05)" },
              "&::after": {
                opacity: { xs: 0, sm: 0 },
              },
            },
            "&:not(:hover)": {
              transition: {
                xs: "none",
                sm: "transform 0.3s ease-in-out",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundColor: {
                xs: "transparent",
                sm: "rgba(0, 0, 0, 0.3)",
              },
              transition: {
                xs: "none",
                sm: "opacity 0.3s ease-in-out",
              },
            },
          }}
        />
      ))}
    </Box>
  );
};

export default VenueImageGallery;
