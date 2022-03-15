import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Simple from "./components/Simple";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simple" element={<Simple />} />
    </Routes>
  );
};

export default Router;
