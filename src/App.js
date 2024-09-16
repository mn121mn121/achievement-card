import React from 'react';
import './App.css';
import AchievementCard from './AchievementCard';
import bronzeBadge from './assets/bronze.png'; // Adjust the path if needed

function App() {
  return (
    <div className="App">
      <AchievementCard badgeImage={bronzeBadge} />
    </div>
  );
}

export default App;
