import React from "react";
import { Route, Routes } from "react-router-dom";
import Logo from "./component/molecules/Logo";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </>
  );
};

export default App;
