import "./styles/components/app.sass";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projetos from "./components/pages/Projetos";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <div id="portfolio">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/projetos" element={<Projetos />}></Route>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
