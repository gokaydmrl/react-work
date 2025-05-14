import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

function Bubbles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () =>
      ({
        autoPlay: true,
        backgroundMask: {
          enable: true /* false */,
          composite: "difference",
          cover: {
            opacity: 0, // 0.5
            value: {},
          },
        },
        clear: false,
        detectRetina: true,
        fpsLimit: 120,
        style: {
          zIndex: "-10",
          position: "fixed",
          top: "0",
          left: "0",
        },
        key: "bubble",
        name: "Bubble",
        particles: {
          number: {
            value: 24,
            density: {
              enable: true,
            },
          },
          color: {
            value: "#1c1e92",
            animation: {
              enable: true,
              speed: 200,
              sync: false,
              mode: "hex",
              start: "#1c1e92",
              end: "#1c1e92",
            },
          },
          shape: {
            type: "circle",
            options: {},
          },
          opacity: {
            value: {
              min: 0.3,
              max: 0.5,
            },
          },
          size: {
            value: {
              min: 100,
              max: 160,
            },
          },
          links: {
            enable: false,
            distance: 200,
            opacity: 0,
            width: 2,
          },
          move: {
            enable: true,
            speed: 8,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false,
              mode: "bubble",
            },
            onClick: {
              enable: false,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              duration: 2,
              size: 40,
              opacity: 0.2,
              mix: true,
            },
            repulse: {
              distance: 200,
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
          },
        },
        background: {
          zIndex: -10000,
          opacity: 0,
        },
      }) as ISourceOptions,
    []
  );

  return (
    <div
      style={{
        zIndex: "-1",
      }}
    >
      {init ? (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            zIndex: "-1",
          }}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
export default Bubbles;
