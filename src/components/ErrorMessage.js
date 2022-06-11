import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";

const ErrorMessage = ({ httpStatusCode }) => {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(httpStatusCode);

  return (
    <>
      <Helmet>
        <title>Error: Not Found | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "background.paper",
          display: "flex",
          minHeight: "100%",
          px: 3,
          py: "80px",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            align="center"
            color="textPrimary"
            variant={mobileDevice ? "h4" : "h1"}
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography
            align="center"
            color="textSecondary"
            sx={{ mt: 0.5 }}
            variant="subtitle2"
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 6,
            }}
          >
            <Box
              alt="Under development"
              component="img"
              src={`/static/error/error404_${theme.palette.mode}.svg`}
              sx={{
                height: "auto",
                maxWidth: "100%",
                width: 400,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 6,
            }}
          >
            <Button
              color="primary"
              component={RouterLink}
              to="/"
              variant="outlined"
            >
              Back to Home
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

ErrorMessage.propTypes = {
  httpStatusCode: PropTypes.number.isRequired,
};

export default ErrorMessage;
