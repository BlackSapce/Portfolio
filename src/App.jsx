import './App.css'
import Main from './Styles/AppStyles'
import Navbar from './Components/Navbar'
import Presentation from './Components/Presentation'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'

function App() {
  return (
    <Main>
      <Navbar />
      <Presentation />
      <AboutMe />
      <Projects />
      <ContactMe />
    </Main>
  );
}

export default App;
