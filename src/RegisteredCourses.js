import React, { useState, useEffect } from "react";
import axios from "axios";

function RegisteredCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the API
    axios.get("http://localhost:3001/course")
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error("Error fetching courses:", error);
      });
  }, []); // Empty dependency array to ensure useEffect runs only once on component mount

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>My Courses</h3>
      <div style={styles.courseList}>
        {courses.map((course, index) => (
          <div key={index} style={styles.course}>
            <h4>{course.coursename}</h4>
            <p>{course.coursedescription}</p>
            <p>Instructor: {course.courseinstructor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  title: {
    marginBottom: "15px",
    textAlign: "center",
  },
  courseList: {
    display: "grid",
    gridGap: "15px",
  },
  course: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
};

export default RegisteredCourses;
