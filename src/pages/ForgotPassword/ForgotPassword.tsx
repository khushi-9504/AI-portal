import React from "react";
import { Alert, Box, Button, Snackbar } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../redux/features/authSlice";
import type { RootState } from "../../redux/store";
import { formContainer, formButton } from "./ForgotPasswordStyle";
import type { ForgotPasswordForm } from "../../types/auth/authTypes";
import { useNavigate } from "react-router-dom";
import WrappedTypography from "../../components/wrappers/WrappedTypography";
import IWrappedTextField from "../../components/wrappers/WrappedTextField";

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
      <WrappedTypography variant="h5" mb={2} fontWeight="bold">
        Forgot Password
      </WrappedTypography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <IWrappedTextField
          name="email"
          control={control}
          label="Email"
          type="email"
          errors={errors}
          variant="outlined"
        />

        {/* New Password */}
        <IWrappedTextField
          name="newPassword"
          control={control}
          label="New Password"
          type="password"
          errors={errors}
          variant="outlined"
        />

        {/* Confirm Password */}
        <IWrappedTextField
          name="confirmPassword"
          control={control}
          label="Confirm Password"
          type="password"
          errors={errors}
          variant="outlined"
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
