import React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import LogoShort from "./LogoShort";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      cursor: "pointer",
      width: theme.mixins.toolbar.minHeight,
      heigth: theme.mixins.toolbar.minHeight,
    },
  })
);

interface Props {
  to: string;
  width?: number;
  height?: number;
}

const LogoContainer: React.FC<Props> = ({ to, width, height }) => {
  const classes = useStyles();

  return (
    <Box width={width} height={height} className={classes.box}>
      <Link href={to}>{<LogoShort />}</Link>
    </Box>
  );
};

export default LogoContainer;
