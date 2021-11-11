import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Grid, Theme } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

import InputsContainer from "../../components/pages/forms/InputsContainer";
import AutocompleteContainer from "../../components/pages/forms/AutocompleteContainer";
import DatepickerContainer from "../../components/pages/forms/DatepickerContainer";
import ControlsContainer from "../../components/pages/forms/ControlsContainer";
import Headband from "../../components/headband/Headband";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

// component needed be rendered in client-side
const ChartContainer = dynamic(
  () => import("../../components/charts/ChartContainer"),
  {
    ssr: false,
  }
);

// STYLES
const Section = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  padding: theme.spacing(3),
}));

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    "margin-bottom": theme.spacing(6),
  },
  table: {
    border: "none",
  },
}));

const forms = () => {
  const classes = useStyles();

  return (
    <>
      <Headband title="UI Kit" subtitle="Formularios" />
      <Section>
        <Grid container>
          <Grid item xs={12} md={8}>
            {/* INPUTS */}
            <InputsContainer />

            {/* AUTOCOMPLETE */}
            <AutocompleteContainer />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            height="100%"
            justifyContent="space-between"
          >
            {/* DATE PICKERS */}
            <DatepickerContainer />

            {/* Controls */}
            <ControlsContainer />
            {/* <Card>
            <ChartContainer type="line" />
          </Card>
          <Card>
            <ChartContainer type="bar" />
          </Card> */}
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default forms;
