import React, { useEffect, useState } from "react";

import { Box, Card, Container, Grid, Typography } from "@material-ui/core";
import Head from "next/head";
import Layout from "../components/Layout";
import AboutMe from "../components/AboutMe";
import ParticlesStyled from "../components/ParticlesStyled";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Image from "next/image";
import { calculateAge } from "../utils/CalculateAge";
import Projects from "../components/Projects";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  profession: {
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

export default function Home() {
  const classes = useStyles();
  const [age, setAge] = useState();

  const myAge = calculateAge();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Layout>
        <Box position="relative">
          <ParticlesStyled />
          <Box
            position="absolute"
            top={0}
            left={0}
            bottom={0}
            right={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <Box display="flex" justifyContent="center">
                <img
                  src="/alien2.svg"
                  alt="logo-site"
                  style={{ width: "70px" }}
                />
              </Box>
              <Typography variant="h1" component="h2" className={classes.title}>
                anaberger.com
              </Typography>
              <Typography className={classes.profession}>Front-End</Typography>
            </Box>
          </Box>
        </Box>

        <AboutMe />

        <Projects />
      </Layout>
    </>
  );
}
