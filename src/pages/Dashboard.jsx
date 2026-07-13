import { useState } from "react";
import "./Dashboard.css";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import AddCourse from "../components/AddCourse";
import CourseTable from "../components/CourseTable";

function Dashboard() {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />

        <Cards />

        <SearchBar />

        <AddCourse addCourse={addCourse} />

        <CourseTable courses={courses} />
      </div>
    </div>
  );
}

export default Dashboard;