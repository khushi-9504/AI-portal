import { styled } from "@mui/system";
import { Box, Paper, Avatar, Button } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  padding: "2.5rem",
  backgroundColor: "#e0e0e0",
  borderTopLeftRadius: "35px",
  [theme.breakpoints.down("sm")]: {
    padding: "1.2rem",
    borderTopLeftRadius: "20px",
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "30px",
  width: "100%",
  padding: "2rem",
  marginTop: "2rem",
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
  border: "2px solid #e0e0e0",
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
  [theme.breakpoints.up("sm")]: {
    alignSelf: "auto",
  },
}));

export const SectionPaper = styled(Paper)(({ theme }) => ({
  padding: "1.5rem",
  marginTop: "2rem",
  border: "2px solid #ddd",
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
