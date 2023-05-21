import React from "react";
import { HomePage } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Assignments } from "./pages/assignments";
import { AssignmentDetails } from "./pages/assignment_detail";
import { Authentication } from "./pages/authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Authentication />} />
      <Route path="/dashboard" element={<HomePage />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/assignments/:id" element={<AssignmentDetails />} />
    </Routes>
  );
};

export default App;
