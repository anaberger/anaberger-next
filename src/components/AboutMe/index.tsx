import { useRef } from "react";
import { FC } from "react";

import { Box, Grid, ListItemText, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { calculateAge } from "../../utils/CalculateAge";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 60,
    color: "#d100d1",
    marginBottom: 30,
  },
}));
const AboutMe: FC = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const myAge = calculateAge();

  const { style, ...mouseHandlers } = use3dEffect(ref);

  return (
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
        <Typography className={classes.title}> {`<About>`}</Typography>
      </animated.div>

      <Box margin="auto">
        <ListItem button>
          <ListItemText
            primary={`👻 Hi, my name is Ana! I'm ${myAge} years old and I have a cat called Morgana`}
          />
        </ListItem>
        <ListItem button>
          <ListItemText primary="👩‍💻 I work with Js, React, Next, Git, Material Ui, CSS3, HTML5 " />
        </ListItem>
        <ListItem button>
          <ListItemText primary="💼 I'm JavaScript instructor and front-end developer" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="💁‍♀️ I love cats, coffee and my favorite hobby is drinking wine" />
        </ListItem>
      </Box>
    </Box>
  );
};

export default AboutMe;
