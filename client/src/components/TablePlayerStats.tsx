import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

// basic interface for player stat data
interface PlayerData {
    name: string;
    gamesPlayed: number;
    points: number;
}

// table component 
const TablePlayerStats: React.FC = () => {
    const playerData: PlayerData[] = [
        { name: 'LeBron James', gamesPlayed: 10, points: 300 },
        { name: 'Stephen Curry', gamesPlayed: 8, points: 250 },
        { name: 'Kevin Durant', gamesPlayed: 12, points: 320 },
    ];

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Player Name</TableCell>
                        <TableCell>Games Played</TableCell>
                        <TableCell>Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {playerData.map((player) => (
                        <TableRow key={player.name}>
                            <TableCell>{player.name}</TableCell>
                            <TableCell>{player.gamesPlayed}</TableCell>
                            <TableCell>{player.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TablePlayerStats;