import React, { useState } from "react";
import axios from "axios";

function RoomManagement() {
  const [roomNumber, setRoomNumber] = useState("");
  const [studentId, setStudentId] = useState("");
  const [roomId, setRoomId] = useState("");
  const [updateStudentId, setUpdateStudentId] = useState("");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM1MDJjMzY5MjI4MTk0MDE2NjY2MmQiLCJpYXQiOjE2ODE2MzIyNjksImV4cCI6MTY4MTYzNTg2OX0.1Iwx_L8yhjH4bE-XT_VZ7t-sV781YhzQTmhvHvYzn-s";
  const [successMessage, setSuccessMessage] = useState("");

  const addRoom = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/guardian/changeStudentRoom",
        {
          studentId,
          roomNo: roomNumber,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error adding room:", error);
    }
  };

  const updateRoom = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/guardian/changeStudentRoom",
        {
          studentId: updateStudentId,
          roomNo: roomId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setSuccessMessage("Room changed successfully");
    } catch (error) {
      console.log("adsd" + updateStudentId, roomId);
      console.error("Error updating room:", error.response.data);
      setSuccessMessage("");
    }
  };

  return (
    <div className="room-management">
      <div className="add-room-container">
        <h2>Add Room</h2>
        <label style={{ paddingRight: "15px" }} htmlFor="room-number">
          Room Number
        </label>
        <input
          id="room-number"
          type="text"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
        />
        <label style={{ paddingRight: "15px" }} htmlFor="student-id">
          Student ID
        </label>
        <input
          id="student-id"
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button
          style={{
            backgroundColor: "#270075",
            border: "none",
            borderRadius: "3px",
            color: "#fff",
            cursor: "pointer",
            marginBottom: "170px",
            marginTop: "20px",
            padding: "10px",
            width: "10%",
          }}
          onClick={addRoom}
        >
          Add
        </button>
      </div>
      <div className="update-room-container">
        <h2>Update Room</h2>
        <label style={{ paddingRight: "15px" }} htmlFor="room-id">
          Room ID
        </label>
        <input
          id="room-id"
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <label style={{ paddingRight: "15px" }} htmlFor="update-student-id">
          Student ID
        </label>
        <input
          id="update-student-id"
          type="text"
          value={updateStudentId}
          onChange={(e) => setUpdateStudentId(e.target.value)}
        />
        <p style={{ color: "green" }}>{successMessage}</p>
        <button
          style={{
            backgroundColor: "#270075",
            border: "none",
            borderRadius: "3px",
            color: "#fff",
            cursor: "pointer",
            marginBottom: "170px",
            marginTop: "20px",
            padding: "10px",
            width: "10%",
          }}
          onClick={updateRoom}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default RoomManagement;
