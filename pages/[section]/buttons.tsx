import { styled } from "@mui/material/styles";
import React from "react";
import Headband from "../../components/headband/Headband";
import Card from "../../components/card/Card";
import { Grid, Theme, Typography } from "@mui/material";
import _Button from "../../components/buttons/Buttons";
import { ColorTypes } from "../../components/buttons/Buttons";
import { makeStyles } from "@mui/styles";

const Section = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  padding: theme.spacing(3),
}));

const regularButtons: {
  text: string;
  size: "small" | "medium" | "large" | undefined;
  variant: "text" | "outlined" | "contained" | undefined;
  color: ColorTypes;
}[] = [
  {
    text: "Primary",
    size: "large",
    variant: "contained",
    color: "primary",
  },
  {
    text: "Info",
    size: "large",
    variant: "contained",
    color: "info",
  },
  {
    text: "Success",
    size: "large",
    variant: "contained",
    color: "success",
  },
  {
    text: "Warning",
    size: "large",
    variant: "contained",
    color: "warning",
  },
  {
    text: "Error",
    size: "large",
    variant: "contained",
    color: "error",
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "margin-bottom": theme.spacing(4),
  },
  containerButtons: {
    margin: -theme.spacing(2),
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const buttons = () => {
  const classes = useStyles();

  return (
    <>
      <Headband title="UI Kit" subtitle="Botones" />
      <Section>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Card>
              <Typography variant="h5" noWrap style={{ marginBottom: 30 }}>
                Regular Buttons
              </Typography>
              <div
                className={classes.containerButtons}
                style={{ marginBottom: 10 }}
              >
                {regularButtons.map((item, index) => {
                  return (
                    <_Button
                      size={item.size}
                      color={item.color}
                      variant={item.variant}
                      sx={{ marginRight: "10px", borderRadius: "50px" }}
                    >
                      {item.text}
                    </_Button>
                  );
                })}
              </div>
              <div
                className={classes.containerButtons}
                style={{ marginBottom: 10 }}
              >
                {regularButtons.map((item, index) => {
                  return (
                    <_Button
                      size={item.size}
                      color={item.color}
                      variant={item.variant}
                      disabled={true}
                      sx={{ marginRight: "10px", borderRadius: "50px" }}
                    >
                      {item.text}
                    </_Button>
                  );
                })}
              </div>
            </Card>
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default buttons;
