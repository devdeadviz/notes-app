import Mockman from "mockman-js";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, LandingPage, Login } from "./pages";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" || location.pathname === "/mockman" ? "" : <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
};

export default App;
