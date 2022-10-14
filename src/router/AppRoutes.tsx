import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import POKEApi from "../components/Projects/POKEApi/POKEApi";

export const AppRoutes: React.FC<unknown> = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>  /*This will be home page*/
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/projectPokeAPI" element={<POKEApi/>}/>
    </Routes>
  )