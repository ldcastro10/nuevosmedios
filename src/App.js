import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Representacion from "./components/representacion";
import Ensayo from "./components/ensayo";
import Presentacion from "./components/presentacion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/representacion" element={<Representacion />} />
        <Route path="/ensayo" element={<Ensayo />} />
      </Routes>
    </Router>
  );
}

export default App;
