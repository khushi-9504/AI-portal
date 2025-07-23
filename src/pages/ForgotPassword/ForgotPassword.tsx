import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../../redux/features/authSlice";
import type { RootState } from "../../../redux/store";
import { formContainer, formField, formButton } from "./ForgotPasswordStyle";
import type { ForgotPasswordForm } from "../../../types/Auth/authTypes";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.signUpData);
  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<ForgotPasswordForm>();

  const [toastOpen, setToastOpen] = React.useState(false);
  const confirmPassword = watch("confirmPassword");
  const newPassword = watch("newPassword");
  const navigate = useNavigate();

  const onSubmit = (data: ForgotPasswordForm) => {
    if (data.email !== user?.email) {
      setError("email", { message: "Email does not match our records" });
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("confirmPassword", { message: "Passwords do not match" });
      return;
    }

    dispatch(updateUserProfile({ password: newPassword }));
    navigate("/login");
    setToastOpen(true);
  };

  return (
    <Box sx={formContainer}>
      <Typography variant="h5" mb={2} fontWeight="bold">
        Forgot Password
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
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
              sx={formField}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        {/* New Password */}
        <Controller
          name="newPassword"
          control={control}
          rules={{
            required: "New password is required",
            minLength: { value: 6, message: "Min 6 characters" },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="New Password"
              type="password"
              fullWidth
              sx={formField}
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message}
            />
          )}
        />

        {/* Confirm Password */}
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "Confirm your password",
            validate: (value) =>
              value === newPassword || "Passwords do not match",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Confirm Password"
              type="password"
              fullWidth
              sx={formField}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          )}
        />

        <Button type="submit" variant="contained" sx={formButton} fullWidth>
          Change Password
        </Button>
      </form>

      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Password updated successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ForgotPassword;
