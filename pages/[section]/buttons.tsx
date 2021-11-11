import { styled } from "@mui/material/styles";
import React from "react";
import Headband from "../../components/headband/Headband";
import Card from "../../components/card/Card";
import { Grid } from "@mui/material";

const Section = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  padding: theme.spacing(3),
}));

const buttons = () => {
  return (
    <>
      <Headband title="UI Kit" subtitle="Botones" />
      <Section>
        <Grid container>
          <Grid item xs={12}>
            <Card></Card>
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default buttons;
