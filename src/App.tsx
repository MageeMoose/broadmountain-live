import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Cv from "./pages/Cv";
import Skills from "./pages/SkillsAndCerts";
import Projects from './pages/Projects';


function App() {
  return  (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="aboutMe" element={<AboutMe />} />
        <Route path="cv" element={<Cv />} />
        <Route path="skillsAndCerts" element={<Skills />} />
        <Route path="projects" element={<Projects />}/>
        {/* <Route path="todoApp" element={<Todo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
