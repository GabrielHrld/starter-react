import React from "react";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { SwitchClassKey, SwitchProps, Theme, Switch } from "@mui/material";

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    margin: 9,
    borderRadius: 16 / 2,
    // '&:hover': {
    //     boxShadow: 'rgba(192, 196, 203, 0.25) 0px 0px 0px 3.2px',
    // },
    "& .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track": {
      opacity: 1,
    },
    "& .MuiSwitch-colorSecondary.Mui-disabled + .MuiSwitch-track": {
      backgroundColor: "#f5f8fa",
    },
  },
  switchBase: {
    padding: 2,
    color: "#a5a9b3",
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.primary.main,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.common.white,
        borderColor: "#ced4da",
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: "1px solid #ced4da",
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
  disabled: {
    opacity: 0.75,
    "&:hover": {
      boxShadow: "none",
    },
  },
}));

const CustomSwitch: React.FC<SwitchProps> = ({ ...props }) => {
  const classes = useStyles();

  return (
    <Switch
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
        disabled: classes.disabled,
      }}
      disableRipple
      {...props}
    />
  );
};

CustomSwitch.displayName = "CustomSwitch";

export default CustomSwitch;
