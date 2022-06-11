import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const Counter = ({ counter, setCounter }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Button
        variant="contained"
        onClick={() => setCounter((previousState) => previousState - 1)}
      >
        -
      </Button>
      <Typography mx={1} variant="h3">
        {counter}
      </Typography>
      <Button
        variant="contained"
        onClick={() => setCounter((previousState) => previousState + 1)}
      >
        +
      </Button>
    </Box>
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
};

export default Counter;
