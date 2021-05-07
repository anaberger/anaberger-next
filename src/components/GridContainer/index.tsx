import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: 100,
    padding: 50,
    height: "calc(100vh - 64px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function GridContainer({ children, ...rest }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer} {...rest}>
      {children}
    </Grid>
  );
}
