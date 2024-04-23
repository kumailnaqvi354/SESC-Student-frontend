import React from "react";

function RegisterCourse() {
  // Sample array of course objects
  const courses = [
    {
      coursename: "Course 1",
      coursedescription: "Description of Course 1",
      courseinstructor: "Instructor 1"
    },
    {
      coursename: "Course 2",
      coursedescription: "Description of Course 2",
      courseinstructor: "Instructor 2"
    },
    {
      coursename: "Course 3",
      coursedescription: "Description of Course 3",
      courseinstructor: "Instructor 3"
    }
  ];

  // Function to handle course registration
  const handleRegisterCourse = (courseName) => {
    // Add your logic to handle course registration here
    console.log(`Registered for ${courseName}`);
  };

  return (
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
              onClick={() => handleRegisterCourse(course.coursename)}
            >
              Register
            </button>
          </li>
        ))}
      </ul>
    </div>
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
