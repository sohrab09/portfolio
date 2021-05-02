import './App.css';
import MyNavbar from './components/my-navbar/my-navbar.components';
import MyTitleMessage from './components/title-message/title-message.component';
import "./App.css";
import Particles from "react-particles-js"
import MyCarousal from './components/my-carousal/my-carousal.component';
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Experience from "./pages/experience/experience.component";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from "./pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";
import FooterPanel from './components/footer/footer.component';
import Blog from './pages/blog/blog.component';
function App() {
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <MyCarousal />
      <MyTitleMessage />
      <MyNavbar />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <Blog/>
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <TimeLine />
          </Slide>
        </Container>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>
        <hr />
        <FooterPanel />
      </div>
    </div>
  );
}

export default App;
