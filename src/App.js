import './App.css';
import Navbar from './files/navbar';
import Home from './files/home';
import About from './files/about';
import Skills from './files/skills';
import Proj from './files/proj';
import Contact from './files/contact';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/skill' element={ <Skills/>}/>
          <Route path='/pro' element={ <Proj/>}/>
          <Route path='/contact' element={ <Contact/>}/>
        </Routes>
      </Router>
   
  
   
   
  
    </div>
  );
}

export default App;
