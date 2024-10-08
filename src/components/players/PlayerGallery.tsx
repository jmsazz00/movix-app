import { Box, Divider, ImageList, ImageListItem } from "@mui/material";
import DetailHeading from "../common/DetailHeading";
import useResponsive from "../../hooks/useResponsive";

interface PlayerGalleryProps {
  images: string[];
}

const PlayerGallery = ({ images }: PlayerGalleryProps) => {
  const validImages = images.filter((img) => img);
  const { isMobile } = useResponsive();

  if (validImages.length === 0) return null;

  return (
    <Box mt={4}>
      <DetailHeading title={"Gallery"} />
      <Divider />
      <ImageList
        cols={isMobile ? 1 : 2}
        gap={16}
        sx={{ width: "100%", height: "auto" }}
      >
        {validImages.map((image, index) => (
          <ImageListItem
            key={index}
            sx={{
              overflow: "hidden",
              position: "relative",
              borderRadius: "8px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box
              component="img"
              src={`${image}/small`}
              alt={`Player image ${index + 1}`}
              sx={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
                transform: "scale(1)",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default PlayerGallery;
