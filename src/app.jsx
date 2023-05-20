import React from "react";
import { HomePage } from "./pages";
import SideBar from "./components/sideBar/sideBar";
import { Route, Routes } from "react-router-dom";
import { Assignments } from "./pages/assignments";

const App = () => {
  return (
    <div className="d-flex main_container">
      <SideBar />
      <div className="main_body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
