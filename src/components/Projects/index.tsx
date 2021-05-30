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
    <GridContainer>
      <Grid item xs={12} sm={6}>
        <Box display="flex" justifyContent="center">
          <img src="" width="480" height="480" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} style={{ display: "flex" }}>
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Typography variant="h1" component="h2">
            My Projects
          </Typography>
        </Box>
      </Grid>
    </GridContainer>
  );
}
