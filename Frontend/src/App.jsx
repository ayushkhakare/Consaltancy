import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Home";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Footer from "./Pages/Footer";
import Aboutdetail from "./Component/Aboutdetails";
import Servicepage from "./Pages/Servicepage";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service />} />
        <Route path="/servicepage/:id" element={<Servicepage />} />
        <Route path='/aboutdetails'element={<Aboutdetail/>}/>
      
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
