import Mockman from "mockman-js";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components";
import { useAuth } from "./contexts";
import {
  Archive,
  HomePage,
  LabelsPage,
  LandingPage,
  Login,
  Signup,
  Trash,
} from "./pages";

const ProtectedRoute = () => {
  const {
    state: { isAuth },
  } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

const App = () => {
  const location = useLocation();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose="3000"
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/labels" element={<LabelsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
