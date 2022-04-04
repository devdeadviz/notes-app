import Mockman from "mockman-js";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components";
import { HomePage, LandingPage, Login, Signup } from "./pages";

const App = () => {
  const location = useLocation();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose="5000"
        hideProgressBar="false"
        closeOnClick="true"
        pauseOnHover="true"
        draggable="true"
        progress="undefined"
      />
      {location.pathname === "/" || location.pathname === "/mockman" ? (
        ""
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
};

export default App;
