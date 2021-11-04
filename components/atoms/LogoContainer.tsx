import React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      cursor: "pointer",
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
    <Box className={classes.box}>
      <Link href={to}>
        <Image src="/assets/images/logo_origin.png" width={160} height={48} />
      </Link>
    </Box>
  );
};

export default LogoContainer;
