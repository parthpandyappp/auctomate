import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, AssetRegForm, BiddingList, Login, Signup } from "../pages";

const EndPoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration/asset" element={<AssetRegForm />} />
      <Route path="/listing/biddings" element={<BiddingList />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
    </Routes>
  );
};

export { EndPoints as Routes };
