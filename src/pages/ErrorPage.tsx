import { Alert, Box, Button, Typography } from "@mui/material";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box padding={3}>
      <Typography fontWeight={"bold"} component={"h1"} fontSize={30}>
        Oops :/
      </Typography>
      <Alert severity="error" sx={{ mx: 0, my: 1.5 }}>
        {isRouteErrorResponse(error)
          ? "This page doesn't exist"
          : "There was an unexpected  error"}
      </Alert>
      <Link to={"/"}>
        <Button variant="outlined">Go Back to HomePage</Button>
      </Link>
    </Box>
  );
};

export default ErrorPage;
