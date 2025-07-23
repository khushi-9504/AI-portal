import { styled } from "@mui/system";
import { Box, Paper } from "@mui/material";

export const PageContainer = styled(Box)(({ theme }) => ({
  padding: "2.5rem",
  backgroundColor: "#e0e0e0",
  borderTopLeftRadius: "35px",
  [theme.breakpoints.down("sm")]: {
    padding: "1.2rem",
    borderTopLeftRadius: "20px",
  },
}));

export const InnerBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "30px",
  width: "100%",
  padding: "2rem",
  marginTop: "2rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
    borderRadius: "20px",
  },
}));

export const HeaderSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1.5rem",
  flexWrap: "wrap",
  gap: "1rem",
}));

export const SearchWrapper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "component",
})(({ theme }) => ({
  padding: "4px 12px",
  display: "flex",
  alignItems: "center",
  width: 300,
  borderRadius: "50px",
  border: "1px solid #ccc",
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  border: "2px solid #e0e0e0",
  borderRadius: "15px",
  padding: "2rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
  },
}));
