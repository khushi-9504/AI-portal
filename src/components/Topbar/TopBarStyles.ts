// import { styled } from "@mui/system";
// import { Box } from "@mui/material";

// export const TopBarContainer = styled(Box)({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   width: "100%",
//   padding: "8px 16px",
//   backgroundColor: "white",
//   height: "64px",
// });

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const TopBarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  background: "#fff",
}));
