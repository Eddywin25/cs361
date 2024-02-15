import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PlayerStatSchema = new Schema({
  name: String,
  team: String,
  points: String,
  // add other stat fields here
});

const PlayerStats = mongoose.model('game_stats', PlayerStatSchema);

export default PlayerStats;
