import "./styles/components/app.sass";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero"
import About from "./components/About";
import Projects from "./components/Projects";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Form/>
      <Footer/>
    </Router>
  );
}

export default App;
