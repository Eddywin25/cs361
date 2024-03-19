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

export default function SelectVariants({ onChange }: { onChange: any }) {
  const [player, setPlayer] = React.useState('');

  const [playerData, setPlayerData] = useState<PlayerData[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/player')  //Adjust the URL based on server
      .then(response => response.json())
      .then(data => setPlayerData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    setPlayer(newValue); // Update local state to reflect the current selection
    onChange(newValue); // Call the onChange prop function to update parent component's state
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Player</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={player}
          onChange={handleChange}
          label="Player"
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {playerData.map((player) => (
              <MenuItem value={player.id}>
                  {player.first_name} {player.last_name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}