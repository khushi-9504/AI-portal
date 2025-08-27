import React from "react";
import { AppBar, Toolbar, Box, IconButton, Avatar } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { UserImage } from "../../assets/images";

type TopbarProps = {
  onShrinkClick?: () => void;
};

const Topbar: React.FC<TopbarProps> = ({ onShrinkClick }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0px 1px 4px rgba(0,0,0,0.08)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: { xs: 56, sm: 64 },
          px: { xs: 1, sm: 2 },
        }}
      >
        {/* Chevron Left Icon  */}
        <IconButton
          onClick={onShrinkClick}
          sx={{
            color: "#333",
            mr: 1,
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              color: "#000",
            },
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: 28 }} />
        </IconButton>

        {/* Space filler */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right Profile Avatar */}
        <Avatar
          alt="User"
          src={UserImage}
          sx={{
            width: 36,
            height: 36,
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
