import Particles from "react-particles-js";
import { FC } from "react";

const ParticlesStyled: FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Particles
        height="100vh"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            color: {
              value: ["#f72585"],
            },

            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesStyled;
