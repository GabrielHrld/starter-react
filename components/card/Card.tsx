import { CardContent } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useTheme, CSSObject } from "@mui/material/styles";

interface Props {
  sx?: CSSObject;
}

const _Card: React.FC<Props> = ({ children, sx }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minWidth: 275,
        px: theme.spacing(1),
        marginBottom: theme.spacing(2),
      }}
    >
      <Card variant="elevation" elevation={4} sx={sx}>
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};

export default _Card;
