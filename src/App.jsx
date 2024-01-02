import "./styles/components/app.sass";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Form from "./components/Form";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<MainPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
