import { Route, Routes } from "react-router-dom";
import StudenList from "./pages/StudenList";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudenList />} />
      </Routes>
    </>
  );
}
