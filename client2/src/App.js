import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route exact path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
