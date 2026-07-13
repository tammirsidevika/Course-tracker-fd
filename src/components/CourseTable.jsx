import "./CourseTable.css";

function CourseTable({ courses }) {
  const getCourseClass = (courseName) => {
    const name = courseName.toLowerCase();

    if (name.includes("react")) return "react";
    if (name.includes("node")) return "node";
    if (name.includes("mongodb")) return "mongodb";
    if (name.includes("express")) return "express";
    if (name.includes("javascript")) return "javascript";
    if (name.includes("java")) return "java";
    if (name.includes("python")) return "python";
    if (name.includes("html")) return "html";
    if (name.includes("css")) return "css";
    if (name.includes("bootstrap")) return "bootstrap";
    if (name.includes("tailwind")) return "tailwind";

    return "default-course";
  };

  return (
    <div className="table-container">
      <h2>Course List</h2>

      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Platform</th>
            <th>Category</th>
            <th>Progress</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {courses.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No Courses Found
              </td>
            </tr>
          ) : (
            courses.map((course, index) => (
              <tr key={index} className={getCourseClass(course.courseName)}>
                <td>{course.courseName}</td>
                <td>{course.platform}</td>
                <td>{course.category}</td>
                <td>{course.progress}%</td>
                <td>{course.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CourseTable;