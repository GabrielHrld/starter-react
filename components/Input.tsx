import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Theme,
  FormControl,
  InputLabel,
  TextField,
  TextareaAutosize,
  TextareaAutosizeProps,
  RadioProps,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const TextArea = styled(TextareaAutosize)(({ theme }: { theme?: Theme }) => ({
  "label + &": {
    marginTop: theme?.spacing(4),
    backgroundColor: theme?.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",

    border: `1px solid ${theme?.palette.text.disabled}`,
    fontSize: 16,
    padding: "10px 12px",
    resize: "vertical",
    borderRadius: 4,
    transition: theme?.transitions.create(
      ["border-color", "background-color", "box-shadow", "outline"],
      { duration: ".3s" }
    ),
  },
  "&:hover": {
    boxShadow: theme?.shadows[4],
  },
  "&:focus": {
    outline: `1px solid ${theme?.palette.primary.main}`,

    borderColor: theme?.palette.primary.main,
    boxShadow: theme?.shadows[0],
  },
}));

const BootstrapInput = styled(TextField)(({ theme }: { theme?: Theme }) => ({
  "label + &": {
    marginTop: theme?.spacing(4),
    border: "none",

    transition: theme?.transitions.create(
      ["border-color", "background-color", "box-shadow", "outline"],
      { duration: ".3s" }
    ),
  },
  "& .MuiInputBase": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme?.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    // border: `1px solid ${theme?.palette.text.disabled}`,
    fontSize: 16,
    padding: "10px 12px",
    transition: theme?.transitions.create(
      ["border-color", "background-color", "box-shadow", "outline"],
      { duration: ".3s" }
    ),
  },
  "&:focus": {
    outline: `1px solid ${theme?.palette.primary.main}`,
    borderColor: theme?.palette.primary.main,
    boxShadow: theme?.shadows[0],
  },
  "&:hover": {
    boxShadow: theme?.shadows[4],
  },
}));

export interface InputProps extends TextareaAutosizeProps {
  type?: "text" | "email" | "password" | "number" | "radio";
  id: string;
  label: string;
  placeholder?: string;
  variant?: "standard" | "filled" | "outlined";
  width?: string;
  isTextArea?: boolean;
  isRadio?: boolean;
  "aria-label"?: string;
  name?: string;
  radioItems?: RadioItem[];
}

interface RadioItem {
  label: string;
  value: string;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  label,
  placeholder,
  variant = "outlined",
  width = "80%",
  isTextArea = false,
  isRadio = false,
  "aria-label": ariaLabel,
  name,
  radioItems,
}) => {
  if (isTextArea && isRadio)
    throw new Error("Two types of inputs at once isn't allowed");
  const [value, setValue] = React.useState<string | null>(null);
  const theme = useTheme();

  if (isTextArea) {
    return (
      <FormControl
        variant="standard"
        sx={{ width, marginBottom: theme.spacing(3) }}
      >
        <InputLabel
          shrink
          htmlFor={id}
          sx={{
            color: theme.palette.grey[900],
            fontWeight: theme.typography.fontWeightBold,
            fontSize: "20px",
          }}
        >
          {label}
        </InputLabel>
        <TextArea placeholder={placeholder} id={id} minRows={6} />
      </FormControl>
    );
  }

  if (isRadio) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup
          aria-label={ariaLabel}
          name={name}
          value={value}
          onChange={handleChange}
        >
          {radioItems?.map((item, index) => {
            return (
              <FormControlLabel
                key={index}
                value={item.value}
                control={<Radio />}
                label={item.label}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    );
  }

  return (
    <FormControl
      variant="standard"
      sx={{ width, marginBottom: theme.spacing(3) }}
    >
      <InputLabel
        shrink
        htmlFor={id}
        sx={{
          color: theme.palette.grey[900],
          fontWeight: theme.typography.fontWeightBold,
          fontSize: "20px",
        }}
      >
        {label}
      </InputLabel>
      <BootstrapInput
        placeholder={placeholder}
        variant={variant}
        type={type}
        id={id}
      />
    </FormControl>
  );
};

export default Input;
