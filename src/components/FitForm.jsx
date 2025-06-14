import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const FitForm = () => {
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "activities"), {
        activity: activity,
        duration: duration,
        createdAt: Timestamp.now(),
      });
      alert("✅ Activity logged!");
      setActivity("");
      setDuration("");
    } catch (err) {
      console.error("❌ Error adding document: ", err);
      alert("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ marginBottom: "10px" }}>🏋️ Log Your Workout</h2>

      <input
        type="text"
        placeholder="Activity (e.g. Pushups)"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        required
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>
        Save to Firestore
      </button>
    </form>
  );
};

// Basic inline styling
const formStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  width: "300px",
  margin: "20px auto",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "4px",
  border: "1px solid #aaa",
};

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default FitForm;
