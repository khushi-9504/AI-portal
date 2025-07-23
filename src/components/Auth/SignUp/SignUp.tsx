import React, { useState } from "react";
import {
  TextField,
  Button,
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
} from "../../../types/Auth/authTypes";
import { FormContainer, StyledForm } from "./SignUpStyles";
import WrappedTypography from "../../Wrappers/WrappedTypography";
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
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "First name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="First Name"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          )}
        />

        {/* Last Name */}
        <Controller
          name="lastName"
          control={control}
          rules={{ required: "Last name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Last Name"
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/, message: "Invalid email format" },
          }}
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

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          rules={{ required: "Phone number is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone"
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
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

        {/* Confirm Password */}
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Confirm Password"
              type="password"
              fullWidth
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          )}
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
        <Controller
          name="manager"
          control={control}
          rules={{ required: "Reporting Manager is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Reporting Manager"
              fullWidth
              error={!!errors.manager}
              helperText={errors.manager?.message}
            />
          )}
        />

        {/* Role */}
        <Controller
          name="role"
          control={control}
          rules={{ required: "Role is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Role"
              fullWidth
              error={!!errors.role}
              helperText={errors.role?.message}
            />
          )}
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
            />
          )}
        />

        {/* State */}
        <Controller
          name="state"
          control={control}
          rules={{ required: "State is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="State"
              fullWidth
              error={!!errors.state}
              helperText={errors.state?.message}
            />
          )}
        />

        {/* Country */}
        <Controller
          name="country"
          control={control}
          rules={{ required: "Country is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Country"
              fullWidth
              error={!!errors.country}
              helperText={errors.country?.message}
            />
          )}
        />

        {/* Postal Code */}
        <Controller
          name="postalCode"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Postal Code" fullWidth />
          )}
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
