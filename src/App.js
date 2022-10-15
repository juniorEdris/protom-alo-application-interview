import React from "react";
import { Route, Routes } from "react-router-dom";
import Logo from "./component/molecules/Logo";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";

const App = () => {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<NewsDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
