import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RegisterCourse from './RegisterCourse';

function Profile({ userData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isEnrollCourse, setIsEnrollCourse] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});
  const [data, setData] = useState({})


  const handleEnroll = () => {
    // Navigate to the register-course route
    setIsEnrollCourse(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
    // setEditedUserData(userData); // Initialize editedUserData with current userData
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({ ...editedUserData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3001/student/${userData[0]._id}`, editedUserData);
      console.log('Profile updated successfully');
      const response = await axios.get(`http://localhost:3001/student/${userData[0]._id}`);
      console.log('Profile', response);
      
      setData(response?.data)
      // Optionally, you can fetch updated user data and update the state here
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  useEffect(()=>{
    setData(userData[0]);
  }, [data])
  return (
    <div style={styles.container}>
      <h2>Profile</h2>
      {isEditing ? (
        <form onSubmit={handleFormSubmit}>
          <div style={styles.field}>
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              value={editedUserData.firstname}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={editedUserData.lastname}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={editedUserData.email}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={editedUserData.password}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <label>Date of Birth:</label>
            <input
              type="text"
              name="DOB"
              value={editedUserData.DOB}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <label>Degree:</label>
            <input
              type="text"
              name="degree"
              value={editedUserData.degree}
              onChange={handleInputChange}
            />
          </div>
          
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelEdit}>Cancel</button>
        </form>
      ) : 
      isEnrollCourse ? <RegisterCourse/> :
      
      (
        <>
          <div style={styles.field}>
            <label>First Name:</label>
            <span>{data?.firstname}</span>
          </div>
          <div style={styles.field}>
            <label>Last Name:</label>
            <span>{data?.lastname}</span>
          </div>
          <div style={styles.field}>
            <label>Email:</label>
            <span>{data?.email}</span>
          </div>
          
          <div style={styles.field}>
            <label>Date of Birth:</label>
            <span>{data?.DOB}</span>
          </div>
          <div style={styles.field}>
            <label>Degree:</label>
            <span>{data?.degree}</span>
          </div>
         
          <div style={styles.field}>
            <label>Library Due:</label>
            <span>{data?.libraryDue}</span>
          </div>
          <div style={styles.field}>
            <label>Fees Due:</label>
            <span>{data?.feesDue}</span>
          </div>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleEnroll}>Enroll in Course</button>

        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  field: {
    marginBottom: '10px',
  },
};

export default Profile;
