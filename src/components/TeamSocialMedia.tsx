import { Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

interface TeamSocialMediaProps {
  facebook: string;
  twitter: string;
  instagram: string;
}

const TeamSocialMedia = ({
  facebook,
  twitter,
  instagram,
}: TeamSocialMediaProps) => (
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

export default TeamSocialMedia;
