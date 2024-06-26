import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
//import Header from "./components/header/Header";
import Works from "../../pages/Works";
import Certs from "../../pages/Certs";
import Contacts from "../../pages/Contacts";
import Aboutus from "../../pages/Aboutus";
//import NotFound from "../../pages/NotFound";

export default function AllRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/certs" element={<Certs />} />
      </Routes>
  );
}
