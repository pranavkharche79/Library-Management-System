import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import AdminLogin from "./Components/AdminLogin";
import StudentLogin from "./Components/StudentLogin";
import AdminDBoard from "./Components/AdminDBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/admindboard" element={<AdminDBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
