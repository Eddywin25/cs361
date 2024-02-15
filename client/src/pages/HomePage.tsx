import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/player') // Adjust the URL based on your server setup
      .then(response => response.json())
      .then(data => setPlayer(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Welcome to NBA Stat Pal!</h1>
      <h3>Click one of the links above to view relevant player stats, team stats, or stat descriptions.</h3>
      <p>Note: Stats are currently limited to the current and previous seasons.</p>
    </div>
  );
};

export default HomePage;
