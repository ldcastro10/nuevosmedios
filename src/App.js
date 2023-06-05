import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Principal from "./components/principal";
import Secundaria from "./components/secundaria";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/secundaria" element={<Secundaria />} />
      </Routes>
    </Router>
  );
}

export default App;
