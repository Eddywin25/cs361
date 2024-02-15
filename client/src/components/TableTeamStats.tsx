import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

// basic interface for team stat data
interface TeamData {
    name: string;
    pointsFor: number;
    pointsAgainst: number;
}

// table component 
const TableTeamStats: React.FC = () => {
    const teamData: TeamData[] = [
        { name: 'New York Knicks', pointsFor: 20, pointsAgainst: 18 },
    ];

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Team</TableCell>
                        <TableCell>PTF</TableCell>
                        <TableCell>PTA</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teamData.map((team) => (
                        <TableRow key={team.name}>
                            <TableCell>{team.name}</TableCell>
                            <TableCell>{team.pointsFor}</TableCell>
                            <TableCell>{team.pointsAgainst}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableTeamStats;