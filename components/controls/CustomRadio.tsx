import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { Theme, Radio, RadioProps } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
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
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
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

const CustomRadio: React.FC<RadioProps> = ({ ...props }) => {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

CustomRadio.displayName = "CustomRadio";

export default CustomRadio;
