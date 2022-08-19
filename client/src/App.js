import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path="/"/>
                  <Route path="contact"/>
                  <Route path="about"/>
                  <Route path="*"/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
