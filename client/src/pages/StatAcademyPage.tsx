import React, { useEffect, useState } from 'react';

const StatAcademyPage = () => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/player') // Adjust the URL based on your server setup
      .then(response => response.json())
      .then(data => setPlayer(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Stat Academy</h1>
      <table>
        <thead>
          <tr>
            <th>Stat Abbreviation</th>
            <th>Stat Description</th>
            {/* Add other headers */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PTS</td>
            <td>Points: the number of points scored a player or team.</td>
          </tr>
          <tr>
            <td>FGA</td>
            <td>Field Goal Attemps: the number of shots attempted.</td>
          </tr>
          <tr>
            <td>FGM</td>
            <td>Field Goals Made: the number of shots made.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatAcademyPage;
