import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GameStatSchema = new Schema({
  id: String,
  points: String,
  fga: String,
  fgm: String,
  player_id: String,
});

const GameStats = mongoose.model('game_stats', GameStatSchema);

export default GameStats;
