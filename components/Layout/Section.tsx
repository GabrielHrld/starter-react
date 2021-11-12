import React from "react";
import { styled } from "@mui/material/styles";

// STYLES
const _Section = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  padding: theme.spacing(3),
}));

const Section: React.FC = ({ children }) => {
  return <_Section>{children}</_Section>;
};

export default Section;
