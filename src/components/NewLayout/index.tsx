import { ReactNode } from "react";

import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import MenuAppBarNew from "./NavNew/MenuAppBar";

interface LayoutProps {
  children: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    "& .MuiBox-root": {
      padding: 0,
    },
  },
  containerLayout: {
    marginTop: 60,
    maxWidth: "100%",
    height: "100vh",
  },
}));

export default function NewLayout({ children }: LayoutProps) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid className={classes.root}>
      <MenuAppBarNew />
      <Container className={classes.containerLayout}>{children}</Container>
    </Grid>
  );
}
