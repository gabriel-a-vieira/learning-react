import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./layout/Footer";
import './App.css';

function App() {

  return (
    <Router>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  )

}

export default App;
