import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

const Scrollbar = forwardRef((props, ref) => {
  const { children, ...other } = props;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    return (
      <Box ref={ref} sx={{ overflowX: "auto" }}>
        {children}
      </Box>
    );
  }

  return (
    <PerfectScrollbar ref={ref} {...other}>
      {children}
    </PerfectScrollbar>
  );
});

Scrollbar.propTypes = {
  children: PropTypes.node,
};

Scrollbar.defaultProps = {
  children: null,
};

export default Scrollbar;
