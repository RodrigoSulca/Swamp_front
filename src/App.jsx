import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Swamp from "./pages/Swamp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/swamp" element={<Swamp />} />
    </Routes>
  );
}

export default App;