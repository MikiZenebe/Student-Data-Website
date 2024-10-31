import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import StudentList from "./pages/StudentList";
import CreateStudent from "./pages/CreateStudent";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/create" element={<CreateStudent />} />
        <Route path="/student/:id" element={<Detail />} />
      </Routes>
    </>
  );
}
