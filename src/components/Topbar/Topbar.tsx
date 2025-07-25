// import { Avatar, IconButton } from "@mui/material";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState } from "../../redux/store";
// import { TopBarContainer } from "./TopBarStyles";
// import { toggleSidebar } from "../../redux/features/layoutSlice";

// const TopBar = () => {
//   const user = useSelector((state: RootState) => state.auth.signUpData);
//   const dispatch = useDispatch();

//   return (
//     <TopBarContainer>
//       <IconButton onClick={() => dispatch(toggleSidebar())}>
//         <ChevronLeftIcon fontSize="large" />
//       </IconButton>

//       <Avatar
//         alt="User Profile"
//         src={user?.profilePic}
//         sx={{ width: 40, height: 40 }}
//       />
//     </TopBarContainer>
//   );
// };

// export default TopBar;

import { Avatar, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { TopBarContainer } from "./TopBarStyles";
import { toggleSidebar } from "../../redux/features/layoutSlice";

const TopBar = () => {
  const user = useSelector((state: RootState) => state.auth.signUpData);
  const dispatch = useDispatch();

  return (
    <TopBarContainer>
      <IconButton onClick={() => dispatch(toggleSidebar())}>
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
