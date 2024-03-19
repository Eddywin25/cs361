import React, { useEffect, useState } from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

// basic interface for team stat data
interface TeamData {
    id: string;
    name: string;
    city: string;
    state: string;
}

// table component 
const TableTeamStats: React.FC = () => {
    const [teamData, setTeam] = useState<TeamData[]>([]);

    useEffect(() => {
    fetch('http://localhost:8000/team')  //Adjust the URL based on server
        .then(response => response.json())
        .then(data => setTeam(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Team</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>State</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teamData.map((team) => (
                        <TableRow key={team.id}>
                            <TableCell>{team.name}</TableCell>
                            <TableCell>{team.city}</TableCell>
                            <TableCell>{team.state}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableTeamStats;