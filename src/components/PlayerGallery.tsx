import { Box, ImageList, ImageListItem, Typography } from "@mui/material";

interface PlayerGalleryProps {
  images: string[];
}

const PlayerGallery = ({ images }: PlayerGalleryProps) => {
  const validImages = images.filter((img) => img);

  if (validImages.length === 0) return null;

  return (
    <Box mt={4}>
      <Typography variant="h6" color={"textSecondary"} fontWeight={"bold"} >
        Gallery
      </Typography>
      <ImageList cols={2} gap={8} sx={{ width: '100%', height: 'auto' }}>
        {validImages.map((image, index) => (
          <ImageListItem key={index}>
            <img
              src={`${image}/preview`} 
              alt={`Player image ${index + 1}`}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default PlayerGallery;
