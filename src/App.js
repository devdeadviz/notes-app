import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
};

export default App;
