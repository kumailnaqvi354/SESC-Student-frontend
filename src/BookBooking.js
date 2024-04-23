import axios from "axios";
import React from "react";

function BookBooking({data}) {

    const handleBookNow = async() => {
    console.log("Debug", data);
        // Make a POST request to the endpoint using Axios
       const response = await axios.patch(`http://localhost:3001/library/${data?._id}`, {
        studentId : data._id,
        type: "LibraryFine",
        amount: "100",
        dueDate : "10/02/2024"
       })
          console.log("Debug response", response);
      };
    
  return (
    <div>
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Book Booking</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {/* Book 1 */}
        <div style={bookStyle}>
          <h4>Book 1</h4>
          <p>Author: Author 1</p>
          <p>Genre: Genre 1</p>
          <button onClick={handleBookNow} style={buttonStyle}>Book Now</button>
        </div>

        {/* Book 2 */}
        <div style={bookStyle}>
          <h4>Book 2</h4>
          <p>Author: Author 2</p>
          <p>Genre: Genre 2</p>
          <button onClick={handleBookNow} style={buttonStyle}>Book Now</button>
        </div>

        {/* Book 3 */}
        <div style={bookStyle}>
          <h4>Book 3</h4>
          <p>Author: Author 3</p>
          <p>Genre: Genre 3</p>
          <button onClick={handleBookNow} style={buttonStyle}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

const bookStyle = {
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  textAlign: "center",
  width: "200px",
};

const buttonStyle = {
  backgroundColor: "blue",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
};

export default BookBooking;
