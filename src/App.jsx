import React, { useState } from "react";
import Home from "./pages/Home";
import Sidebar from "./layouts/Sidebar";
import CourseList from "./components/CourseList";
import MainHome from "./pages/MainHome";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("home");
  return (
    // <div className="flex-1 h-[100vh] flex">
    //   <Sidebar setActiveComponent={setActiveComponent} />
    //   {activeComponent === "home" && <Home />}
    //   {activeComponent === "courseList" && <CourseList />}
    // </div>
    <MainHome/>
  );
};

export default App;
