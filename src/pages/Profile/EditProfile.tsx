import React from "react";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from "../../redux/features/authSlice";
import type { RootState } from "../../redux/store";
import { formBox, twoColumnGrid, buttonsContainer } from "./EditProfileStyle";
import type { editProfileFormData } from "../../types/profile/editProfileTypes";
import WrappedTypography from "../../components/wrappers/WrappedTypography";
import WrappedTextField from "../../components/wrappers/WrappedTextField";

const EditProfile: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.signUpData);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<editProfileFormData>({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      phone: user?.phone || "",
      email: user?.email || "",
      bio: user?.bio || "",
      country: user?.country || "",
      state: user?.state || "",
      postalCode: user?.postalCode || "",
      joiningDate: user?.joiningDate || "",
    },
  });

  const onSubmit = async (data: editProfileFormData) => {
    try {
      dispatch(updateUserProfile(data));
      navigate("/profile");
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  const fields: {
    name: keyof editProfileFormData;
    label: string;
    type?: string;
  }[] = [
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "phone", label: "Phone" },
    { name: "bio", label: "Bio" },
    { name: "joiningDate", label: "Date of Joining", type: "date" },
    { name: "country", label: "Country" },
    { name: "state", label: "City/State" },
    { name: "postalCode", label: "Zip Code" },
  ];

  return (
    <Box sx={formBox}>
      <WrappedTypography variant="h6" mb={3} fontWeight="bold">
        Edit Profile Information
      </WrappedTypography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={twoColumnGrid}>
          {fields.map(({ name, label, type }) => (
            <WrappedTextField
              key={name}
              name={name}
              control={control}
              label={label}
              type={type}
              errors={errors}
              variant="standard"
              InputLabelProps={type === "date" ? { shrink: true } : undefined}
            />
          ))}
        </Box>

        <Box sx={buttonsContainer}>
          <Button
            variant="outlined"
            onClick={() => navigate("/profile")}
            sx={{ borderRadius: "20px", textTransform: "capitalize", mr: 2 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{ borderRadius: "20px", textTransform: "capitalize" }}
          >
            Confirm
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditProfile;
