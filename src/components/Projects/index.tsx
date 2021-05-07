import {
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import GridContainer from "../GridContainer";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    height: 250,
    background: "red",
  },
}));
export default function Projects() {
  const classes = useStyles();

  return (
    <>
      <GridContainer spacing={5}>
        <Grid item xs={12} sm={3}>
          <Card className={classes.root}>
            <CardContent>
              <h1>oi</h1>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className={classes.root}>
            <CardContent>
              <h1>oi</h1>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className={classes.root}>
            <CardContent>
              <h1>oi</h1>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className={classes.root}>
            <CardContent>
              <h1>oi</h1>
            </CardContent>
          </Card>
        </Grid>
      </GridContainer>
    </>
  );
}
