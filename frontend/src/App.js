import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import AdminLogin from "./Components/AdminLogin";
import StudentLogin from "./Components/StudentLogin";
import AdminDBoard from "./Components/AdminDBoard";
import ScrollToTop from "./Components/ScrollToTop";
import AddBook from "./Components/AddBook";
import BookSearch from "./Components/BookSearch";
import BookUpdate from "./Components/BookUpdate";
import ViewOrder from "./Components/ViewOrder";
import AdminSignout from "./Components/AdminSignout";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Home />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/admindboard" element={<AdminDBoard />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/bsearch" element={<BookSearch />} />
          <Route path="/bupdate" element={<BookUpdate />} />
          <Route path="/vieworder" element={<ViewOrder />} />
          <Route path="/asignout" element={<AdminSignout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
