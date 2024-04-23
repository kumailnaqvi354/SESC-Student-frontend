import React, { useState } from 'react';
import Profile from './Profile';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signedIn, setSignedIn] = useState('');
const [userData, setUserData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to handle sign-in here, such as sending the data to the server
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await axios.post("http://localhost:3001/auth", {
        email: email,
        password: password,
      });
      console.log("Debug response:",response.data);
      setUserData(response?.data);
    } catch (error) {
      return console.log("error:", error);
    }

    // Simulate successful sign-in (replace with your actual logic)
     setSignedIn( true);

    if (signedIn) {
      sessionStorage.setItem('isLoggedIn', false);
    } else {
      sessionStorage.setItem('isLoggedIn', false);
    }

    // You can also redirect the user to another page after sign-in
  };

  return (
    <>
    {
      signedIn ? <Profile userData={userData}/> :
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: 'block', marginBottom: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: 'block', marginBottom: '5px' }}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
    }
    
    </>
  );
}

export default SignIn;
