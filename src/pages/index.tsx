import React, { useEffect, useRef, useState } from "react";

import { Box, Card, Container, Grid, Typography } from "@material-ui/core";
import Head from "next/head";
import Layout from "../components/Layout";
import ParticlesStyled from "../components/ParticlesStyled";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NewLayout from "../components/NewLayout";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
    color: "#d100d1",
    marginBottom: 30,
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
  img: {
    width: 200,
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const [isActive, setActive] = useState<boolean>(false);
  const ref = useRef(null);

  const { style, ...mouseHandlers } = use3dEffect(ref);

  const handleToggle = () => {
    setActive(!isActive);
  };

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
              <Box display="flex" justifyContent="center">
                <img
                  src="/contact-alien.svg"
                  alt="Foto de Ana Laura Berger"
                  style={{ width: "200px" }}
                  className={isActive ? "active" : null}
                  onClick={handleToggle}
                />
              </Box>

              <Box
                display="flex"
                justifyContent="center"
                marginTop={20}
                flexDirection="column"
              >
                <animated.div
                  ref={ref}
                  style={{
                    color: "white",
                    padding: "2em",
                    ...style,
                  }}
                  {...mouseHandlers}
                >
                  <Typography className={classes.title}>
                    {" "}
                    {`< Whos is Ana? />`}
                  </Typography>
                </animated.div>
                <Typography>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </NewLayout>
    </>
  );
}
