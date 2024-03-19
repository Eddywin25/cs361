import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  id: String,
  first_name: String,
  last_name: String,
  team_id: String,
  position: String,
});

const Player = mongoose.model('players', PlayerSchema);

export default Player;
