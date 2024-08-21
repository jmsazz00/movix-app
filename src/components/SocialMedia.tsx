import { Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

interface SocialMediaProps {
  facebook: string;
  twitter: string;
  instagram: string;
}

const SocialMedia = ({
  facebook,
  twitter,
  instagram,
}: SocialMediaProps) => (
  <Box mt={2}>
    {facebook && (
      <IconButton
        color="primary"
        href={"https://" + facebook}
        target="_blank"
        aria-label="Facebook"
      >
        <Facebook />
      </IconButton>
    )}
    {twitter && (
      <IconButton
        color="primary"
        href={"https://" + twitter}
        target="_blank"
        aria-label="Twitter"
      >
        <Twitter />
      </IconButton>
    )}
    {instagram && (
      <IconButton
        color="primary"
        href={"https://" + instagram}
        target="_blank"
        aria-label="Instagram"
      >
        <Instagram />
      </IconButton>
    )}
  </Box>
);

export default SocialMedia;
