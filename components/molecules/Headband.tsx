import { Divider, Theme } from "@mui/material";
import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Icons
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
    },
    titlesContainer: {
      display: "flex",
      alignItems: "center",
    },
    title: {
      fontSize: theme.typography.h5.fontSize,
      fontWeight: 500,
    },
    subtitle: {
      fontSize: theme.typography.h6.fontSize,
      color: theme.palette.text.disabled,
    },
  })
);

const Headband = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.titlesContainer}>
          <Typography className={classes.title} component="h3">
            Heading
          </Typography>
          <KeyboardArrowRightIcon fontSize="small" color="disabled" />
          <Typography className={classes.subtitle} component="h4">
            Formularios
          </Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default Headband;
