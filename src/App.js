<<<<<<< HEAD
import FitForm from "./components/FitForm";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🏋️ FitTrack - Firebase Edition</h1>
      <FitForm />
=======
import React from 'react';
import './App.css';
import WorkoutSelector from './components/WorkoutSelector';
import DailyProgress from './components/DailyProgress';

function App() {
  return (
    <div className="App">
      <h1>🏋️ FitTrack - Your Daily Workout Tracker</h1>
      <WorkoutSelector />
      <hr />
      <DailyProgress />
>>>>>>> 17ed21784455e0d7fed21b390b6d0b1756a4d8c3
    </div>
  );
}

export default App;
