import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
function App() {
  return (
   
    <div className="App">
    <BrowserRouter>
    
    </BrowserRouter>
    <Home/>
    <About/>
    <Testimonial/>
    <Work/>
    <Contact/>
    <Footer/>
    </div>

  );
}

export default App;

