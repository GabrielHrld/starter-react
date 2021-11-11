import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { Checkbox, CheckboxProps } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: 2,
    // border: `1px solid #c5c5c5`,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: 4,
    width: 16,
    height: 16,
    boxShadow: "inset 0 0 0 1px rgba(16,22,26,.2)",
    backgroundColor: theme.palette.common.white,
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      boxShadow:
        "inset 0 0 0 1px rgba(16,22,26,.2), rgba(192, 196, 203, 0.25) 0px 0px 0px 3.2px",
    },
    "input:disabled ~ &": {
      backgroundColor: "#f5f8fa",
    },
    "input:hover:disabled ~ &": {
      boxShadow: "inset 0 0 0 1px rgba(16,22,26,.2)",
    },
  },
  checkedIcon: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "inset 0 0 0 1px rgb(76, 216, 176, .1)",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover:disabled ~ &": {
      boxShadow: "inset 0 0 0 1px rgba(16,22,26,.2)",
    },
    "input:disabled ~ &": {
      backgroundColor: theme.palette.primary.main,
      opacity: 0.75,
    },
  },
}));

const CustomCheckbox: React.FC<CheckboxProps> = ({ ...props }) => {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

CustomCheckbox.displayName = "CustomCheckbox";

export default CustomCheckbox;
