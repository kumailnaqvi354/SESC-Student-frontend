import axios from "axios";
import React, { useState } from "react";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [degree, setDegree] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to handle sign-up data here, such as sending it to the server
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Date of Birth:", dob);
    console.log("Degree:", degree);
    try {
      const response = await axios.post("http://localhost:3001/student", {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        DOB: dob,
        degree: degree,
      });
      console.log("Debug id", response?.data?._id);
      const financeResponse = await axios.post(
        "http://localhost:3001/finance",
        {
          studentId: response?.data?._id,
          hasOutstandingBalance: false,
          outstandingAmount: 0,
        }
      );

      const libraryResponse = await axios.post(
        "http://localhost:3001/library",
        {
          studentId: response.data._id,
          type: "none",
          amount: "none",
          dueDate: "0",
        }
      );

      console.log("Response:", response.data);
      console.log("finance Response:", financeResponse);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="signup-form" style={{ textAlign: "center" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            style={{ width: "30%", padding: "5px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
            style={{ width: "30%", padding: "5px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            style={{ width: "30%", padding: "5px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={{ width: "30%", padding: "5px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={handleDobChange}
            required
            style={{ width: "30%", padding: "5px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            id="degree"
            value={degree}
            onChange={handleDegreeChange}
            style={{ width: "30%", padding: "5px" }}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
