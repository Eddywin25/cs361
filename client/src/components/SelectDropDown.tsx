import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface PlayerData {
  id: string;
  first_name: string;
  last_name: string;
  team_id: string;
}

export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const [playerData, setPlayer] = useState<PlayerData[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/player')  //Adjust the URL based on server
      .then(response => response.json())
      .then(data => setPlayer(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Player</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Player"
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {playerData.map((player) => (
              <MenuItem value={player.id}>
                  {player.last_name}, {player.first_name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}