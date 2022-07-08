import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, AssetRegForm, BiddingList } from "../pages";

const EndPoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration/asset" element={<AssetRegForm />} />
      <Route path="/listing/biddings" element={<BiddingList />} />
    </Routes>
  );
};

export { EndPoints as Routes };
