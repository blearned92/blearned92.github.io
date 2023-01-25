import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About/About";
import Main from "../components/Main/Main";
import Portfolio from "../components/Project/Project";

export const AppRoutes: React.FC<unknown> = () => (
    <Routes>
        <Route path="/" element={<Main/>}/>  /*This will be home page*/
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/portfolio" element={<Portfolio/>}/> */}
    </Routes>
  )