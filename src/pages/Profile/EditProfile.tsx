import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from "../../redux/features/authSlice";
import type { RootState } from "../../redux/store";
import { formBox, formButton, inputFieldBox } from "./EditProfileStyle";
import type { editProfileFormData } from "../../types/Profile/editProfileTypes";

const EditProfile: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.signUpData);

  const { control, handleSubmit } = useForm<editProfileFormData>({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      phone: user?.phone || "",
      email: user?.email || "",
      role: user?.role || "",
      country: user?.country || "",
      state: user?.state || "",
      postalCode: user?.postalCode || "",
      manager: user?.manager || "",
      joiningDate: user?.joiningDate || "",
      profilePic: user?.profilePic || "",
    },
  });

  const onSubmit = async (data: editProfileFormData) => {
    try {
      let imageUrl = user?.profilePic || "";

      if (data.profilePic instanceof FileList && data.profilePic.length > 0) {
        const formData = new FormData();
        formData.append("file", data.profilePic[0]);
        formData.append("upload_preset", "ai-portal");
        formData.append("folder", "user_profiles");

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/dzoi2kcv8/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const cloudinaryData = await res.json();
        imageUrl = cloudinaryData.secure_url;
      }

      dispatch(
        updateUserProfile({
          ...data,
          profilePic: imageUrl,
        })
      );

      navigate("/profile");
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  const fields: {
    name: keyof editProfileFormData;
    label: string;
    type?: string;
  }[] = [
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "phone", label: "Phone" },
    { name: "email", label: "Email" },
    { name: "role", label: "Role" },
    { name: "country", label: "Country" },
    { name: "state", label: "State" },
    { name: "postalCode", label: "Postal Code" },
    { name: "manager", label: "Reporting Manager" },
    { name: "joiningDate", label: "Date of Joining", type: "date" },
  ];

  return (
    <Box sx={formBox}>
      <Typography variant="h5" mb={3} fontWeight="bold">
        Edit Profile
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={inputFieldBox}>
          {fields.map(({ name, label, type }) => (
            <Controller
              key={name}
              name={name}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={label}
                  fullWidth
                  type={type || "text"}
                  sx={{ mb: 2 }}
                  InputLabelProps={
                    type === "date" ? { shrink: true } : undefined
                  }
                />
              )}
            />
          ))}

          {/* Profile Picture Upload */}
          <Controller
            name="profilePic"
            control={control}
            render={({ field }) => (
              <TextField
                type="file"
                inputProps={{ accept: "image/*" }}
                onChange={(e) => {
                  const fileInput = e.target as HTMLInputElement;
                  field.onChange(fileInput.files);
                }}
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
          />
        </Box>

        <Button variant="contained" type="submit" sx={formButton}>
          Save Changes
        </Button>
      </form>
    </Box>
  );
};

export default EditProfile;
