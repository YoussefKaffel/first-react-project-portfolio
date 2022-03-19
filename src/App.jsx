import ResponsiveAppBar from "./components/appabar";
import Intro from "./components/Intro"
import  Skills  from "./components/skills";
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


const App = () => {
  return <div>
    
   <ResponsiveAppBar sx={{m:4}}/>
    <Intro/>
    <Skills sx={{m:4}}/>
    <Projects/>
    <Contact />
    <Footer />
  </div>;
};
export default App;