import { ReactNode } from "react";
import { FC } from "react";

import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const NewLayout: FC = ({ children }: LayoutProps) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <MenuAppBarNew />
      <Container className={classes.containerLayout}>{children}</Container>
    </Grid>
  );
};

export default NewLayout;
