import { Box } from "@mui/material";
import NProgress from "nprogress";
import React, { useEffect } from "react";

const LoadingScreen = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100%",
        backgroundColor: "background.paper",
      }}
    />
  );
};

export default LoadingScreen;
