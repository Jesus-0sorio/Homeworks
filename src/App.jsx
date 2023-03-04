import { BrowserRouter as Router, Route, Routes } from "react-router-dom";;
import { Home, Exercise } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/exercise/:id" element={<Exercise />} />
      </Routes>
    </Router>
  );
}

export default App;
