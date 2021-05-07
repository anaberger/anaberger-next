import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { calculateAge } from "../../utils/CalculateAge";
import GridContainer from "../GridContainer";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 30,
    textAlign: "center",
  },

  gridContainer: {
    marginTop: 100,
    padding: 50,
    width: "100%",
  },
  description: {
    marginTop: 20,
    textAlign: "center",
  },
  hiHuman: {
    width: 300,
  },
}));
export default function AboutMe() {
  const classes = useStyles();
  const myAge = calculateAge();

  return (
    <GridContainer>
      <Grid item xs={12} sm={6}>
        <Box display="flex" justifyContent="center">
          <img
            src="/hiHuman.svg"
            alt="monstrinho rosa"
            className={classes.hiHuman}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} style={{ display: "flex" }}>
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Typography variant="h1" component="h2" className={classes.title}>
            Hi, Human!
          </Typography>
          <Typography variant="body1" className={classes.description}>
            `Hi my name is Ana and I'm {myAge} anos bajisdjfisjdfjsd
            hsdfhusdhfusdh fhsdufsdhfsdh hfudhfu`
          </Typography>
        </Box>
      </Grid>
    </GridContainer>
  );
}
