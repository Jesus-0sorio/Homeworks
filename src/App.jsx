import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Productos } from "./Productos";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Hello />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </Router>
  );
}

const Hello = () => <h1>Hello Word</h1>;

export default App;
