// import {
//   Box,
//   Button,
//   MenuItem,
//   MenuList,
//   Tooltip,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { Logo } from "../../assets/images";
// import {
//   sidebarContainer,
//   logoBox,
//   menuList,
//   menuItem,
//   menuButton,
//   logoutContainer,
//   logoutButton,
// } from "./SidebarStyle";
// import HomeIcon from "@mui/icons-material/Home";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
// import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
// import GroupsIcon from "@mui/icons-material/Groups";
// import StickyNote2Icon from "@mui/icons-material/StickyNote2";
// import LightbulbIcon from "@mui/icons-material/Lightbulb";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { useNavigate, useLocation } from "react-router-dom";
// import { logoutUser } from "../../redux/features/authSlice";
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState } from "../../redux/store";

// const Sidebar = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const isMedium = useMediaQuery("(max-width:1020px)");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isCollapsed = useSelector(
//     (state: RootState) => state.layout.isSidebarCollapsed
//   );

//   const menuItems = [
//     { label: "Dashboard", icon: <HomeIcon />, path: "/" },
//     { label: "Profile", icon: <PersonRoundedIcon />, path: "/profile" },
//     { label: "Leaves", icon: <FlightTakeoffRoundedIcon />, path: "/leaves" },
//     {
//       label: "Holidays",
//       icon: <CalendarMonthRoundedIcon />,
//       path: "/holidays",
//     },
//     { label: "Employees", icon: <GroupsIcon />, path: "/employees" },
//     { label: "Policies", icon: <StickyNote2Icon />, path: "/policies" },
//     { label: "AI Ideas", icon: <LightbulbIcon />, path: "/ai-ideas" },
//   ];

//   return (
//     <Box
//       width={
//         isCollapsed ? "4rem" : isMobile ? "4rem" : isMedium ? "10rem" : "17%"
//       }
//       minWidth={
//         isCollapsed ? "4rem" : isMobile ? "4rem" : isMedium ? "10rem" : "17%"
//       }
//       sx={sidebarContainer}
//     >
//       {/* Top: Logo */}
//       <Box sx={logoBox(isCollapsed)}>
//         <img
//           src={Logo}
//           alt="Logo"
//           width={isCollapsed ? "40px" : isMedium ? "60px" : "100%"}
//           style={{
//             maxWidth: isCollapsed ? "40px" : isMedium ? "60px" : "150px",
//             height: "auto",
//           }}
//         />
//       </Box>

//       {/* Middle: Menu and Logout */}
//       <Box
//         sx={{
//           flex: 1,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           position: "relative",
//         }}
//       >
//         {/* Menu Items */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             mt: 2,
//           }}
//         >
//           <MenuList sx={menuList(isCollapsed)}>
//             {menuItems.map(({ label, icon, path }) => (
//               <MenuItem
//                 key={label}
//                 onClick={() => navigate(path)}
//                 sx={{
//                   ...menuItem(isCollapsed),
//                   color: location.pathname === path ? "blue" : "inherit",
//                 }}
//               >
//                 <Tooltip title={isCollapsed ? label : ""} placement="right">
//                   <Button startIcon={icon} sx={menuButton(isCollapsed)}>
//                     {!isCollapsed && label}
//                   </Button>
//                 </Tooltip>
//               </MenuItem>
//             ))}
//           </MenuList>
//         </Box>

//         {/* Logout */}
//         <Box sx={logoutContainer}>
//           <Button
//             variant="contained"
//             startIcon={!isCollapsed && <LogoutIcon />}
//             sx={logoutButton(isCollapsed)}
//             onClick={() => {
//               dispatch(logoutUser());
//               navigate("/login");
//             }}
//           >
//             {isCollapsed ? <LogoutIcon /> : "Log out"}
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Sidebar;

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/features/layoutSlice";
import type { RootState } from "../../redux/store";
import { NavLink, useNavigate } from "react-router-dom";
import sidebarStyles from "./SidebarStyle";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCollapsed = useSelector(
    (state: RootState) => state.layout.isSidebarCollapsed
  );
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleLogout = () => {
    console.log("Logout clicked");
    navigate("/login");
  };

  const navItems = [
    { text: "Profile", icon: <DashboardIcon />, path: "/profile" },
    { text: "Employees", icon: <GroupIcon />, path: "/employees" },
  ];

  return (
    <Box sx={sidebarStyles.sidebarWrapper(isCollapsed)}>
      <List sx={sidebarStyles.navList}>
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.text}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#1976d2" : "#333",
              width: "100%",
            })}
          >
            <ListItem button sx={sidebarStyles.navItem}>
              <ListItemIcon sx={{ minWidth: "40px", color: "inherit" }}>
                {item.icon}
              </ListItemIcon>
              {!isCollapsed && (
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ fontSize: 16 }}
                />
              )}
            </ListItem>
          </NavLink>
        ))}
      </List>

      <Box sx={sidebarStyles.logoutContainer}>
        <ListItem button onClick={handleLogout} sx={sidebarStyles.navItem}>
          <ListItemIcon sx={{ minWidth: "40px", color: "inherit" }}>
            <LogoutIcon />
          </ListItemIcon>
          {!isCollapsed && (
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{ fontSize: 16 }}
            />
          )}
        </ListItem>
      </Box>
    </Box>
  );
};

export default Sidebar;
