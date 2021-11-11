import { Divider, Theme } from "@mui/material";
import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Icons
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import _Button from "../buttons/Buttons";
import { useRouter } from "next/dist/client/router";
import { paths } from "../../utils/paths";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
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
    buttonContainer: {},
  })
);

interface Props {
  title: string;
  subtitle: string;
}

const Headband: React.FC<Props> = ({ title, subtitle }) => {
  const classes = useStyles();
  const router = useRouter();
  const sectionPath: string = router.query.section as string;
  const subSectionPath: string = router.query.subSection as string;

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.titlesContainer}>
          <Typography className={classes.title} component="h3">
            {title}
          </Typography>
          <KeyboardArrowRightIcon fontSize="small" color="disabled" />
          <Typography className={classes.subtitle} component="h4">
            {subtitle}
          </Typography>
        </Box>
        <Box className={classes.buttonContainer}>
          <_Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginRight: "1rem", borderRadius: "50px" }}
          >
            Guardar
          </_Button>
          <_Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ marginRight: "1rem", borderRadius: "50px" }}
          >
            Enviar
          </_Button>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default Headband;
