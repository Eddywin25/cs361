import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  id: String,
  first_name: String,
  last_name: String,
  team: String,
  position: String,
  team_id: String,
  // add other fields here
});

const Player = mongoose.model('players', PlayerSchema);

export default Player;
