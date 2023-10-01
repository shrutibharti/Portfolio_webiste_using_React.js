
import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './components/Banner';
import {Projects} from './components/Projects'
import {Skills} from './components/Skills';

import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
    
      <Footer/>
    </div>
  );
}

export default App;
