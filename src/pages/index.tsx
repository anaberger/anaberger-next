import React, { useEffect, useState } from "react";

import { Box, Card, Container, Grid, Typography } from "@material-ui/core";
import Head from "next/head";
import Layout from "../components/Layout";
import ParticlesStyled from "../components/ParticlesStyled";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NewLayout from "../components/NewLayout";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
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
  lista: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <NewLayout>
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
            <Box width="50%">
              <Box display="flex" justifyContent="center"></Box>
              <Typography variant="h1" component="h2" className={classes.title}>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries.
              </Typography>

              <Box>
                <Typography
                  variant="h1"
                  component="h2"
                  className={classes.title}
                >
                  Skills
                </Typography>
                <ul>
                  <li>baaaaaa</li>
                  <li>baaaaaa</li>
                  <li>baaaaaa</li>
                  <li>baaaaaa</li>
                  <li>baaaaaa</li>
                </ul>
              </Box>

              <Box>
                <ul className={classes.lista}>
                  <li>
                    <img
                      src="github.svg"
                      alt="logo github"
                      style={{ width: "50px" }}
                    />
                  </li>
                  <li>
                    <img
                      src="linkedin.svg"
                      alt="logo linkedin"
                      style={{ width: "50px" }}
                    />
                  </li>
                  <li>
                    <img
                      src="cloud.svg"
                      alt="download curriculo"
                      style={{ width: "50px" }}
                    />
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </NewLayout>
    </>
  );
}
