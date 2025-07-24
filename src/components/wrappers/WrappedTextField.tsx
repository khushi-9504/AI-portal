import React from "react";
import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

interface IWrappedTextFieldProps extends TextFieldProps<"outlined"> {
  name: string;
  control: Control<any>;
  errors?: FieldErrors;
  type?: React.InputHTMLAttributes<unknown>["type"];
  label?: string;
  defaultValue?: string;
}

const IWrappedTextField: React.FC<IWrappedTextFieldProps> = ({
  name,
  control,
  errors,
  type = "text",
  label,
  defaultValue = "",
  sx = {},
  ...rest
}) => {
  const errorMessage = errors?.[name]?.message as string | undefined;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          label={label}
          error={!!errorMessage}
          helperText={errorMessage}
          sx={{ mb: 2, ...sx }}
          {...rest}
        />
      )}
    />
  );
};

export default IWrappedTextField;
