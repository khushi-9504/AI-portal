import React, { useState } from "react";
import {
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Snackbar,
  Alert,
  Link,
  Box,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { setSignUpData } from "../../../redux/features/authSlice";
import { addEmployee } from "../../../redux/features/employeeSlice";
import type {
  SignUpFormData,
  SignUpDataToStore,
} from "../../../types/auth/authTypes";
import { FormContainer, StyledForm } from "./SignUpStyles";
import WrappedTypography from "../../wrappers/WrappedTypography";
import IWrappedTextField from "../../wrappers/WrappedTextField";
import { Link as RouterLink, useNavigate } from "react-router-dom";

// Cloudinary upload helper
const uploadImageToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ai-portal");
  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dzoi2kcv8/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await response.json();
  return data.secure_url;
};

const SignUp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData & { confirmPassword: string }>();

  const [openToast, setOpenToast] = useState(false);
  const navigate = useNavigate();

  const handleToastClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenToast(false);
  };

  const password = watch("password");

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const profileImageFile = data.profilePic[0];
      const imageUrl = await uploadImageToCloudinary(profileImageFile);

      const fullDataWithImage: SignUpDataToStore = {
        ...data,
        profilePic: imageUrl,
      };

      dispatch(setSignUpData(fullDataWithImage));

      dispatch(
        addEmployee({
          employeeName: `${data.firstName} ${data.lastName}`,
          employeeJobTitle: data.role,
          employeeManager: data.manager,
        })
      );
      navigate("/login");
      setOpenToast(true);
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  return (
    <FormContainer>
      <WrappedTypography variant="h5" align="center" gutterBottom>
        Sign Up
      </WrappedTypography>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <IWrappedTextField
          name="firstName"
          control={control}
          label="First Name"
          errors={errors}
          variant="outlined"
        />

        {/* Last Name */}
        <IWrappedTextField
          name="lastName"
          control={control}
          label="Last Name"
          errors={errors}
          variant="outlined"
        />

        {/* Email */}
        <IWrappedTextField
          name="email"
          control={control}
          label="Email"
          type="email"
          errors={errors}
          variant="outlined"
        />

        {/* Phone */}
        <IWrappedTextField
          name="phone"
          control={control}
          label="Phone"
          errors={errors}
          variant="outlined"
        />

        {/* Password */}
        <IWrappedTextField
          name="password"
          control={control}
          label="Password"
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

        {/* Gender */}
        <Controller
          name="gender"
          control={control}
          rules={{ required: "Gender is required" }}
          render={({ field }) => (
            <RadioGroup row {...field}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          )}
        />

        {/* Reporting Manager */}
        <IWrappedTextField
          name="manager"
          control={control}
          label="Reporting Manager"
          errors={errors}
          variant="outlined"
        />

        {/* Role */}
        <IWrappedTextField
          name="role"
          control={control}
          label="Role"
          errors={errors}
          variant="outlined"
        />

        {/* Joining Date */}
        <Controller
          name="joiningDate"
          control={control}
          rules={{ required: "Joining Date is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Joining Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={!!errors.joiningDate}
              helperText={errors.joiningDate?.message}
              sx={{ mb: 2 }}
            />
          )}
        />

        {/* State */}
        <IWrappedTextField
          name="state"
          control={control}
          label="State"
          errors={errors}
          variant="outlined"
        />

        {/* Country */}
        <IWrappedTextField
          name="country"
          control={control}
          label="Country"
          errors={errors}
          variant="outlined"
        />

        {/* Postal Code */}
        <IWrappedTextField
          name="postalCode"
          control={control}
          label="Postal Code"
          errors={errors}
          variant="outlined"
        />

        {/* Profile Picture */}
        <Controller
          name="profilePic"
          control={control}
          rules={{ required: "Profile Picture is required" }}
          render={({ field }) => (
            <TextField
              type="file"
              fullWidth
              inputProps={{ accept: "image/*" }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files) {
                  field.onChange(e.target.files);
                }
              }}
              error={!!errors.profilePic}
              helperText={
                errors.profilePic ? "Profile picture is required" : ""
              }
              sx={{ mb: 2 }}
            />
          )}
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" fullWidth>
          Sign Up
        </Button>

        {/* Login Link */}
        <Box mt={2} textAlign="center">
          <Link component={RouterLink} to="/login" underline="hover">
            Already have an account? Login
          </Link>
        </Box>
      </StyledForm>

      {/* Snackbar Toast */}
      <Snackbar
        open={openToast}
        autoHideDuration={3000}
        onClose={handleToastClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleToastClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Signup successful!
        </Alert>
      </Snackbar>
    </FormContainer>
  );
};

export default SignUp;
