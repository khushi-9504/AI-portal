import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar, TopBar } from "../components";

const MainLayout = () => {
  return (
    <Box display={"flex"}>
      <Sidebar />
      <Box display={"flex"} flexDirection={"column"} width={"100%"}>
        <TopBar />
        <Box component="main">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
