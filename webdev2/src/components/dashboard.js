import React, { useState, useEffect } from 'react';
import './dashboard.css'; 

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const workoutData = [
        { id: 1, type: 'Cardio', duration: 30, calories: 300 },
        { id: 2, type: 'Strength Training', duration: 45, calories: 400 },
      ];
      setWorkouts(workoutData);
      
      const totalCalories = workoutData.reduce((acc, workout) => acc + workout.calories, 0);
      setCaloriesBurned(totalCalories);
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="dashboard">
      <h1>Your Dashboard</h1>
      <p>Total Calories Burned: {caloriesBurned}</p>
      <h2>Recent Workouts</h2>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            <strong>{workout.type}</strong> - {workout.duration} mins, {workout.calories} calories
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
