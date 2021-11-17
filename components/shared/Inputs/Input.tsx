import { Grid, TextField, BaseTextFieldProps } from "@mui/material";
import React from "react";

interface Props extends BaseTextFieldProps {
  state: { valid: boolean | null; field: string | number };
  regex: RegExp;
  setState: React.Dispatch<
    React.SetStateAction<{ field: string | number; valid: boolean | null }>
  >;
}

const Input: React.FC<Props> = ({
  state,
  setState,
  regex,
  id,
  label,
  multiline,
  rows,
  defaultValue,
  type,
  variant,
  fullWidth,
  size,
  helperText,
  disabled,
}) => {
  const onChange = (e: any) => {
    setState({ ...state, field: e.target.value });
  };

  const handleValidateRegex = () => {
    if (regex) {
      if (regex.test(state.field as string)) {
        setState({ ...state, valid: true });
      } else {
        setState({ ...state, valid: false });
      }
    }
  };

  return (
    <TextField
      id={id}
      label={label}
      multiline={multiline}
      rows={rows}
      defaultValue={defaultValue}
      type={type}
      variant={variant as "outlined" | "filled" | "standard" | undefined}
      fullWidth={fullWidth}
      size={size as "small" | "medium" | undefined}
      error={state.valid as boolean | undefined}
      helperText={helperText}
      InputLabelProps={{ shrink: true }}
      disabled={disabled}
      value={state.field}
      onChange={onChange}
      onKeyUp={handleValidateRegex}
      onBlur={handleValidateRegex}
    />
  );
};

export default Input;
