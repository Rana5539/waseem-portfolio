import { Box } from "@mui/material";
import About from "./Components/Aboutus/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Exp from "./Components/Experience/Exp";
import Navbar from "./Components/Navbar/Navbar";
import Responsive from "./Components/Navbar/Responsive";
import Project from "./Components/Projects/Project";
import Skill from "./Components/Skills/Skill";


function App() {
  return (
   <>
   <Box sx={{backgroundImage: 'linear-gradient(to right, rgb(5, 14, 49) , black )'}}>
   <Navbar/>
   <Responsive/>
  <About/>
  <Skill/>
  <Exp/>
  <Project/>
  <Education/>
  <Contact/>
 
  </Box>
   </>
  );
}

export default App;
