import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import logo from "./assets/images/logo.png";
import NavBar from "./components/NavBar/NavBar";
import { navItems, activeStyle } from "./constants/navItems";

function App() {
    return (
        <div className="App">
            <Router>
                <Header bgColor="purple" imgSrc={logo} pd="0.5rem" />
                <NavBar
                    bgColor="purple"
                    navItems={navItems}
                    activeStyle={activeStyle}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
