// const sidebarStyles = {
//   sidebar: {
//     width: "250px",
//     bgcolor: "white",
//     px: 2,
//     py: 3,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//   },
//   navList: {
//     flexGrow: 1,
//     display: "flex",
//     flexDirection: "column",
//     gap: 1,
//     mt: 2,
//   },
//   listItem: {
//     borderRadius: "10px",
//     "&.Mui-selected": {
//       bgcolor: "#E3F2FD",
//       color: "#1E88E5",
//     },
//     "&:hover": {
//       bgcolor: "#f0f0f0",
//     },
//   },
//   logoutWrapper: {
//     mb: "2.5em",
//     display: "flex",
//     justifyContent: "center",
//   },
// };

// export default sidebarStyles;

const sidebarStyles = {
  sidebarWrapper: (isCollapsed: boolean) => ({
    width: isCollapsed ? "80px" : "240px",
    height: "100vh",
    backgroundColor: "#f5f7fa",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    left: 0,
    transition: "width 0.3s ease",
    borderRight: "1px solid #ddd",
  }),
  navList: {
    paddingTop: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1em",
  },
  navItem: {
    width: "90%",
    borderRadius: "10px",
    padding: "0.8em",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    "&:hover": {
      backgroundColor: "#e3e8ef",
    },
  },
  logoutContainer: {
    marginBottom: "2.5em",
    display: "flex",
    justifyContent: "center",
  },
};

export default sidebarStyles;
