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
    </div>
  );
}

export default App;
