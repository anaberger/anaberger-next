import { FC } from "react";
import React, { useRef, useState } from "react";

import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
const arrayIcons = ["git", "linkedin", "twitter", "instagram"];

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 60,
    color: "#d100d1",
    marginBottom: 30,
  },
  imgIcons: {
    marginRight: 30,
  },
}));
const Social: FC = () => {
  const classes = useStyles();

  const ref = useRef(null);

  const { style, ...mouseHandlers } = use3dEffect(ref);

  return (
    <>
      <animated.div
        ref={ref}
        style={{
          color: "white",

          ...style,
        }}
        {...mouseHandlers}
      >
        <Typography className={classes.title}> {`<Follow me>`}</Typography>
      </animated.div>
      <Box display="flex" justifyContent="center" marginTop={5}>
        {arrayIcons.map((icon) => (
          <img
            className={classes.imgIcons}
            src={`/${icon}.png`}
            width={50}
            alt="logo git"
          />
        ))}
      </Box>
    </>
  );
};

export default Social;
