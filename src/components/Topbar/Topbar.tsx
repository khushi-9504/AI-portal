// import React from "react";
// import { AppBar, Toolbar, Box, IconButton, Avatar } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { UserImage } from "../../assets/images";

// type TopbarProps = {
//   onMenuClick?: () => void;
// };

// const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         backgroundColor: "#fff",
//         color: "black",
//         boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
//       }}
//     >
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         {/* Left Menu Button (Mobile) */}
//         <IconButton
//           color="inherit"
//           edge="start"
//           onClick={onMenuClick}
//           sx={{ display: { md: "none" } }}
//         >
//           <MenuIcon />
//         </IconButton>

//         {/* Logo + Title Section */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             flexDirection: "column",
//             justifyContent: "center",
//             position: "absolute",
//             left: "50%",
//             transform: "translateX(-50%)",
//           }}
//         ></Box>

//         {/* Right Profile Section */}
//         <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
//           <Avatar alt="User" src={UserImage} sx={{ width: 36, height: 36 }} />
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Topbar;

import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import { UserImage } from "../../assets/images";

type TopbarProps = {
  onMenuClick?: () => void; // for mobile drawer
  onShrinkClick?: () => void; // for sidebar collapse
  isSidebarCollapsed?: boolean; // to know toggle state
};

const Topbar: React.FC<TopbarProps> = ({
  onMenuClick,
  onShrinkClick,
  isSidebarCollapsed,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#fff",
        color: "black",
        boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Menu Button for Mobile */}
        {isMobile ? (
          <IconButton color="inherit" edge="start" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        ) : (
          <IconButton color="inherit" edge="start" onClick={onShrinkClick}>
            {isSidebarCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        )}

        {/* Right Profile Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
          <Avatar alt="User" src={UserImage} sx={{ width: 36, height: 36 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
