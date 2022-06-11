import InputField from "../components/InputFields/InputField";
import PasswordField from "../components/InputFields/PasswordField";
import useNotify from "../hooks/useNotify";
import authSelector from "../store/selectors/authSelector";
import { authAsyncActions } from "../store/slices/authSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, Typography } from "@mui/material";
import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";

const Copyright = () => (
  <Typography variant="body2" color="text.secondary" align="center">
    {"Copyright © "}
    <Link color="inherit" to="">
      Your Website
    </Link>{" "}
    {new Date().getFullYear()}.
  </Typography>
);

const schema = yup.object({
  email: yup
    .string()
    .email("Vui lòng nhật email đúng định dạng")
    .required("Email không được để trống!"),
  password: yup
    .string()
    .min(6, "Mật khẩu phải chứa ít nhất 6 ký tự!")
    .max(32, "Mật khẩu chỉ chứa tối đa 32 ký tự")
    .required("Mật khẩu không được để trống!"),
});

const LoginForm = () => {
  const { success, error } = useNotify();

  const dispatch = useDispatch();
  const isLoading = useSelector(authSelector.selectIsloading);

  const { reset, control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const actionResult = await dispatch(
        authAsyncActions.login({
          data,
        })
      );
      const { message } = await unwrapResult(actionResult);
      success(message);
      reset();
    } catch ({ message }) {
      error(message);
    }
  };

  return (
    <Box
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ mt: 1 }}
    >
      <InputField control={control} name="email" fullWidth label="Email" />
      <PasswordField
        control={control}
        name="password"
        fullWidth
        label="Password"
      />
      <Button
        disabled={isLoading}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link to="" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link to="" variant="body2">
            Don&apos;t have an account? Sign Up
          </Link>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Box>
  );
};

export default LoginForm;
