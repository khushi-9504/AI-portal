import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import type { RootState } from "../redux/store";

const MainLayout = () => {
  const isCollapsed = useSelector(
    (state: RootState) => state.layout.isSidebarCollapsed
  );

  return (
    <Box display="flex" height="100vh">
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <Box
          component="main"
          sx={{
            p: 1,
            margin: 0,
            ml: isCollapsed ? "80px" : "240px",
            transition: "margin-left 0.3s ease",
            backgroundColor: "transparent",
            borderRadius: "0",
            minHeight: "calc(100vh - 48px)",
            boxShadow: "none",
            overflowX: "hidden",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
