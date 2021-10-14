import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { Box, Card, Container, Grid, Typography } from "@material-ui/core";
import Head from "next/head";
import Layout from "../components/Layout";
import ParticlesStyled from "../components/ParticlesStyled";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NewLayout from "../components/NewLayout";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 60,
    color: "#d100d1",
    marginBottom: 30,
  },
  aboutMe: {
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
  lista: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    width: 200,
  },
  active: {
    transition: "200ms",
    transform: "translateY(3rem)",
  },
  icons: {
    padding: 2,
  },
  hide: {
    display: "none",
  },
  buttonAlien: {
    display: "block",
    outline: "none",
    transition: "200ms cubic-bezier(.28, .65, .73, .45)",
    transitionDelay: "450ms",
    zIndex: 21,
    border: "none",
    background: " none",
    cursor: " pointer",
  },
  lightBeam: {
    position: "absolute",
    background:
      "linear-gradient(to left, rgba(155, 130, 255, .3), rgba(185, 168, 255, .6), rgba(155, 130, 255, .3) )",
    width: "100%",
    height: "100%",
    left: 0,
    bottom: 0,
    transform:
      "translateY(3rem) matrix3d( .2, 0, 1, 0, 0, .882948, 0.428884, -.004, -0.913545, 0, 0.406737, 0, 0, 0, 0, 1 )",
    boxShadow: "0 0 3rem rgb(255 120 242 / 60%)",
    filter: "blur(1rem)",

    zIndex: -1,
    opacity: 0.5,
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const [isActive, setActive] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(true);
  const ref = useRef(null);

  const { style, ...mouseHandlers } = use3dEffect(ref);

  const handleOpen = () => {
    setOpen(!open);
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
        <div
          style={{
            width: "100%",
            height: "100%",
            margin: "0",
            padding: "0",
          }}
        >
          <ParticlesStyled />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
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
              <Box width="50%" marginTop={10}>
                <Box display="flex" justifyContent="center" position="relative">
                  <button
                    className={clsx(classes.buttonAlien, {
                      [classes.active]: open,
                    })}
                    onClick={handleOpen}
                  >
                    <img
                      src="/contact-alien.svg"
                      alt="Foto de Ana Laura Berger"
                      style={{ width: "200px" }}
                      className={clsx(open && classes.imgTop)}
                    />
                  </button>
                  <div
                    className={clsx(classes.lightBeam, open && classes.hide)}
                  ></div>
                </Box>

                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  width="80%"
                  margin="auto"
                >
                  <animated.div
                    ref={ref}
                    style={{
                      color: "white",

                      ...style,
                    }}
                    {...mouseHandlers}
                  >
                    <Typography className={classes.title}>
                      {" "}
                      {`< Whos is Ana? />`}
                    </Typography>
                  </animated.div>
                  <Typography className={classes.aboutMe}>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic
                  </Typography>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </NewLayout>
    </>
  );
}
