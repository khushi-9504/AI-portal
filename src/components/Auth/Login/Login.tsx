import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Link,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { StyledContainer, StyledForm } from "./LoginStyles";
import type { LoginFormData } from "../../../types/Auth/authTypes";
import WrappedTypography from "../../Wrappers/WrappedTypography";
import type { RootState } from "../../../redux/store";
import { loginUser } from "../../../redux/features/authSlice";

const Login: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUpData = useSelector((state: RootState) => state.auth.signUpData);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleToastClose = () => setToast({ ...toast, open: false });

  const onSubmit = (data: LoginFormData) => {
    if (
      signUpData &&
      data.email === signUpData.email &&
      data.password === signUpData.password
    ) {
      dispatch(loginUser());
      setToast({
        open: true,
        message: "Login successful!",
        severity: "success",
      });

      setTimeout(() => navigate("/profile"), 1500);
    } else {
      setToast({
        open: true,
        message: "Invalid email or password",
        severity: "error",
      });
    }
  };

  return (
    <StyledContainer>
      <WrappedTypography
        variant={isMobile ? "h5" : "h4"}
        align="center"
        gutterBottom
      >
        Login
      </WrappedTypography>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              type="email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />

        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>

        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={isMobile ? "column" : "row"}
          gap={1}
          mt={2}
        >
          <Link href="/forgot-password" underline="hover">
            Forgot Password?
          </Link>
          <Link href="/signup" underline="hover">
            Signup
          </Link>
        </Box>
      </StyledForm>

      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={handleToastClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleToastClose}
          severity={toast.severity as any}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
};

export default Login;
