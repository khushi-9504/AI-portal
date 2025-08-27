import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import sidebarStyles from "./SidebarStyle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import { useEffect } from "react";
import { toggleSidebar } from "../../redux/features/layoutSlice";
import logo from "../../assets/images/logo.webp";

const navItems = [
  { text: "Profile", icon: <DashboardIcon />, path: "/profile" },
  { text: "Employees", icon: <GroupIcon />, path: "/employees" },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector(
    (state: RootState) => state.layout.isSidebarCollapsed
  );
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && !isCollapsed) {
        dispatch(toggleSidebar());
      } else if (window.innerWidth >= 768 && isCollapsed) {
        dispatch(toggleSidebar());
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, isCollapsed]);

  return (
    <Box sx={sidebarStyles.sidebarWrapper(isCollapsed)}>
      <Box
        sx={{
          display: isMobile ? "none" : "flex",
          justifyContent: isCollapsed ? "center" : "flex-start",
          alignItems: "center",
          height: 64,
          px: 3,
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            height: 40,
            width: isCollapsed ? 40 : "auto",
            transition: "width 0.3s ease",
          }}
        />
      </Box>

      <List sx={sidebarStyles.navList}>
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.text}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#1976d2" : "#333",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            })}
          >
            {({ isActive }) => (
              <ListItem disablePadding sx={sidebarStyles.navItem}>
                <ListItemButton sx={sidebarStyles.navItemButton(isCollapsed)}>
                  <ListItemIcon
                    sx={{
                      ...sidebarStyles.navItemIcon(isCollapsed),
                      color: isActive ? "#1976d2" : "inherit",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {!isCollapsed && (
                    <ListItemText primary={item.text} sx={{ opacity: 1 }} />
                  )}
                </ListItemButton>
              </ListItem>
            )}
          </NavLink>
        ))}
      </List>

      <Box sx={sidebarStyles.logoutContainer}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate("/login")}
            sx={sidebarStyles.logoutButton(isCollapsed)}
          >
            {!isCollapsed && <ListItemText primary="Log Out" />}
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );
};

export default Sidebar;
