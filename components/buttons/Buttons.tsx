import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { darken } from "@mui/system";
import capitalize from "lodash/capitalize";
import { Theme } from "@mui/material";
import MuiButton from "@mui/material/Button";

import { Button, ButtonProps as MuiButtonProps } from "@mui/material";

export type ColorTypes =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "warning"
  | "inherit"
  | "info"
  | undefined;

type ButtonProps = { color: ColorTypes } & Omit<MuiButtonProps, "color">;

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    outlinedPrimary: {
      borderColor: `${darken(theme.palette.primary.main, 0.2)}`,
      color: `${darken(theme.palette.primary.main, 0.2)}`,
      boxShadow: theme.shadows[3],
      borderWidth: 1,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        boxShadow: theme.shadows[3],
        transition: ".3s all linear",
      },
      "&:disabled": {
        borderColor: `${darken(theme.palette.primary.main, 0.2)}`,
        color: `${darken(theme.palette.primary.main, 0.2)}`,
        boxShadow: theme.shadows[3],
        opacity: ".4",
      },
    },
    outlinedSuccess: {
      borderColor: `${darken(theme.palette.success.main, 0.2)}`,
      color: `${darken(theme.palette.success.main, 0.2)}`,
      boxShadow: theme.shadows[3],
      borderWidth: 1,
      "&:hover": {
        backgroundColor: theme.palette.success.dark,
        borderColor: theme.palette.success.dark,
        color: theme.palette.success.contrastText,
        boxShadow: theme.shadows[3],
        transition: ".3s all linear",
      },
      "&:disabled": {
        borderColor: `${darken(theme.palette.success.main, 0.2)}`,
        color: `${darken(theme.palette.success.main, 0.2)}`,
        boxShadow: theme.shadows[3],
        opacity: ".4",
      },
    },
    outlinedError: {
      borderColor: `${darken(theme.palette.error.main, 0.2)}`,
      color: `${darken(theme.palette.error.main, 0.2)}`,
      boxShadow: theme.shadows[3],
      borderWidth: 1,
      "&:hover": {
        backgroundColor: theme.palette.error.dark,
        borderColor: theme.palette.error.dark,
        color: theme.palette.error.contrastText,
        boxShadow: theme.shadows[3],
        transition: ".3s all linear",
      },
      "&:disabled": {
        borderColor: `${darken(theme.palette.error.main, 0.2)}`,
        color: `${darken(theme.palette.error.main, 0.2)}`,
        boxShadow: theme.shadows[3],
        opacity: ".4",
      },
    },
    outlinedWarning: {
      borderColor: `${darken(theme.palette.warning.main, 0.2)}`,
      color: `${darken(theme.palette.warning.main, 0.2)}`,
      boxShadow: theme.shadows[3],
      borderWidth: 1,
      "&:hover": {
        backgroundColor: theme.palette.warning.dark,
        borderColor: theme.palette.warning.dark,
        color: theme.palette.warning.contrastText,
        boxShadow: theme.shadows[3],
        transition: ".3s all linear",
      },
      "&:disabled": {
        borderColor: `${darken(theme.palette.warning.main, 0.2)}`,
        color: `${darken(theme.palette.warning.main, 0.2)}`,
        boxShadow: theme.shadows[3],
        opacity: ".4",
      },
    },
    outlinedInfo: {
      borderColor: `${darken(theme.palette.info.main, 0.2)}`,
      color: `${darken(theme.palette.info.main, 0.2)}`,
      boxShadow: theme.shadows[3],
      borderWidth: 1,
      "&:hover": {
        backgroundColor: theme.palette.info.dark,
        borderColor: theme.palette.info.dark,
        color: theme.palette.info.contrastText,
        boxShadow: theme.shadows[3],
        transition: ".3s all linear",
      },
      "&:disabled": {
        borderColor: `${darken(theme.palette.info.main, 0.2)}`,
        color: `${darken(theme.palette.info.main, 0.2)}`,
        boxShadow: theme.shadows[3],
        opacity: ".4",
      },
    },
    containedPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      boxShadow: theme.shadows[3],
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: theme.shadows[3],
      },
      "&:disabled": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        boxShadow: theme.shadows[3],
        opacity: ".4",
      },
    },
    containedSuccess: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
      boxShadow: theme.shadows[3],
      "&:hover": {
        backgroundColor: theme.palette.success.dark,
        boxShadow: theme.shadows[3],
      },
      "&:disabled": {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText,
        boxShadow: theme.shadows[3],
        opacity: ".4",
      },
    },
    containedError: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      boxShadow: theme.shadows[3],
      "&:hover": {
        backgroundColor: theme.palette.error.dark,
        boxShadow: theme.shadows[3],
      },
      "&:disabled": {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
        boxShadow: theme.shadows[3],
        opacity: ".4",
      },
    },
    containedWarning: {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
      boxShadow: theme.shadows[3],
      "&:hover": {
        backgroundColor: theme.palette.warning.dark,
        boxShadow: theme.shadows[3],
      },
      "&:disabled": {
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.warning.contrastText,
        boxShadow: theme.shadows[3],
        opacity: ".4",
      },
    },
    containedInfo: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      boxShadow: theme.shadows[3],
      "&:hover": {
        backgroundColor: theme.palette.info.dark,
        boxShadow: theme.shadows[3],
      },
      "&:disabled": {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.info.contrastText,
        boxShadow: theme.shadows[3],
        opacity: ".4",
      },
    },
    textPrimary: {
      color: `${darken(theme.palette.primary.main, 0.05)}`,
      padding: 0,
      minWidth: 0,
      "&:hover": {
        backgroundColor: "transparent",
        textDecoration: "underline",
        color: theme.palette.primary.dark,
      },
      "&:disabled": {
        color: `${darken(theme.palette.primary.main, 0.05)}`,
        opacity: ".4",
      },
    },
    textSuccess: {
      color: `${darken(theme.palette.success.main, 0.05)}`,
      padding: 0,
      minWidth: 0,
      "&:hover": {
        backgroundColor: "transparent",
        textDecoration: "underline",
        color: theme.palette.success.dark,
      },
      "&:disabled": {
        color: `${darken(theme.palette.success.main, 0.05)}`,
        opacity: ".4",
      },
    },
    textError: {
      color: `${darken(theme.palette.error.main, 0.05)}`,
      padding: 0,
      minWidth: 0,
      "&:hover": {
        backgroundColor: "transparent",
        textDecoration: "underline",
        color: theme.palette.error.dark,
      },
      "&:disabled": {
        color: `${darken(theme.palette.error.main, 0.05)}`,
        opacity: ".4",
      },
    },
    textWarning: {
      color: `${darken(theme.palette.warning.main, 0.05)}`,
      padding: 0,
      minWidth: 0,
      "&:hover": {
        backgroundColor: "transparent",
        textDecoration: "underline",
        color: theme.palette.warning.dark,
      },
      "&:disabled": {
        color: `${darken(theme.palette.warning.main, 0.05)}`,
        opacity: ".4",
      },
    },
    textInfo: {
      color: `${darken(theme.palette.info.main, 0.05)}`,
      padding: 0,
      minWidth: 0,
      "&:hover": {
        backgroundColor: "transparent",
        textDecoration: "underline",
        color: theme.palette.info.dark,
      },
      "&:disabled": {
        color: `${darken(theme.palette.info.main, 0.05)}`,
        opacity: ".4",
      },
    },
  })
);

const _Button: React.FC<ButtonProps> = ({ children, color, ...props }) => {
  const classes = useStyles();
  const className = classes?.[`${props.variant}${capitalize(color)}`];

  return (
    <MuiButton {...props} color={color} className={className}>
      {children}
    </MuiButton>
  );
};

_Button.displayName = "Button";

export default _Button;
