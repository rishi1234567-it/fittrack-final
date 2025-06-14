import React, { useState, useEffect } from 'react';

const DailyProgress = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('progress');
    return saved ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('progress', JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <h2>Today's Workout Count</h2>
      <p>{count} reps completed</p>
      <button onClick={() => setCount(count + 1)}>Add Rep</button>
    </div>
  );
};

export default DailyProgress;
