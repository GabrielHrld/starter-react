import { Button, Container, Grid, Box } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { connect } from "react-redux";
import { InitialState } from "../../utils/interfaces/context/InitialState";
import Navbar from "../molecules/Navbar";
import { handleSideMenuAction } from "../../context/actions/index";

interface Props {
  children: ReactNode;
  sideMenuState: boolean;
  handleSideMenuAction?: () => void;
}

const Layout: React.FC<Props> = ({
  children,
  sideMenuState,
  handleSideMenuAction,
}) => {
  const handleState = () => handleSideMenuAction && handleSideMenuAction();
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", width: "100vw" }}>
        <Box
          sx={{
            width: sideMenuState ? "50%" : "25%",
            transition: ".3s all ease",
          }}
        >
          <Box></Box>
        </Box>
        <Box>
          {children} <Button onClick={handleState}>click</Button>
        </Box>
      </Box>
    </>
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

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
