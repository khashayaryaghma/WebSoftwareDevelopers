import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="contact" element={<Contact/>}/>
                  <Route path="about" element={<About/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
