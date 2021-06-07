import React, { useCallback } from "react";
import axios from "axios";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GridContainer from "../GridContainer";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FormContact() {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const onSubmit = useCallback(async (values) => {
    const config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    let result;
    try {
      const response = await axios(config);

      console.log(response);
    } catch (e) {
      result = e.Message;
    }
  }, []);

  return (
    <GridContainer>
      <Grid item xs={12} sm={6} style={{ display: "flex" }}>
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Typography variant="h1" component="h2">
            Talk to me!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box display="flex" justifyContent="center">
          <div className={classes.paper}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        variant="outlined"
                        // InputProps={{
                        //   ...register("lastName", { required: true }),
                        // }}
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        {...field}
                      />
                    )}
                  />
                  {/* {errors.lastName && "Last name is required"} */}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="text"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="text"
                        label="What do you need?"
                        type="text"
                        id="text"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Send
              </Button>
            </form>
          </div>
        </Box>
      </Grid>
    </GridContainer>
  );
}
