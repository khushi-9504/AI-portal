const sidebarStyles = {
  sidebarWrapper: (isCollapsed: boolean) => ({
    width: isCollapsed ? "80px" : "240px",
    minHeight: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "width 0.3s ease",
    zIndex: 1200,
    "@media (max-width: 768px)": {
      width: isCollapsed ? "60px" : "200px",
    },
  }),

  navList: {
    pt: "5rem",
    display: "flex",
    flexDirection: "column",
    gap: 1,
    alignItems: "flex-start",
    width: "100%",
    px: 2,
  },

  navItem: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },

  navItemButton: (isCollapsed: boolean) => ({
    justifyContent: isCollapsed ? "center" : "flex-start",
    px: isCollapsed ? 1 : 2,
  }),

  navItemIcon: (isCollapsed: boolean) => ({
    minWidth: 0,
    mr: isCollapsed ? 0 : 4,
    justifyContent: "center",
  }),

  logoutContainer: {
    mt: "auto",
    mb: "2em",
    display: "flex",
    justifyContent: "center",
  },

  logoutButton: (isCollapsed: boolean) => ({
    border: "none",
    display: "flex",
    backgroundColor: "#007bff",
    padding: "0.5em 1.2em",
    justifyContent: "center",
    color: "#fff",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  }),
};

export default sidebarStyles;
