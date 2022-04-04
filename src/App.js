import Mockman from "mockman-js";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components";
import { useAuth } from "./contexts";
import { HomePage, LandingPage, Login, Signup } from "./pages";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  const {
    state: { isAuth },
  } = useAuth();

  return isAuth ? <Outlet /> : navigate("/");
};

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
