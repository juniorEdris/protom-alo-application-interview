import React from "react";
import { Route, Routes } from "react-router-dom";
import Logo from "./component/molecules/Logo";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <Logo />
            <Home />
          </div>
        }
      />
    </Routes>
  );
};

export default App;
