import React, { useState, useEffect } from 'react';

const WorkoutSelector = () => {
  const [category, setCategory] = useState('Strength');
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const data = {
      Strength: ['Pushups', 'Squats', 'Deadlifts'],
      Cardio: ['Running', 'Cycling', 'Jump Rope'],
    };
    setWorkouts(data[category]);
  }, [category]);

  return (
    <div>
      <h2>Select Workout Type</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Strength">Strength</option>
        <option value="Cardio">Cardio</option>
      </select>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>{workout}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutSelector;
