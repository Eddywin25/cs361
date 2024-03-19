import React, { useEffect, useState } from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

// basic interface for player stat data
interface PlayerData {
  id: string;
  first_name: string;
  last_name: string;
  position: string;
  team_id: {
    _id: string;
    id: string;
    name: string;
  };
  game_stats: {
    _id: string;
    id: string;
    player_id: string;
    points: string;
    fga: string;
    fgm: string;
  }[];
}

const TablePlayerStats = (selectedPlayerId: any) => {
    const [playerData, setPlayer] = useState<PlayerData[]>([]);

    useEffect(() => {
    fetch('http://localhost:8000/playerStats')
        .then(response => response.json())
        .then(data => setPlayer(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    // filter on selected player
    const filteredPlayers = selectedPlayerId.selectedPlayerId
        ? playerData.filter((player) => player.id === selectedPlayerId.selectedPlayerId)
        : playerData;

    // extract player stat data from JSON
    const extractedData = filteredPlayers.map((player) => {
        const { id, first_name, last_name, position, team_id, game_stats } = player;
        const { name: teamName } = team_id;
        
        const totalPoints = game_stats.reduce((sum: any, stat: any) => sum + parseInt(stat.points), 0);
        const totalFGA = game_stats.reduce((sum: any, stat: any) => sum + parseInt(stat.fga), 0);
        const totalFGM = game_stats.reduce((sum: any, stat: any) => sum + parseInt(stat.fgm), 0);
        
        return {
            id: id,
            firstName: first_name,
            lastName: last_name,
            position,
            teamName,
            totalPoints,
            totalFGA,
            totalFGM,
        };
    });

    // console.log("PlayerStats: ", extractedData);

    return (
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Team</TableCell>
                        <TableCell>Position</TableCell>
                        <TableCell>Points</TableCell>
                        <TableCell>FGA</TableCell>
                        <TableCell>FGM</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {extractedData.map((player) => (
                        <TableRow key={player.id}>
                            <TableCell>{player.firstName}</TableCell>
                            <TableCell>{player.lastName}</TableCell>
                            <TableCell>{player.teamName}</TableCell>
                            <TableCell>{player.position}</TableCell>
                            <TableCell>{player.totalPoints}</TableCell>
                            <TableCell>{player.totalFGA}</TableCell>
                            <TableCell>{player.totalFGM}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};


export default TablePlayerStats;