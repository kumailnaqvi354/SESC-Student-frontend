import React, { useState, useEffect } from "react";
import axios from "axios";

function RegisterCourse({data}) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the database
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3001/course");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleRegisterCourse = async (courseId) => {
    try {
        const updatedCourses = [...courses, courseId];

      // Update student record with the course ID
      const response = await axios.patch(`http://localhost:3001/student/${data._id}`, {
        courses: updatedCourses
      });
      console.log("Student record updated:", response.data);
    } catch (error) {
      console.error("Error updating student record:", error);
    }
  };

  return (
    <>
    <div style={{ margin: "20px" }}>
      <h3>Register Course</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index} style={courseItemStyle}>
            <h4 style={courseTitleStyle}>{course.coursename}</h4>
            <p style={courseDescriptionStyle}>{course.coursedescription}</p>
            <p style={instructorStyle}>Instructor: {course.courseinstructor}</p>
            <button
              style={buttonStyle}
              onClick={() => handleRegisterCourse(course._id)}
            >
              Register
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

const courseItemStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  marginBottom: "10px"
};

const courseTitleStyle = {
  marginTop: "0"
};

const courseDescriptionStyle = {
  margin: "5px 0"
};

const instructorStyle = {
  margin: "5px 0"
};

const buttonStyle = {
  padding: "5px 10px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

export default RegisterCourse;
