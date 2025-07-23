import type { SxProps, Theme } from "@mui/material";

export const formContainer: SxProps<Theme> = {
  maxWidth: 400,
  margin: "auto",
  marginTop: "100px",
  padding: 4,
  boxShadow: 3,
  borderRadius: 2,
  backgroundColor: "white",
};

export const formField: SxProps<Theme> = {
  marginBottom: 2,
};

export const formButton: SxProps<Theme> = {
  marginTop: 1,
  fontWeight: "bold",
};
