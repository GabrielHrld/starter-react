import { CardContent } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";

interface Props {}

const _Card: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  return (
    <Box sx={{ minWidth: 275, px: theme.spacing(1) }}>
      <Card variant="elevation" elevation={4}>
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};

export default _Card;
