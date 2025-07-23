import type { SxProps, Theme } from "@mui/material";

export const sidebarContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  justifyContent: "flex-start",
  backgroundColor: "#fff",
  borderRight: "1px solid #eee",
};

export const logoBox = (isMobile: boolean): SxProps<Theme> => ({
  p: 2,
  display: "flex",
  justifyContent: isMobile ? "center" : "flex-start",
});

export const menuList: (
  isMobile: boolean,
  isMedium: boolean
) => SxProps<Theme> = (isMobile, isMedium) => ({
  display: "flex",
  flexDirection: "column",
  gap: 1,
  px: isMobile ? 0 : isMedium ? 1 : 2,
});

export const menuItem: (isMobile: boolean) => SxProps<Theme> = (isMobile) => ({
  display: "flex",
  justifyContent: isMobile ? "center" : "flex-start",
  px: isMobile ? 0 : 1,
});

export const menuButton: (
  isMobile: boolean,
  isMedium: boolean
) => SxProps<Theme> = (isMobile, isMedium) => ({
  minWidth: "100%",
  justifyContent: isMobile ? "center" : "flex-start",
  textTransform: "capitalize",
  color: "#333",
  fontSize: isMobile ? "0.75rem" : isMedium ? "0.85rem" : "1rem",
  padding: isMobile || isMedium ? "6px 8px" : "8px 16px",
  whiteSpace: "normal",
  "&:hover": { backgroundColor: "transparent" },
});

export const logoutContainer: SxProps<Theme> = {
  mb: "2.5rem",
  textAlign: "center",
};

export const logoutButton: (isMobile: boolean) => SxProps<Theme> = (
  isMobile
) => ({
  minWidth: isMobile ? "auto" : "10rem",
  borderRadius: "15px",
  px: isMobile ? 1 : 4,
  py: 1,
  textTransform: "capitalize",
  fontSize: isMobile ? "1.2rem" : "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  ml: isMobile ? "1rem" : "2rem",
});
