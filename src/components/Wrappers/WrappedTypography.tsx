import React from "react";
import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline";

interface WrappedTypographyProps extends TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
}

const WrappedTypography: React.FC<WrappedTypographyProps> = ({
  children,
  sx = {},
  ...rest
}) => {
  return (
    <Typography sx={{ fontFamily: "Poppins, sans-serif", ...sx }} {...rest}>
      {children}
    </Typography>
  );
};

export default WrappedTypography;
