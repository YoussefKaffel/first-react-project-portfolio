import ResponsiveAppBar from "./components/appabar";
import Intro from "./components/Intro"
import  Skills  from "./components/skills";
import Projects from "./components/projects"
import Contact from "./components/contact"
import About from "./components/about"
import Footer from "./components/footer"
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Particles from "react-tsparticles";
import FloatButton from "./components/totopbutton"


const App = () => {
  const particlesInit = (main) => {};

  const particlesLoaded = (container) => {
    console.log(container);}
  return <div style={{maxWidth:"100vw"}}> 
     <Particles style={{'z-index': -1 , position:'absolute'}}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
   <ResponsiveAppBar sx={{m:4}}/>
    <Intro/>
    <FloatButton />
    <About />
    <Skills sx={{m:4}}/>
    <Projects/>
    <Contact />
    <Footer />
  </div>;
};
export default App;