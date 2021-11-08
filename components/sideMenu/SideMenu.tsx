import React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled, useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { handleSideMenuAction } from "../../context/actions/index";
import { UiKitCollapsable } from "../collapsables/Collapsables";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface Props {
  open: boolean;
  handleSideMenuAction?: () => void;
}

const SideBar: React.FC<Props> = ({ open, handleSideMenuAction }) => {
  const theme = useTheme();

  const handleDrawerClose = () =>
    handleSideMenuAction && handleSideMenuAction();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          boxShadow: theme.shadows[24],
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <UiKitCollapsable />
      <Divider />
    </Drawer>
  );
};

const mapDispatchToProps = {
  handleSideMenuAction,
};

// @ts-ignore
export default connect(null, mapDispatchToProps)(SideBar);
