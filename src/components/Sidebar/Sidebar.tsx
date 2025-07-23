import {
  Box,
  Button,
  MenuItem,
  MenuList,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Logo } from "../../assets";
import {
  sidebarContainer,
  logoBox,
  menuList,
  menuItem,
  menuButton,
  logoutContainer,
  logoutButton,
} from "./SidebarStyle";
import HomeIcon from "@mui/icons-material/Home";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GroupsIcon from "@mui/icons-material/Groups";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery("(max-width:1020px)");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menuItems = [
    { label: "Dashboard", icon: <HomeIcon />, path: "/" },
    { label: "Profile", icon: <PersonRoundedIcon />, path: "/profile" },
    { label: "Leaves", icon: <FlightTakeoffRoundedIcon />, path: "/leaves" },
    {
      label: "Holidays",
      icon: <CalendarMonthRoundedIcon />,
      path: "/holidays",
    },
    { label: "Employees", icon: <GroupsIcon />, path: "/employees" },
    { label: "Policies", icon: <StickyNote2Icon />, path: "/policies" },
    { label: "AI Ideas", icon: <LightbulbIcon />, path: "/ai-ideas" },
  ];

  return (
    <Box
      width={isMobile ? "4rem" : isMedium ? "10rem" : "17%"}
      minWidth={isMobile ? "4rem" : isMedium ? "10rem" : "17%"}
      sx={sidebarContainer}
    >
      {/* Top: Logo */}
      <Box sx={logoBox(isMobile)}>
        <img
          src={Logo}
          alt="Logo"
          width={isMobile ? "40px" : isMedium ? "60px" : "100%"}
          style={{
            maxWidth: isMobile ? "40px" : isMedium ? "60px" : "150px",
            height: "auto",
          }}
        />
      </Box>

      {/* Middle: Menu + Logout */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Menu List */}
        <MenuList sx={menuList(isMobile, isMedium)}>
          {menuItems.map(({ label, icon, path }) => (
            <MenuItem
              key={label}
              onClick={() => navigate(path)}
              sx={menuItem(isMobile)}
            >
              <Tooltip title={isMobile ? label : ""} placement="right">
                <Button startIcon={icon} sx={menuButton(isMobile, isMedium)}>
                  {!isMobile && label}
                </Button>
              </Tooltip>
            </MenuItem>
          ))}
        </MenuList>

        {/* Logout Button */}
        <Box sx={logoutContainer}>
          <Button
            variant="contained"
            startIcon={!isMobile && <LogoutIcon />}
            sx={logoutButton(isMobile)}
            onClick={() => {
              dispatch(logoutUser());
              navigate("/login");
            }}
          >
            {isMobile ? <LogoutIcon /> : "Log out"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
