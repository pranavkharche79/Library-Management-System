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
import StudentBookSearch from "./Components/StudentBookSearch";
import StudentLogout from "./Components/StudentLogout";
import StudentData from "./Components/StudentData";
import ReturnBook from "./Components/ReturnBook";
import PlaceOrder from "./Components/PlaceOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Home />
        <Routes>
          <Route path="/" element={<Login />} />

          {/* admin */}

          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admindboard" element={<AdminDBoard />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/bsearch" element={<BookSearch />} />
          <Route path="/bupdate" element={<BookUpdate />} />
          <Route path="/vieworder" element={<ViewOrder />} />
          <Route path="/asignout" element={<AdminSignout />} />

          {/* student */}

          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/sbsearch" element={<StudentBookSearch />} />
          <Route path="/sbookinfo" element={<StudentData />} />
          <Route path="/sbookreturn" element={<ReturnBook />} />
          <Route path="/sorderbook" element={<PlaceOrder />} />
          <Route path="/slogout" element={<StudentLogout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
