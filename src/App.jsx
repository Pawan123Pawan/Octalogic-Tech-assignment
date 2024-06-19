import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./layouts/Sidebar";
import CourseList from "./components/CourseList";
import MainHome from "./pages/MainHome";

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

const MainApp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showSidebar = location.pathname !== "/";

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        navigate("/home");
      }, 4000);
      return () => clearTimeout(timer); 
    }
  }, [location.pathname, navigate]);

  return (
    <div className="flex-1 h-[100vh] flex">
      {showSidebar && <Sidebar />}

      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courseList" element={<CourseList />} />
      </Routes>
    </div>
  );
};

export default App;
