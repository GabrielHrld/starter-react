import React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
interface Props {
  to: string;
  width?: number;
  height?: number;
}

const LogoContainer: React.FC<Props> = ({ to, width, height }) => {
  return (
    <Box sx={{ cursor: "pointer" }}>
      <Link href={to} passHref>
        <Image
          src="/assets/images/logo_origin.png"
          alt="logo"
          width={160}
          height={48}
        />
      </Link>
    </Box>
  );
};

export default LogoContainer;
