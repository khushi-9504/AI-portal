import { styled } from "@mui/system";
import { Box, Paper, Avatar, Button } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  padding: "2.5rem",
  backgroundColor: "#f5f6fa",
  borderTopLeftRadius: "20px",
  margin: 0,
  [theme.breakpoints.down("sm")]: {
    padding: "1.2rem",
    borderTopLeftRadius: "16px",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "0.8rem",
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "20px",
  width: "100%",
  padding: "2rem",
  marginTop: "1.5rem",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
    borderRadius: "16px",
  },
}));

export const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  border: "1px solid #ddd",
  borderRadius: "12px",
  marginTop: "1.5rem",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export const ProfileInfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const StyledAvatar = styled(Avatar)({
  width: 64,
  height: 64,
});

export const EditBtn = styled(Button)(({ theme }) => ({
  borderRadius: "20px",
  textTransform: "capitalize",
  alignSelf: "flex-end",
  border: "1px solid #1976d2",
  color: "#1976d2",
  padding: "6px 16px",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#e3f2fd",
    borderColor: "#1976d2",
  },
  [theme.breakpoints.up("sm")]: {
    alignSelf: "auto",
  },
}));

export const SectionPaper = styled(Paper)(({ theme }) => ({
  padding: "1.5rem",
  marginTop: "2rem",
  border: "1px solid #ddd",
  borderRadius: "12px",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
  },
}));

export const GridBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },
}));
