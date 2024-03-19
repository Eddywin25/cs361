// import React, { useEffect, useState } from 'react';
import TableTeamStats from '../components/TableTeamStats';
// import NumberInputBasic from '../components/NumberInput';

const TeamPage = () => {
  // const [player, setPlayer] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/player') // Adjust the URL based on your server setup
  //     .then(response => response.json())
  //     .then(data => setPlayer(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <>
      <div className="content-main">
        <h1>Team Information</h1>
        <div className="tables-container">
          <div className="table-wrapper">
            <TableTeamStats />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
