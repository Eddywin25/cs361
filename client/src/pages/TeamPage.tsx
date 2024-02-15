import React, { useEffect, useState } from 'react';
import TableTeamStats from '../components/TableTeamStats';
import NumberInputBasic from '../components/NumberInput';

const PlayerPage = () => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/player') // Adjust the URL based on your server setup
      .then(response => response.json())
      .then(data => setPlayer(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <TableTeamStats />
      <NumberInputBasic />
    </>
    // <div>
    //   <h1>Player</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>First Name</th>
    //         <th>Last Name</th>
    //         <th>Team</th>
    //         {/* Add other headers */}
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {player.map(player => (
    //         <tr key={player.id}>
    //           <td>{player.first_name}</td>
    //           <td>{player.last_name}</td>
    //           <td>{player.team_id}</td>
    //           {/* Render other stat fields */}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default PlayerPage;
