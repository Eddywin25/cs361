import React, { useEffect, useState } from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

// basic interface for player stat data
interface PlayerData {
  id: string;
  first_name: string;
  last_name: string;
  team_id: string;
}

const TablePlayerStats: React.FC = () => {
  const [playerData, setPlayer] = useState<PlayerData[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/player')  //Adjust the URL based on server
      .then(response => response.json())
      .then(data => setPlayer(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Team</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {playerData.map((player) => (
                        <TableRow key={player.id}>
                            <TableCell>{player.first_name}</TableCell>
                            <TableCell>{player.last_name}</TableCell>
                            <TableCell>{player.team_id}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TablePlayerStats;