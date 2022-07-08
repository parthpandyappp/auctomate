import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, AssetRegForm } from "../pages";

const EndPoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration/asset" element={<AssetRegForm />} />
    </Routes>
  );
};

export { EndPoints as Routes };
