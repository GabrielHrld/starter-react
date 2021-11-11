import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "../navbar/Navbar";
import { connect } from "react-redux";
import { InitialState } from "../../utils/interfaces/context/InitialState";
import { handleSideMenuAction } from "../../context/actions/index";
import SideBar from "../sideMenu/SideMenu";
import Headband from "../headband/Headband";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // marginLeft: `calc(${theme.spacing(7)} + 1px)`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const Section = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  // padding: theme.spacing(3),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface Props {
  children: React.ReactNode;
  sideMenuState: boolean;
}

const Layout: React.FC<Props> = ({ children, sideMenuState }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <SideBar open={sideMenuState} />

      <Main open={sideMenuState}>
        <DrawerHeader />
        {/* <Headband /> */}
        <Section>{children}</Section>
      </Main>
    </Box>
  );
};

const mapStateToProps = (state: InitialState) => {
  return {
    sideMenuState: state.sideMenuState,
  };
};

const mapDispatchToProps = {
  handleSideMenuAction,
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
