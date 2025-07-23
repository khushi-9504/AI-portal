import React from "react";
import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";

interface WrappedTypographyProps extends TypographyProps {
  children: React.ReactNode;
}

const WrappedTypography = ({ children, ...props }: WrappedTypographyProps) => {
  return (
    <Typography variant="body1" {...props}>
      {children}
    </Typography>
  );
};

export default WrappedTypography;
