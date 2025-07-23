import { Avatar, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { TopBarContainer } from "./TopBarStyles";

const TopBar = () => {
  const user = useSelector((state: RootState) => state.auth.signUpData);

  return (
    <TopBarContainer>
      <IconButton>
        <ChevronLeftIcon fontSize="large" />
      </IconButton>

      <Avatar
        alt="User Profile"
        src={user?.profilePic}
        sx={{ width: 40, height: 40 }}
      />
    </TopBarContainer>
  );
};

export default TopBar;
