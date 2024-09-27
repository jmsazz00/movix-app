import { Box, Modal, IconButton } from "@mui/material";
import useModalStore from "../../store/ModalStore";
import CloseIcon from "@mui/icons-material/Close";

const TeamJerseyModal = () => {
  const { isOpen, selectedJersey, closeModal } = useModalStore();

  if (!selectedJersey) return null;

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the modal
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxWidth: "80vw",
          maxHeight: "80vh",
          width: { xs: "80vw", sm: "70vw", md: "50vw" }, // dynamic width based on screen size
          height: { xs: "70vh", sm: "80vh", md: "80vh" }, // dynamic height based on screen size
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden", 
        }}
      >
        <IconButton
          onClick={closeModal}
          sx={{ position: "absolute", top: 16, right: 16 }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          component="img"
          src={selectedJersey}
          alt="Jersey"
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            cursor: "zoom-in",
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "scale(1.025)",
            },
          }}
        />
      </Box>
    </Modal>
  );
};

export default TeamJerseyModal;
