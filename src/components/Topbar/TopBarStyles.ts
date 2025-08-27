import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const TopBarContainer = styled(Box)(({ theme }) => ({
  height: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2),
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
