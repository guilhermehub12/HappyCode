import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import { AppRoute } from "./routes/AppRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
            <Route path="/" element={<AppRoute />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
