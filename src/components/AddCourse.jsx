import { useState } from "react";
import "./AddCourse.css";

function AddCourse({ addCourse }) {
  const [course, setCourse] = useState({
    courseName: "",
    platform: "",
    category: "",
    progress: "",
    status: "Ongoing",
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addCourse(course);

    setCourse({
      courseName: "",
      platform: "",
      category: "",
      progress: "",
      status: "Ongoing",
    });
  };

  return (
    <div className="form-container">
      <h2>Add Course</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="courseName"
          placeholder="Course Name"
          value={course.courseName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="platform"
          placeholder="Platform"
          value={course.platform}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={course.category}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="progress"
          placeholder="Progress (%)"
          value={course.progress}
          onChange={handleChange}
          min="0"
          max="100"
          required
        />

        <select
          name="status"
          value={course.status}
          onChange={handleChange}
        >
          <option>Ongoing</option>
          <option>Completed</option>
        </select>

        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;